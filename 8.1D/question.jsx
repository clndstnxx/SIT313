import React, { useEffect } from "react";
import { app, db } from "../firebaseconfig";
import '../index.css'
import {
  collection,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  Timestamp,
} from "firebase/firestore";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function Question() {
  const [inputData, setInputData] = useState({
    title: "",
    description: "",
    tags: "",
  });

  //Main Data & Filtered Data
  const [questions, setQuestions] = useState({});
  const [filteredData, setFilteredData] = useState({});

  const [dropdownActive, setDropdownActive] = useState({});

  const collectionRef = collection(db, "questions");
  // Delete Handler Function
  const deleteHandler = async (id) => {
    try {
      const docRef = doc(db, "questions", id);
      await deleteDoc(docRef);
    } catch (error) {
      console.log(error);
    }
  };

  //Fetch Firestore Data
  useEffect(() => {
    let dataArray = [];
    onSnapshot(collectionRef, (snapshot) => {
      snapshot.docs.map((x) => dataArray.push({ ...x.data(), id: x.id }));
      setQuestions(dataArray);
      setFilteredData(dataArray);
      dataArray = [];
      console.log("triggered");
    });
  }, []);

  // Input Handler Function
  const inputHandler = (e) => {
    setInputData((prevState) => {
      return {
        ...prevState,
        [e.target.id]: e.target.value,
      };
    });
  };

  // Submit Handler Function
  const submitHandler = async (e) => {
    e.preventDefault();
    if (inputData.title && inputData.description && inputData.tags) {
      try {
        await addDoc(collectionRef, {
          title: inputData.title,
          description: inputData.description,
          tags: inputData.tags,
          createdAt: Timestamp.now().toDate(),
        });
        toast("Data Added");
        setInputData({
          title: "",
          description: "",
          tags: "",
        });
        setInputData({});
      } catch (error) {
        toast("Please Input Valid Data");
      }
    } else {
      toast("Empty value");
    }
  };

  // Search Handler Function
  const searchHandler = (e) => {
    const value = e.target.value.toLowerCase();
    setFilteredData(
      questions.filter(
        (x) =>
          x.title.toLowerCase().includes(value) ||
          x.description.toLowerCase().includes(value) ||
          x.tags.toLowerCase().includes(value)
      )
    );
  };

  // Date Handler Function
  const dateHandler = (e) => {
    setFilteredData(
      questions.filter(
        (x) =>
          new Date(x.createdAt.toDate()).toDateString() ===
          new Date(e.target.value).toDateString()
      )
    );
  };

  //Dropdown active handler
  const dropdownHandler = (id) => {
    setDropdownActive((prevState) => {
      return {
        ...prevState,
        [id]: !prevState[id],
      };
    });
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={500}
        progressStyle={{ background: "#D61C4E" }}
      />
      <div className="border p-5 rounded-md flex flex-col space-y-5 drop-shadow-md">
        <div className="text-[1.5rem] font-semibold">
          What do you want to ask or share
        </div>
        <form
          onSubmit={(e) => submitHandler(e)}
          className="flex flex-col space-y-5"
        >
          <div className="flex flex-col space-y-3">
            <label className="font-medium">Title</label>
            <input
              value={inputData.title}
              onChange={(e) => inputHandler(e)}
              id="title"
              className="p-3 rounded-md border outline-none border-none"
              placeholder="Start your question with how, what, why,etc"
            />
          </div>
          <div className="flex flex-col space-y-3">
            <label className="font-medium">Describe your problem</label>
            <textarea
              value={inputData.description}
              onChange={(e) => inputHandler(e)}
              id="description"
              className="p-3 rounded-md border outline-none border-none"
              placeholder="Start your question with how, what, why,etc"
            />
          </div>
          <div className="flex flex-col space-y-3">
            <label className="font-medium">Tags</label>
            <input
              value={inputData.tags}
              onChange={(e) => inputHandler(e)}
              id="tags"
              className="p-3 rounded-md border outline-none border-none"
              placeholder="Please add up to 3 tags to describe what your question is about e.g.., Java"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="post"
              // className="w-fit p-2 px-12 bg-primary rounded-md text-white text-[1.15rem]"
            >
              {"Post"}
            </button>
          </div>
        </form>
      </div>

      {/* Filter Function  */}
      <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-3">
        <input
          onChange={(e) => searchHandler(e)}
          className="p-3 border w-full outline-none"
          placeholder="Search by title , description or tags"
        />
        <input
          onChange={(e) => dateHandler(e)}
          className="p-3 border w-full lg:w-[25%] outline-none"
          type="date"
        />
      </div>

      <div className="flex flex-col space-y-5">
        {filteredData.length > 0 &&
          filteredData.map((x) => {
            return (
              <div
                key={x.id}
                className={`p-5 rounded-md border drop-shadow-lg flex flex-col space-y-5 ${
                  dropdownActive[x.id]
                    ? "max-h-[100rem]"
                    : "max-h-[8rem] overflow-hidden"
                } transition-all`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex flex-col space-y-5">
                    <div className="font-medium text-[1.5rem]">Title</div>
                    <div>{x.title}</div>
                  </div>
                  <div className="plus">
                    <svg
                      onClick={() => dropdownHandler(x.id)}
                      className={`${
                        dropdownActive[x.id] ? "hidden" : ""
                      } text-[1.5rem]`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-width="2"
                        d="M12 20v-8m0 0V4m0 8h8m-8 0H4"
                      />
                    </svg>
                    <svg
                      onClick={() => dropdownHandler(x.id)}
                      className={`${
                        dropdownActive[x.id] ? "" : "hidden"
                      } text-[1.5rem]`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-width="2"
                        d="M20 12H4"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col space-y-5">
                  <div className="font-medium text-[1.5rem]">Description</div>
                  <div>{x.description}</div>
                </div>
                <div className="flex flex-col space-y-5">
                  <div className="font-medium text-[1.5rem]">Tags</div>
                  <div>{x.tags}</div>
                </div>
                <div className="flex flex-col space-y-5">
                  <div className="font-medium text-[1.5rem]">Created at</div>
                  <div>
                    {JSON.stringify(x.createdAt.toDate().toDateString())
                      .replace('"', "")
                      .replace('"', "")}
                  </div>
                </div>
                <button
                  onClick={() => deleteHandler(x.id)}
                  className="post"
                >
                  Delete
                </button>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Question;
