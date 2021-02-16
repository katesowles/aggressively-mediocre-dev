import React, { FC, ReactNode, ReactNodeArray } from 'react';
import classnames from 'classnames';
import { getDateObjects } from '~/utils/dates';
import { Layout } from './layout';

type PageBodySectionProps = {
  children: ReactNode | ReactNodeArray;
  hasColumns?: boolean;
};

export const PageBodySection: FC<PageBodySectionProps> = ({
  children,
  hasColumns = false,
}) => {
  const sectionClasses = classnames({
    content: true,
    columns: hasColumns,
  });

  return <section className={sectionClasses}>{children}</section>;
};

type PageBodyProps = {
  children: ReactNode | ReactNodeArray;
  title: string;
  date?: string;
};

export const PageBody: FC<PageBodyProps> = ({ title, date, children }) => {
  const pageDate = getDateObjects(date).utc;

  return (
    <Layout title={title}>
      <h2 className="page-title">{title}</h2>

      {children}

      <small className="page-date">
        Last Updated
        <time
          dateTime={`${pageDate.formattedDateLong} ${pageDate.formattedTimeLong24}`}
        >
          {pageDate.formattedDateShort} {pageDate.formattedTimeLong24}
        </time>
      </small>
    </Layout>
  );
};
