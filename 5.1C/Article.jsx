import React from "react";
import "./style.css";


function Article()
{
    return <div>
        <h3><span>What do you want to ask or share</span></h3>
        <label>Title: </label>
        <input type="text" placeholder="Start your question with how, what, why, etc." style={{width:"30%"}}/>
        <br/><br/>
        <h3>Abstract: </h3>
        <textarea cols="70" rows="5" placeholder="Enter a 1-paragraph abstract" style={{width:"32.7%"}}></textarea>
        <br/><br/>
        <h3>Article Text: </h3>
        <textarea cols="70" rows="12" placeholder="Enter a 1-paragraph abstract" style={{width:"32.7%"}}></textarea>
        <br/><br/>
        <label>Tags: </label>
        <input type="text" placeholder="Please add up to 3 tags to describe what your question is about e.g., Java" style={{width:"30%"}}/>
    </div>
}

export default Article;