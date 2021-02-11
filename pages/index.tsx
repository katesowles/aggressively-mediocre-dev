import { getStaticPropsAllPosts } from '~/utils/api';
import Posts from './posts';

export default Posts;

export const getStaticProps = getStaticPropsAllPosts;
