import React from 'react';

import { FaSearch, FaMicrophone } from 'react-icons/fa';

import logo from '../../img/1024px-Google_2015_logo.svg.png';
import { SecMain, Search, Input, SearchButton } from './styles';

function Main() {
  return (
    <>
      <SecMain>
        <img src={logo} id="logo" alt="google" />
        <Search>
          <Input>
            <FaSearch />
            <input type="text" autoFocus />
            <FaMicrophone />
          </Input>
          <SearchButton>
            <button>Google Search</button>
            <button>I'm Feeling Lucky</button>
            <span>
              Google offered in: <a href="./index.js">English</a>
            </span>
          </SearchButton>
        </Search>
      </SecMain>
    </>
  );
}

export default Main;
