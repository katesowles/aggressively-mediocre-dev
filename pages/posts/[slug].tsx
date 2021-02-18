import React, { FC } from 'react';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { getStaticPathsGeneral, getStaticPropsSinglePost } from '~/utils/api';
import { Layout } from '~/components/layout';
import { PostSingle } from '~/components/post-single';
import { PostParams } from '~/types/params';

type PostProps = {
  post: PostParams;
};

const Post: FC<PostProps> = ({ post, ...props }) => {
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
