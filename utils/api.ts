import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import Post, { PostParam, postParams } from '~/types/post';
import { convertPostContent } from './markdown';

const postsDirectory = join(process.cwd(), 'content/posts');

export const getPostSlugs = (): string[] => {
  return fs.readdirSync(postsDirectory);
};

export const getPostBySlug = (slug: string, fields: PostParam[]): Post => {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items = {} as Post;

  // Ensure only the minimal needed data is exposed
  fields.forEach((field: PostParam) => {
    if (field === 'slug') items[field] = realSlug;
    else if (field === 'content') items[field] = content;
    else if (data[field]) items[field] = data[field];
  });

  return items;
};

export const getAllPosts = (fields: PostParam[]): Post[] => {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug: string) => getPostBySlug(slug, fields))
    .sort((post1: Post, post2: Post) => (post1?.date > post2?.date ? -1 : 1));
  return posts;
};

export const getStaticPropsAllPosts = async (): Promise<{
  props: { posts: Post[] };
}> => {
  let posts: Post[] = getAllPosts(postParams) as Post[];
  posts = await Promise.all(posts.map(convertPostContent));
  return { props: { posts } };
};

export const getStaticPropsSinglePost = async ({
  params,
}): Promise<{ props: { post: Post } }> => {
  let post: Post = getPostBySlug(params.slug, postParams) as Post;
  post = await convertPostContent(post);
  return { props: { post } };
};

export const getStaticPathsGeneral = async () => {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post: Post) => ({ params: { slug: post?.slug } })),
    fallback: false,
  };
};
