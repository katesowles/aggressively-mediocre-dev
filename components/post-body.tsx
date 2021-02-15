import React, { FC } from 'react';
import classnames from 'classnames';
import { PostFrontmatter } from './post-frontmatter';
import Post from '../types/post';

type PostBodyProps = {
  post: Post;
  isExcerpt?: boolean;
};

export const PostBody: FC<PostBodyProps> = ({ post, isExcerpt = false }) => {
  const sectionClasses = classnames({
    content: true,
    abridged: isExcerpt,
    unabridged: !isExcerpt,
  });

  const body = isExcerpt ? post.excerpt : post.content;

  return (
    <article className="responsive-section--top post">
      <PostFrontmatter {...post} />

      <section className={sectionClasses}>
        <span dangerouslySetInnerHTML={{ __html: body }} />

        {isExcerpt && (
          <p className="read-more">
            <a href={`/posts/${post?.slug}`}>See full post...</a>
          </p>
        )}
      </section>
    </article>
  );
};
