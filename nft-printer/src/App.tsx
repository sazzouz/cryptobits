import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Upload from "./components/Upload";
import Demo from "./components/Cropper";
import FbUpload from "./components/FbUpload";

function App() {
  return (
    <>
      <h1>AWS</h1>
      <hr />
      <div>
        <Upload />
        <br />
        <Demo />
      </div>
      <h1>Firebase</h1>
      <hr />
      <div>
        <FbUpload />
      </div>
    </>
  );
}

export default App;
