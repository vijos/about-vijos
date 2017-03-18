import React from 'react';
import BaseLayout from './base';

export default function NotFoundLayout(props) {
  const { children, ...restProps } = props;
  return (
    <BaseLayout {...restProps}><div className="page--error">
      <div className="error__container clearfix">
        <div className="error__icon-container">
          <div className="error__twd2"></div>
        </div>
        <div className="error__text-container">
          <h1>Oops!</h1>
          <p>该页面不存在</p>
        </div>
      </div>
    </div></BaseLayout>
  );
}
