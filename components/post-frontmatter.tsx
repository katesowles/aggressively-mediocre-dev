import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { PostParams } from '../types/params';
import { getTimeToRead } from '~/utils/content';
import { getDateObjects } from '~/utils/dates';
import { isActiveSlug } from '~/utils/routes';
import { PostTags } from './post-tags';

export const PostFrontmatter: FC<PostParams> = ({
  title,
  content,
  date,
  slug,
  tags,
}) => {
  const router = useRouter();
  const isActiveUrl = isActiveSlug(slug, router);
  const readingStats = getTimeToRead(content);

  const postDate = getDateObjects(date).utc;

  return (
    <div className="post-frontmatter">
      <h2 className="post-title">
        {isActiveUrl ? <Link href={`/posts/${slug}`}>{title}</Link> : title}
      </h2>

      <p className="post-date">
        <time
          dateTime={`${postDate.formattedDateLong} ${postDate.formattedTimeLong24}`}
        >
          {postDate.formattedDateShort} {postDate.formattedTimeLong24}
        </time>
      </p>

      <p className="post-duration">
        <time dateTime={`PT0H${readingStats.roundedMinutes}M0S`}>
          {readingStats.durationString}
        </time>{' '}
        to read &nbsp;&middot;&nbsp; {readingStats.words} words
      </p>

      <PostTags tags={tags} />
    </div>
  );
};
