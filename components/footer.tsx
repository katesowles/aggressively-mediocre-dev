import React, { FC } from 'react';

export const Footer: FC = () => {
  return (
    <footer
      role="contentinfo"
      className="constrained-section responsive-section--top responsive-section--bottom site-footer"
    >
      <p>
        This site is built on{' '}
        <a
          href="https://gohugo.io"
          title="Go Hugo, homepage for the Hugo framework"
          target="_blank"
          rel="noreferrer"
        >
          Hugo
        </a>
        . Post date format inspired by{' '}
        <a
          href="https://tatianamac.com"
          title="Tatiana Mac's Website"
          target="_blank"
          rel="noreferrer"
        >
          Tatiana Mac
        </a>
        . For the code-curious, the{' '}
        <a
          href="https://github.com/katesowles/aggressively-mediocre-theme"
          title="Github repository for the Aggressively Mediocre theme"
          target="_blank"
          rel="noreferrer"
        >
          template repository
        </a>{' '}
        and the{' '}
        <a
          href="https://github.com/katesowles/aggressively-mediocre-dev"
          title="Github repository for the Aggressively Mediocre blog content"
          target="_blank"
          rel="noreferrer"
        >
          content repository
        </a>
      </p>
    </footer>
  );
};
