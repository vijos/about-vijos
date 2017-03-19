import React from 'react';
import c from 'classnames';

export function SectionHeader(props) {
  return (
    <div className="section__header">
      <h1 className="section__title">{props.children}</h1>
    </div>
  );
}

export function SectionBody(props) {
  return (
    <div className="section__body">{props.children}</div>
  );
}

export function SectionFooter(props) {
  return (
    <div className="section__footer">{props.children}</div>
  );
}

export default function Section(props) {
  const header = props.title
    ? <SectionHeader>{props.title}</SectionHeader>
    : null;
  const inner = (props.body === false)
    ? props.children
    : <SectionBody>{props.children}</SectionBody>;
  const footer = props.footer
    ? <SectionFooter>{props.footer}</SectionFooter>
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
