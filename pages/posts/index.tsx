import React, { FC } from 'react';
import { useRouter } from 'next/router';
import { getStaticPropsGeneral } from '~/utils/api';
import { Layout } from '~/components/layout';
import { PostList } from '~/components/post-list';
import { PostParams } from '~/types/params';

type PostsProps = {
  posts: PostParams[];
};

const Posts: FC<PostsProps> = ({ posts }) => {
  const router = useRouter();

  return (
    <Layout title="posts">
      {router.isFallback && !posts ? 'Loading...' : <PostList posts={posts} />}
    </Layout>
  );
};

export default Posts;
export const getStaticProps = getStaticPropsGeneral;
