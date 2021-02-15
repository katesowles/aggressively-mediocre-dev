import React, { FC } from 'react';
import Post from '~/types/post';
import { PostBody } from './post-body';

export const PostSingle: FC<{ post: Post }> = ({ post }) => {
  return (
    <>
      <main
        role="main"
        className="constrained-section responsive-section--bottom site-content post-single"
      >
        <PostBody post={post} />
      </main>
    </>
  );
};
