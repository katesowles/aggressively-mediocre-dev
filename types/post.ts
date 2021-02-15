import Author from './author';

type Post = {
  title: string;
  slug: string;
  date: string;
  content: string;
  excerpt: string;
  tags: string[];
  author: Author;
  coverImageUrl: string;
  ogImageUrl: string;
};

export type PostParam = keyof Post;

export const postParams: PostParam[] = [
  'title',
  'slug',
  'date',
  'content',
  'excerpt',
  'tags',
  'author',
  'coverImageUrl',
  'ogImageUrl',
];

export default Post;
