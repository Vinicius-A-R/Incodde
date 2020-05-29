import React from 'react';

import { Display } from './styles';

import Header from '../../components/Header';
import Main from '../../components/Main';
import Footer from '../../components/Footer';

export default function Home() {
  return (
    <Display>
      <Header />
      <Main />
      <Footer />
    </Display>
  );
}
