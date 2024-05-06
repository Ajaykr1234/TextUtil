import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const touppercase = () => {
    setText(text.toUpperCase());
    props.showalert("Converted text is upper case", "success");
  };

  const tolowercase = () => {
    setText(text.toLowerCase());
    props.showalert("Converted text is lower case", "success");
  };

  const toTextClear = () => {
    setText("");
    props.showalert("Clear Text", "success");
  };

  const reverseText = () => {
    setText(text.split("").reverse().join(""));
    props.showalert("Text Reversed", "success");
  };

  const copyTextToClipboard = () => {
    navigator.clipboard.writeText(text);
    props.showalert("Text Copied to Clipboard", "success");
  };

  // Add additional text manipulation functions here
  const removeAccents = () => {
    const newText = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    setText(newText);
    props.showalert("Accents Removed", "success");
  };

  const removeDuplicateKeywords = () => {
    const newText = Array.from(new Set(text.split(" "))).join(" ");
    setText(newText);
    props.showalert("Duplicate Keywords Removed", "success");
  };

  const removeDuplicateLines = () => {
    const newText = Array.from(new Set(text.split("\n"))).join("\n");
    setText(newText);
    props.showalert("Duplicate Lines Removed", "success");
  };

  const removeEmptyLines = () => {
    const newText = text.replace(/^\s*[\r\n]/gm, "");
    setText(newText);
    props.showalert("Empty Lines Removed", "success");
  };

  const removeExtraSpaces = () => {
    const newText = text.replace(/\s+/g, " ");
    setText(newText);
    props.showalert("Extra Spaces Removed", "success");
  };

  const removeLineBreaks = () => {
    const newText = text.replace(/[\r\n]+/g, " ");
    setText(newText);
    props.showalert("Line Breaks Removed", "success");
  };

  const reverseString = () => {
    const newText = text.split("").reverse().join("");
    setText(newText);
    props.showalert("String Reversed", "success");
  };

  const sortTextLines = () => {
    const newText = text.split("\n").sort().join("\n");
    setText(newText);
    props.showalert("Text Lines Sorted", "success");
  };

  const countText = () => {
    const characters = text.length;
    const words = text.split(/\s+/).filter(Boolean).length;
    const lines = text.split("\n").filter(Boolean).length;
    props.showalert(`Text has ${characters} characters, ${words} words, and ${lines} lines.`, "success");
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };


  return (
    <div className="maincontainer" style={{ color: props.mode === "dark" ? "white" : "black" }}>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3 button-container">
          <div>
            <textarea
              id="myBox"
              cols="30"
              rows="10"
              className="form-control"
              value={text}
              onChange={handleOnChange}
              placeholder="Type something..."
              style={{
                backgroundColor: props.mode === "dark" ? "#042743" : "white",
                color: props.mode === "dark" ? "white" : "black",
                border: "1px solid gray",
                borderRadius: "5px",
                padding: "10px",
                resize: "none",
              }}
            ></textarea>
          </div>

          <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1 mt-4" onClick={touppercase}>
            Convert into Uppercase
          </button>
          <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1 mt-4" onClick={tolowercase}>
            Convert into Lowercase
          </button>
          <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1 mt-4" onClick={toTextClear}>
            Clear All Text
          </button>
          <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1 mt-4" onClick={reverseText}>
            Reverse Text
          </button>
          <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1 mt-4" onClick={copyTextToClipboard}>
            Copy Text to Clipboard
          </button>

          {/* Additional functions */}
          <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1 mt-4" onClick={removeAccents}>
            Remove Accents
          </button>
          <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1 mt-4" onClick={removeDuplicateKeywords}>
            Remove Duplicate Keywords
          </button>
          <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1 mt-4" onClick={removeDuplicateLines}>
            Remove Duplicate Lines
          </button>
          <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1 mt-4" onClick={removeEmptyLines}>
            Remove Empty Lines
          </button>
          <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1 mt-4" onClick={removeExtraSpaces}>
            Remove Extra Spaces
          </button>
          <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1 mt-4" onClick={removeLineBreaks}>
            Remove Line Breaks
          </button>
          <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1 mt-4" onClick={reverseString}>
            Reverse String
          </button>
          <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1 mt-4" onClick={sortTextLines}>
            Sort Text Lines
          </button>
          <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1 mt-4" onClick={countText}>
            Count Text
          </button>
          
        </div>
      </div>
      <div className="container my-4">
        <h1>We are going to count words and letters mentioned</h1>

        <p>
          {text.split(" ").filter((element) => {
            return element.length !== 0;
          }).length}{" "}
          word(s) and {text.length} letter(s)
        </p>

        <p>{0.008 * (text.split(" ").filter((element) => element.length !== 0).length)} times to read {text.length}</p>

        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
