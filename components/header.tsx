import React, { FC } from 'react';
import Link from 'next/link';
import metadata from '~/data/metadata';

export const Header: FC = () => {
  return (
    <header className="constrained-section responsive-section--top responsive-section--bottom site-header">
      <h1 className="site-title">
        <Link href={metadata?.homepageSlug}>aggressively mediocre · dev</Link>
      </h1>

      <nav role="navigation" aria-label="primary" className="primary-nav">
        {Object.entries(metadata?.sitePages).map(([key, value]) => (
          <Link href={value} key={key}>
            {/* className="nav-link page" */}
            {key}
          </Link>
        ))}

        {Object.entries(metadata?.siteFeeds).map(([key, value]) => (
          <Link href={value} key={key}>
            {/* className="nav-link feed" */}
            {key}
          </Link>
        ))}
      </nav>
    </header>
  );
};
