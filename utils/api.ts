import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { postParams, PostParams, PostParam } from '~/types/params';
import { CustomStaticProps } from '~/types/customStaticProps';
import { convertPostContent } from './markdown';

const keySlugDirectories = {
  page: 'content/pages',
  post: 'content/posts',
  site: 'content/site-wide',
};

type KeySlugType = keyof typeof keySlugDirectories;

const getContentPath = (type: KeySlugType, path?: string | string[]) => {
  return Array.isArray(path)
    ? join(process.cwd(), keySlugDirectories[type], ...path)
    : join(process.cwd(), keySlugDirectories[type], path ?? '');
};

const getKeySlugs = (type: KeySlugType): string[] => {
  return fs.readdirSync(getContentPath(type));
};

const getMarkdownData = (type: KeySlugType, filename?: string) => {
  const realSlug = filename.replace(/\.md$/, '');
  const fullPath = getContentPath(type, filename);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  return { ...matter(fileContents), realSlug };
};

export const getPostBySlug = (
  slug: string,
  fields: PostParam[],
): PostParams => {
  const { data, content, realSlug } = getMarkdownData('post', slug);

  const items = {} as PostParams;

  // Ensure only the minimal needed data is exposed
  fields.forEach((field: PostParam) => {
    if (field === 'slug') items[field] = realSlug;
    else if (field === 'content') items[field] = content;
    else if (data[field]) items[field] = data[field];
  });

  return items;
};

const getAllPosts = (fields: PostParam[]): PostParams[] => {
  const slugs = getKeySlugs('post');
  const posts = slugs
    .map((slug: string) => getPostBySlug(slug, fields))
    .sort((post1: PostParams, post2: PostParams) =>
      post1?.date > post2?.date ? -1 : 1,
    );
  return posts;
};

export const getStaticPropsGeneral = async ({
  params,
}: {
  params?;
}): Promise<CustomStaticProps> => {
  let posts: PostParams[] = getAllPosts(postParams) as PostParams[];
  posts = await Promise.all(posts.map(convertPostContent));
  const post = posts.find((item) => item?.slug === params?.slug) ?? null;

  return { props: { posts, post } };
};

export const getStaticPathsGeneral = async () => {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post: PostParams) => ({ params: { slug: post?.slug } })),
    fallback: false,
  };
};
