import './index.styl';

import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router';
import DocumentTitle from 'react-document-title';
import Section, { SectionHeader, SectionBody } from 'components/Section';
import { resolveDocs } from 'utils/docHelper';
import { i18n } from 'utils/i18n';
import { prefixLink } from 'utils/link';
import { config } from 'config';

function getPageList(pages) {
  return (
    <div className="typo"><ul>
      {pages.map(page => (
        <li key={page.path}>
          <Link to={prefixLink(page.path)}>{page.data.title}</Link>
          { page.data.description ? <span className="supplementary page--docs__description">{page.data.description}</span> : null}
        </li>
      ))}
    </ul></div>
  );
}

export default class IndexPage extends React.Component {
  static title = i18n('link_name', 'dochome');
  render() {
    const allPages = this.props.route.pages;
    return (
      <DocumentTitle title={config.siteTitle}>
        <Section body={false}>
          <SectionHeader>
            {i18n('link_name', 'help_user')}
          </SectionHeader>
          <SectionBody>
            {getPageList(resolveDocs(allPages, '/help/user/'))}
          </SectionBody>
          <SectionHeader>
            {i18n('link_name', 'help_administrator')}
          </SectionHeader>
          <SectionBody>
            {getPageList(resolveDocs(allPages, '/help/administrator/'))}
          </SectionBody>
          <SectionHeader>
            {i18n('link_name', 'help_contributor')}
          </SectionHeader>
          <SectionBody>
            {getPageList(resolveDocs(allPages, '/help/contributor/'))}
          </SectionBody>
          <SectionHeader>
            {i18n('link_name', 'about')}
          </SectionHeader>
          <SectionBody>
            {getPageList(resolveDocs(allPages, '/about/'))}
          </SectionBody>
        </Section>
      </DocumentTitle>
    );
  }
}
