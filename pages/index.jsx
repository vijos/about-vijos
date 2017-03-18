import _ from 'lodash';
import React from 'react'
import DocumentTitle from 'react-document-title'
import Section from 'components/Section';
import { resolveDocs } from 'utils/docHelper';
import { i18n } from 'utils/i18n';
import { config } from 'config'

function getPageList(pages) {
  return (
    <ul>
      {pages.map(page =>
        (<li key={page.path}><a href={page.path}>{page.data.title}</a></li>)
      )}
    </ul>
  );
}

export default class IndexPage extends React.Component {
  static title = i18n('link_name', 'dochome');
  render() {
    const allPages = this.props.route.pages;
    return (
      <DocumentTitle title={config.siteTitle}><div>
        <Section title={i18n('link_name', 'about')}><div className="typo">
          {getPageList(resolveDocs(allPages, '/about/'))}
        </div></Section>
        <Section title={i18n('link_name', 'help')}><div className="typo">
          <div className="row">
            <div className="medium-4 columns">
              <h3>{i18n('link_name', 'help_user')}</h3>
              {getPageList(resolveDocs(allPages, '/help/user/'))}
            </div>
            <div className="medium-4 columns">
              <h3>{i18n('link_name', 'help_administrator')}</h3>
              {getPageList(resolveDocs(allPages, '/help/administrator/'))}
            </div>
            <div className="medium-4 columns">
              <h3>{i18n('link_name', 'help_contributor')}</h3>
              {getPageList(resolveDocs(allPages, '/help/contributor/'))}
            </div>
          </div>
        </div></Section>
      </div></DocumentTitle>
    );
  }
}
