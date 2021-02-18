import Author from './author';

export type BasicParams = {
  title: string;
  slug: string;
  date: string;
  content: string;
};

export type PostParams = BasicParams & {
  author?: Author;
  excerpt?: string;
  tags?: string[];
  coverImageUrl?: string;
  ogImageUrl?: string;
};

export type BasicParam = keyof BasicParams;
export type PostParam = keyof PostParams;

export const basicParams: BasicParam[] = ['title', 'slug', 'date', 'content'];

export const postParams: PostParam[] = [
  ...basicParams,
  'author',
  'excerpt',
  'tags',
  'coverImageUrl',
  'ogImageUrl',
];
