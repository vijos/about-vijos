import React from 'react'
import DocumentTitle from 'react-document-title'
import Section from 'components/Section';
import { config } from 'config'

module.exports = React.createClass({
  propTypes () {
    return {
      route: React.PropTypes.object,
    }
  },
  render () {
    const page = this.props.route.page;
    const footer = (
      <div className="supplementary">
        <span className="icon icon-edit" /> Edit this page on <a href={`${config.editUrl}${page.path}`}>GitHub</a>
      </div>
    );
    return (
      <DocumentTitle title={`${page.data.title} - ${config.siteTitle}`}>
        <Section footer={footer}>
          <div className="typo">
            <div dangerouslySetInnerHTML={{ __html: page.data.body }} />
          </div>
        </Section>
      </DocumentTitle>
    )
  },
})
