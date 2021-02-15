import React from 'react';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { getStaticPathsGeneral, getStaticPropsSinglePost } from '~/utils/api';
import { Layout } from '~/components/layout';
import { PostSingle } from '~/components/post-single';

export default ({ post, morePosts, preview }) => {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout title={post?.title}>
      {router.isFallback && !post ? 'Loading...' : <PostSingle post={post} />}
    </Layout>
  );
};

export const getStaticProps = getStaticPropsSinglePost;
export const getStaticPaths = getStaticPathsGeneral;
