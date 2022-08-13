import React from "react";
import './Subscribe.css'

function Subscribe(){
    return  <form action="/" method="post">
    <label>SIGN UP FOR OUR DAILY INSIDER </label>
    <input type="email" id="email" name="email" placeholder="Enter your email"/>
    <button className="buttonSub"> SUBSCRIBE </button>
</form>
}
export default Subscribe;