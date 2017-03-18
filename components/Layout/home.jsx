import React from 'react';
import BaseLayout from './base';

export default function HomeLayout(props) {
  const { children, ...restProps } = props;
  return (
    <BaseLayout {...restProps}>{children}</BaseLayout>
  );
}
