import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClrTxt = () => {
    let newText = "";
    setText(newText);
  };
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea 
            placeholder="Enter text here..."
            onChange={handleOnChange}
            value={text}
            className="form-control"
            id="textarea"
            rows="8"
          ></textarea>
        </div>
        <div className="">

        <button onClick={handleUpClick} className="my-2 btn btn-primary">
          Convert to UpperCase
        </button> <br />
        <button onClick={handleLoClick} className="my-2 btn btn-primary ">
          Convert to LowerCase
        </button> <br />
        <button  onClick={handleClrTxt} className=" my-2 btn btn-danger">
          Clear Text
        </button>
      </div>
        </div>
      <div className="container my-4">
        <h3>Your Text Summary</h3>
        <p>{text.split(" ").length} Words And {text.length} Characters</p>
        <p> {0.008 * text.split(" ").length} Minutes to read this </p>
        <h3>Preview</h3>
        <p className="text-white bg-black">{text}</p>
      </div>
    </>
  );
}
