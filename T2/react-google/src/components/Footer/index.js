import React from 'react';

import { SecFooter, Location, Info } from './styles';

function Footer() {
  return (
    <>
      <SecFooter>
        <Location>
          <a href="./index.js">Brazil</a>
        </Location>
        <Info>
          <div id="market">
            <a href="./index.js">Advertising</a>
            <a href="./index.js">Business</a>
            <a href="./index.js">About</a>
            <a href="./index.js">How Search works</a>
          </div>
          <div id="security">
            <a href="./index.js">Privacy</a>
            <a href="./index.js">Terms</a>
            <a href="./index.js">Settings</a>
          </div>
        </Info>
      </SecFooter>
    </>
  );
}

export default Footer;
