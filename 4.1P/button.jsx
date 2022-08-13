import React from "react";
import './button.css';

function Button(props){
    return <div class="button">
    <button>{props.text}</button>
  </div>
}

export default Button;
