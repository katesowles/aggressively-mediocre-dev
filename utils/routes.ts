import { NextRouter } from 'next/router';

export const isActiveSlug = (slug: string, router: NextRouter) => {
  return router?.query?.slug === slug;
};
