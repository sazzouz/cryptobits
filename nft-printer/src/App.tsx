import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Upload from "./components/Upload";
import Demo from "./components/Cropper";

function App() {
  return (
    <div>
      <Upload />
      <br />
      <Demo />
    </div>
  );
}

export default App;
