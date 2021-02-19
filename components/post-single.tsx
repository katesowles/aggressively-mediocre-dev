import React, { FC } from 'react';
import { PostParams } from '../types/params';
import { PostBody } from './post-body';

export const PostSingle: FC<{ post: PostParams }> = ({ post }) => {
  return <PostBody post={post} />;
};
