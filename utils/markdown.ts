import remark from 'remark';
import html from 'remark-html';
import externalLinks from 'remark-external-links';
import { PostParams } from '~/types/params';

export const markdownToHtml = async (markdown) => {
  const result = await remark()
    .use(externalLinks, { target: false, rel: ['nofollow', 'noreferrer'] })
    .use(html)
    .process(markdown);
  return result.toString();
};

export const convertPostContent = async (post: PostParams) => {
  const content = await markdownToHtml(post?.content);
  const excerpt = post?.excerpt
    ? await markdownToHtml(post?.excerpt)
    : await markdownToHtml(`${post?.content.split(new RegExp(/\n\n/))[0]}...`);
  return { ...post, content, excerpt };
};
