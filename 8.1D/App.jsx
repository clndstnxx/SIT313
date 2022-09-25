import React from "react";
import { useState } from "react";
import Article from "./components/article";
import Question from "./components/question";

function App() {
  const [activeTab, setActiveTab] = useState("question");
  return (
    <div className="w-full h-full p-5 flex flex-col space-y-5">
      <h1>Select Post Type :</h1>
      <div className="flex bg-secondary w-fit rounded-md overflow-hidden">
        <div
          className={`${
            activeTab === "question" ? " bg-primary text-white" : ""
          } p-3 text-center cursor-pointer w-[15rem]`}
          onClick={() => setActiveTab("question")}
        >
          Question
        </div>
        <div
          className={`${
            activeTab === "article" ? " bg-primary text-white" : ""
          } p-3 text-center cursor-pointer w-[15rem]`}
          onClick={() => setActiveTab("article")}
        >
          Article
        </div>
      </div>
      {activeTab === "question" && <Question />}
      {activeTab === "article" && <Article />}
    </div>
  );
}

export default App;
