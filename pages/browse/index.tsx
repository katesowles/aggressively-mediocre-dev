import React, { FC } from 'react';
import { PageBody, PageBodySection } from '~/components/page-body';

const Browse: FC = () => {
  return (
    <PageBody title="Browse">
      <PageBodySection hasColumns>
        {/* <!-- this is the page that shows at /browse --> */}
        {/* <div>
            <h2>browse by {{ .title }}</h2>

            <ul>
            {{ range .list }}
              <li className="taxonomy-listitem">
                {{ $postCount := len .Pages}}
                {{- if ge $postCount 1 -}}
                  <a href="/{{ .Page.Type }}/{{ lower .Page.Title }}">
                    {{- lower .Page.Title -}}
                  </a>
                {{- else -}}
                  {{- lower .Page.Title -}}
                {{- end -}}
                &thinsp;<small>({{ $postCount }}&nbsp;{{if eq $postCount 1}}post{{else}}posts{{end}})</small>
              </li>
            {{ end }}
            </ul>
          </div> */}
      </PageBodySection>
    </PageBody>
  );
};

export default Browse;
