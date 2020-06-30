import React from 'react';
import { PageRendererProps } from 'gatsby';
import { SEO } from 'common/components';
import { AppLayout } from 'layouts';
import { Home } from 'pods/home';

const IndexPage: React.FC<PageRendererProps> = (props) => {
  const { location } = props;
  return (
    <AppLayout
      pathname={location.pathname}
      seoComponent={
        <SEO
          title="Home"
          keywords={[
            'luis del amo',
            'delamux',
            'gatsby',
            'developer',
            'frontent',
            'ssr',
            'typescript',
            'javascript',
            'backend',
            'react',
            'angular',
          ]}
        />
      }
    >
      <Home />
    </AppLayout>
  );
};

export default IndexPage;
