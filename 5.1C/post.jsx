import React from "react";
import "./style.css";

function Button(props){
    return <div class="button">
    <button>{props.text}</button>
  </div>
}

export default Button;