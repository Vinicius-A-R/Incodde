import React from 'react';
import { Link } from 'react-router-dom';

import { Menu } from './styles.js';
import { FaUserSecret } from 'react-icons/fa';
import { GrApps } from 'react-icons/gr';

function Header() {
  return (
    <div>
      <Menu>
        <div>
          <Link to="#">Gmail</Link>
          <Link to="#">Images</Link>
          <div id="apps">
            <GrApps />
          </div>
          <div id="user">
            <FaUserSecret />
          </div>
        </div>
      </Menu>
    </div>
  );
}

export default Header;
