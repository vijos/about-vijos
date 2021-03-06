import './footer.styl';

import React from 'react';
import { config } from 'config';

export default function Footer(props) {
  return (
    <div className="page--docs__footer">
      <div className="row"><div className="columns">
        <ul>
          <li>
            Made with <span className="icon icon-heart"></span> by <a href={config.vijosSiteUrl}>{config.vijosSiteTitle}</a>
          </li>
          <li>
            Generated from public files on <a href={config.projectUrl} target="_blank">GitHub</a>
          </li>
        </ul>
      </div></div>
    </div>
  );
}
