import React from "react";
import deakin from "./deakin.jpeg"
import "./Image.css";

function Image(){
    return(
        <div>
            <img className='deakin' src={deakin} alt=""/>
        </div>
    )
}

export default Image;