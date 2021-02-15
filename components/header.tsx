import React, { FC, Fragment } from 'react';
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
          <Fragment key={key}>
            <Link href={value}>
              {/* className="nav-link page" */}
              {key}
            </Link>
            &ensp;
          </Fragment>
        ))}

        {Object.entries(metadata?.siteFeeds).map(([key, value]) => (
          <Link href={value} key={key}>
            {/* className="nav-link feed" */}
            {key}
            &ensp;
          </Link>
        ))}
      </nav>
    </header>
  );
};
