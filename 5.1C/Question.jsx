import React from "react";
import "./style.css";


function Question()
{
    return <div>
        <h3><span>What do you want to ask or share</span></h3>
        <label>Title: </label>
        <input type="text" placeholder="Start your question with how, what, why, etc." style={{width:"30%"}}/>
        <br/><br/>
        <h3>Describe your problem: </h3>
        <textarea cols="70" rows="8" style={{width:"32.7%"}}></textarea>
        <br/><br/>
        <label>Tags: </label>
        <input type="text" placeholder="Please add up to 3 tags to describe what your question is about e.g., Java" style={{width:"30%"}}/>
    </div>
}

export default Question;