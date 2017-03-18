import React from 'react';
import c from 'classnames';

export default function Section(props) {
  const header = props.title
    ? (
        <div className="section__header">
          <h1 className="section__title">{props.title}</h1>
        </div>
      )
    : null;
  const inner = (props.body === false)
    ? props.children
    : <div className="section__body">{props.children}</div>;
  const footer = props.footer
    ? (<div className="section__footer">{props.footer}</div>)
    : null;
  return (
    <div
      className={c(['section', { side: props.side }])}
    >
      {header}
      {inner}
      {footer}
    </div>
  );
}
