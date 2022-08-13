import React from 'react';
import './Header.css';

function Header ()
{
    return <div class="topnav">
    <b><a>DEV@Deakin</a></b>
        <input type="text" placeholder="🔍 Search..." name="search"/>
          <a>Post</a>
            <a>Login</a>
  </div>
}
export default Header