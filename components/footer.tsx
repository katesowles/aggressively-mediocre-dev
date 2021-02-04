import React, { FC } from 'react';

export const Footer: FC = () => {
  return (
    <footer
      role="contentinfo"
      className="constrained-section responsive-section--top responsive-section--bottom site-footer"
    >
      {/* <p>{{ .Site.Params.footerText | safeHTML }}</p> */}
    </footer>
  );
};
