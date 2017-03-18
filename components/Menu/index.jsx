import React from 'react';
import c from 'classnames';

export function Menu(props) {
  return (
    <ol className="menu">{props.children}</ol>
  );
}

export function MenuLinkItem(props) {
  return (
    <li className="menu__item">
      <a
        href={props.href}
        className={c([
          'menu__link',
          { active: props.active },
        ])}
      >
        {props.children}
      </a>
    </li>
  );
}
