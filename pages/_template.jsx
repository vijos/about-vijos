import _ from 'lodash';
import React from 'react';
import HomeLayout from 'components/Layout/home';
import DocsLayout from 'components/Layout/docs';
import NotFoundLayout from 'components/Layout/notfound';

export default function Template(props) {
  const path = _.last(props.routes).page.path;
  switch (path) {
    case '/':
      return <HomeLayout {...props} />;
    case '/404.html':
      return <NotFoundLayout {...props} />;
    default:
      return <DocsLayout {...props} />;
  }
}
