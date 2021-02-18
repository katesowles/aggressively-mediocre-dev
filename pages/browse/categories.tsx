import React, { FC } from 'react';

const TaxonomyCategories: FC = () => {
  return (
    <>
      {/* <!-- this is the page that shows at /categories/:category and /tags/:tag --> */}
      <section className="content">
        <div>
          {/* <h2>posts with {{ .Data.Singular }} "{{ lower .Title }}"</h2> */}

          <ul>
            {/* {{ range .Pages }} */}
            <li className="post-listitem">
              {/* <a href="{{ .Page.RelPermalink }}">{{ .Page.LinkTitle }}</a> */}
              <small>
                {/* published&nbsp;<time datetime="{{ .Page.PublishDate.UTC.Format "02 Jan 2006" }}">
                {{- .Page.PublishDate.UTC.Format "02 Jan 2006" -}}
              </time> */}
              </small>
            </li>
            {/* {{ end }} */}
          </ul>
        </div>
      </section>
    </>
  );
};

export default TaxonomyCategories;
