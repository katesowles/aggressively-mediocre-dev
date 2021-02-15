import React, { FC } from 'react';
import Post from '~/types/post';
import { PostBody } from './post-body';

export const PostList: FC<{ posts: Post[] }> = ({ posts }) => {
  return (
    <main
      role="main"
      className="constrained-section responsive-section--bottom site-content post-list"
    >
      {posts?.map((post) => {
        return <PostBody isExcerpt post={post} key={post.slug} />;
      })}
    </main>
  );
};
