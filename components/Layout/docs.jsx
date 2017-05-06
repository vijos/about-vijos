import _ from 'lodash';
import React from 'react';
import { resolveDocs } from 'utils/docHelper';
import BaseLayout from './base';
import Section from 'components/Section';
import { Menu, MenuLinkItem } from 'components/Menu';
import { prefixLink } from 'utils/link';

function getParentScopePages(currentPath, allPages) {
  let parentPath;
  if (_.endsWith(currentPath, '/')) {
    parentPath = currentPath.split('/').slice(0, -2).concat('').join('/')
  } else {
    parentPath = currentPath.split('/').slice(0, -1).concat('').join('/')
  }
  return resolveDocs(allPages, parentPath)
    .map(page => {
      return {
        href: page.path,
        title: page.data.title,
        active: page.path === currentPath,
      };
    });
}

export default function DocsLayout(props) {
  const { children, ...restProps } = props;
  const otherPages = getParentScopePages(props.location.pathname, props.route.pages);
  return (
    <BaseLayout {...restProps}>
      <div className="row">
        <div className="medium-9 columns">
          {children}
        </div>
        <div className="medium-3 columns">
          <Section body={false} side={true}>
            <Menu>
              {otherPages.map(page => {
                return (
                  <MenuLinkItem key={page.href} href={prefixLink(page.href)} active={page.active}>
                    {page.title}
                  </MenuLinkItem>
                );
              })}
            </Menu>
          </Section>
        </div>
      </div>
    </BaseLayout>
  );
}
