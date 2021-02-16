import React, { FC } from 'react';
import Post from '~/types/post';
import { PostBody } from './post-body';

export const PostSingle: FC<{ post: Post }> = ({ post }) => {
  return <PostBody post={post} />;
};
