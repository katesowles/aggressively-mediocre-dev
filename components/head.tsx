import React, { FC } from 'react';
import NextHead from 'next/head';
import metadata from '~/data/metadata';

type HeadProps = {
  title?: string;
  author?: string;
  description?: string;
  ogImageUrl?: string;
};

export const Head: FC<HeadProps> = ({
  title = '',
  author = metadata.siteAuthor,
  description = metadata.siteDescription,
  ogImageUrl = metadata.sitePreviewImageUrl,
}) => {
  return (
    <NextHead>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="color-scheme" content="dark light" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <title>
        {title ? `${title} | ` : ''}
        {metadata.siteTitle}
      </title>
      <meta name="author" content={author} />
      <meta name="description" content={description} />
      <meta property="og:image" content={ogImageUrl} />

      <link rel="icon" href="favicon.ico" type="image/x-icon" />

      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com/"
        crossOrigin="true"
      />

      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,600&display=optional"
      />
    </NextHead>
  );
};
