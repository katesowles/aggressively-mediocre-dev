import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import metadata from '~/data/metadata';
import Post from '~/types/post';
import { PostBody } from './post-body';

type PostListProps = {
  posts: Post[];
};

export const PostList: FC<PostListProps> = ({ posts }) => {
  const router = useRouter();

  let activePage = 1;

  if (router?.query?.page && Array.isArray(router?.query?.page)) {
    activePage = parseInt(router.query.page[0], 10);
  } else if (router?.query?.page && !Array.isArray(router.query.page)) {
    activePage = parseInt(router.query.page, 10);
  }

  const visibleStart = (activePage - 1) * metadata.postsPerPage ?? 0;
  const visibleEnd = visibleStart + metadata.postsPerPage;
  const visiblePosts = posts.slice(visibleStart, visibleEnd);

  const numberOfPosts = posts.length;
  const numberOfPages = Math.ceil(numberOfPosts / metadata.postsPerPage);

  const hasNewer = activePage === null || activePage > 1;
  const hasOlder = activePage < numberOfPages;

  return (
    <>
      {visiblePosts?.map((post) => {
        return <PostBody isExcerpt post={post} key={post.slug} />;
      })}

      {(hasNewer || hasOlder) && (
        <nav id="post-nav">
          {hasNewer && (
            <Link href={`/posts?page=${activePage - 1}`}>← Newer Posts</Link>
          )}

          {hasNewer && hasOlder && <>&emsp;|&emsp;</>}

          {hasOlder && (
            <Link href={`/posts?page=${activePage + 1}`}>Older Posts →</Link>
          )}
        </nav>
      )}
    </>
  );
};
