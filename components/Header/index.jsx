import _ from 'lodash';
import React from 'react';
import pathToRegexp from 'path-to-regexp';
import sub from 'string-sub';
import { config } from 'config';
import { i18n } from 'utils/i18n';
import { resolveFirstDoc } from 'utils/docHelper';
import './header.styl';

function buildLocationPath(currentLocation, allPages) {
  const links = [];
  links.push({ href: config.vijosSiteUrl, title: config.vijosSiteTitle });
  for (let location of config.location) {
    const keys = [];
    const match = pathToRegexp(location.match, keys).exec(currentLocation);
    if (!match) {
      continue;
    }
    const pathInfo = {};
    keys.forEach((keyInfo, idx) => {
      pathInfo[keyInfo.name] = match[idx + 1];
    });
    location.links.forEach(linkInfo => {
      let href;
      if (linkInfo.href) {
        href = sub(linkInfo.href, pathInfo);
      } else if (linkInfo.href_doc) {
        href = sub(linkInfo.href_doc, pathInfo);
        href = resolveFirstDoc(allPages, href).path;
      } else {
        href = '#'
      }
      links.push({ href, title: i18n('link_name', sub(linkInfo.name, pathInfo)) });
    });
  }
  return links;
}

export default function Header(props) {
  const currentRoute = _.last(props.routes);
  const currentTitle = currentRoute.page.data.title || currentRoute.component.title;
  const links = buildLocationPath(currentRoute.page.path, props.route.pages);
  return (
    <div className="page--docs__header">
      <div className="row"><div className="columns">
        <div className="location-path"> /
          {links.map(({ href, title }, idx) => <span key={idx}><a href={href}>{title}</a> / </span>)}
        </div>
        <h1 className="location-current">{currentTitle}</h1>
      </div></div>
    </div>
  );
  return (<div>123</div>);
}
