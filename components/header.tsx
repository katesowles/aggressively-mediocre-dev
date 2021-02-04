import React, { FC } from 'react';

export const Header: FC = () => {
  return (
    <header className="constrained-section responsive-section--top responsive-section--bottom site-header">
      <h1 className="site-title">
        {/* {{ range first 1 (where .Site.Pages.ByTitle "Kind" "home") }}
      <a href="{{ .RelPermalink }}">{{ .Site.Title }}</a>
    {{ end }} */}
      </h1>

      <nav role="navigation" aria-label="primary" className="primary-nav">
        {/* {{ range .Site.Pages.ByTitle }}
      {{ if and (eq .Kind "page") (ne .Params.Title nil) (ne .Type "posts") }}
        <a className="nav-link page" href="{{ .RelPermalink }}">{{ .Params.Title | default .Type }}</a>
      {{ end }}
    {{ end }}

    {{ if and (.Site.Params.rssFeedLinkText) (.Site.Params.rssFeedLinkUrl) }}
      <a className="nav-link rss-feed" href="{{ .Site.Params.rssFeedLinkUrl }}">{{ .Site.Params.rssFeedLinkText }}</a>
    {{ end }} */}
      </nav>
    </header>
  );
};
