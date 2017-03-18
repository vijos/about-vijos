import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import './layout.styl';

export default class BaseLayout extends React.Component {
  render() {
    const { children, ...restProps } = this.props;
    return (
      <div id="panel" className="page--docs">
        <Header {...restProps} />
        <div className="page--docs__document">
          <div className="row"><div className="columns">
            {children}
          </div></div>
        </div>
        <Footer {...restProps} />
      </div>
    );
  }
}
