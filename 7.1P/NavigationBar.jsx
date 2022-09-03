import React from "react";
import './Header.css';
import {Outlet, Link} from "react-router-dom"
function NavigationBar()
{
    return  <div>
    <div class="topnav">
    <b><a>DEV@Deakin</a></b>
        <input type="text" placeholder="🔍 Search..." name="search"/>
        <Link classname='link' to='/'>Post</Link>
        <Link classname='link' to='/about'>Login</Link>
  </div>

    <Outlet />
    </div>
}
export default NavigationBar