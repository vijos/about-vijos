import React from 'react';
import DocumentTitle from 'react-document-title';
import { config } from 'config';
import { prefixLink } from 'utils/link';

const BUILD_TIME = new Date().getTime();

const bootstrapScript = `
  var _htmlNode = document.documentElement;
  _htmlNode.className = _htmlNode.className.replace(' nojs', ' hasjs');
  var UiContext = {
    csrf_token: '',
    cdn_prefix: ${JSON.stringify(config.vijosStaticHost)},
    url_prefix: ${JSON.stringify(config.vijosSiteUrl)},
  };
  var UserContext = null;
`;

export default function HTML(props) {
  const title = DocumentTitle.rewind();
  let css, js;
  if (process.env.NODE_ENV === 'production') {
    css = (<link rel="stylesheet" href={prefixLink('/styles.css')} />);
  } else {
    js = (<script src={`/bundle.js?t=${BUILD_TIME}`} />);
  }
  return (
    <html data-layout="doc" class="layout--doc nojs">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <link rel="stylesheet" href={`${config.vijosStaticHost}vendors.css`} />
        <link rel="stylesheet" href={`${config.vijosStaticHost}vj4.css`} />
        <script dangerouslySetInnerHTML={{ __html: bootstrapScript }}></script>
        {css}
      </head>
      <body>
        <div id="react-mount" dangerouslySetInnerHTML={{ __html: props.body }} />
        {js}
        <script type="text/javascript" src={`${config.vijosStaticHost}manifest.js`} />
        <script type="text/javascript" src={`${config.vijosStaticHost}vendors.js`} />
        <script type="text/javascript" src={`${config.vijosStaticHost}vj4.js`} />
      </body>
    </html>
  );
}
