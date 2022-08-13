import React from "react";
import './Footer.css';
import 'font-awesome/css/font-awesome.min.css';

function Footer ()
{
    return <div class="row">
  <div class="column left">
    <h2>Explore</h2>
    <p>Home</p>
    <p>Questions</p>
    <p>Articles</p>
    <p>Tutorials</p>
  </div>
<div class="column middle">
    <h2>Support</h2>
    <p>FAQs</p>
    <p>Help</p>
    <p>Contact Us</p><br></br><br></br>   
    <center>
    <h2>DEV@Deakin 2022</h2>
        <p>Privacy Policy&nbsp;&nbsp;&nbsp;&nbsp; Terms &nbsp;&nbsp;&nbsp;&nbsp; Code of Conduct</p>
    </center>
  </div>
  <div class="column right">
    <h2>Stay Connected</h2>
    <div class="logo">
    <i className="fa fa-facebook">&nbsp;&nbsp;&nbsp;</i>
    <i className="fa fa-twitter">&nbsp;&nbsp;&nbsp;</i>
    <i className="fa fa-instagram"></i>
    </div>
    </div>
  </div>
}
export default Footer