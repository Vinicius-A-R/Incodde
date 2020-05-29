import React, { Component } from 'react';
import Routes from './routes';

import GlobalStyle from './styles/global';

export default class App extends Component {
  render() {
    return (
      <>
        <Routes />
        <GlobalStyle />
      </>
    );
  }
}
