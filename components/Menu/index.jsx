import React from 'react';
import { Link } from 'react-router'
import c from 'classnames';

export function Menu(props) {
  return (
    <ol className="menu">{props.children}</ol>
  );
}

export function MenuLinkItem(props) {
  return (
    <li className="menu__item">
      <Link
        to={props.href}
        className={c([
          'menu__link',
          { active: props.active },
        ])}
      >
        {props.children}
      </Link>
    </li>
  );
}
