import React from 'react';
import { useRouter } from 'next/router';
import { getStaticPropsAllPosts } from '~/utils/api';
import { Layout } from '~/components/layout';
import { PostList } from '~/components/post-list';

export default ({ posts }) => {
  const router = useRouter();

  return (
    <Layout title="posts">
      {router.isFallback && !posts ? 'Loading...' : <PostList posts={posts} />}
    </Layout>
  );
};

export const getStaticProps = getStaticPropsAllPosts;
