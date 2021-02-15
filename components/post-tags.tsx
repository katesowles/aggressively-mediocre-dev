import Link from 'next/link';
import React, { FC, Fragment } from 'react';

type PostTagsProps = {
  tags: string[];
};

export const PostTags: FC<PostTagsProps> = ({ tags }) => {
  return (
    <nav
      role="navigation"
      aria-label="tags for post: {{ .Title }}"
      className="post-tags"
    >
      {tags?.map((tag) => (
        <Fragment key={tag}>
          <Link href={`/tags/${tag}`}>
            {/* className="post-tag" */}
            {tag.replace(/ /, '\u00A0').toLowerCase()}
          </Link>
          &ensp;
        </Fragment>
      ))}
    </nav>
  );
};
