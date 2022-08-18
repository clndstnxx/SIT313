import React, { useState } from "react";

import "./style.css";
import Question from "./Question";
import Article from "./Article";
import Button from "./post";

function App() {
  const [choose, setChoosen] = useState('Question');
  const handleChange = (event) => {
    setChoosen(event.target.value);
  };


  return <div className="App">
    <h3> <span>New Post</span></h3>
    <label>Select Post Type: </label>
        <input
        type="radio"
        value="Question"
        id="Question"
        checked={choose === "Question"}
        onChange={handleChange}
      />

      <label htmlFor="Question">Question</label>
      <input
        type="radio"
        value="Article"
        id="Article"
        checked={choose === "Article"}
        onChange={handleChange}
      />

      <label htmlFor="Article">Article</label>
      <div aria-hidden={choose !== "Article" ? true : false}>
        <Article />
        <Button text = "Post"/>
      </div>
      <div aria-hidden={choose !== "Question" ? true : false}>
        <Question />
        <Button text = "Post"/>
      </div>
    </div>
  ;
}

export default App;