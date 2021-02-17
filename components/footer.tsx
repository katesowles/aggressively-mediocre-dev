import React, { FC } from 'react';

export const Footer: FC = () => {
  return (
    <footer
      role="contentinfo"
      className="constrained-section responsive-section--top responsive-section--bottom site-footer"
    >
      <p>
        This site is built with{' '}
        <a
          href="https://reactjs.org"
          title="React Homepage"
          target="_blank"
          rel="noreferrer"
        >
          React
        </a>{' '}
        and{' '}
        <a
          href="https://nextjs.org"
          title="Next.js Homepage"
          target="_blank"
          rel="noreferrer"
        >
          Next.js
        </a>
        , and is deployed via{' '}
        <a
          href="https://netlify.app"
          title="Netlify Homepage"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
        . For the code-curious: the{' '}
        <a
          href="https://github.com/katesowles/aggressively-mediocre-dev"
          title="Github repository for the Aggressively Mediocre Dev site"
          target="_blank"
          rel="noreferrer"
        >
          code repository
        </a>
      </p>
    </footer>
  );
};
