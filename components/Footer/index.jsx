import React from 'react';
import './footer.styl';

export default function Footer(props) {
  return (
    <div className="page--docs__footer">
      <div className="row"><div className="columns">
        <ul>
          <li>
            Made with <span className="icon icon-heart"></span> by <a href="//vijos.org">Vijos.org</a>
          </li>
          <li>
            Generated from public files on <a href="https://github.com/vijos/about.vijos.org" target="_blank">GitHub</a>
          </li>
        </ul>
      </div></div>
    </div>
  );
}
