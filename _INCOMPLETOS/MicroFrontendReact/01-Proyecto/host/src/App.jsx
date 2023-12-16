import React from "react";
import ReactDOM from "react-dom";
import Navbar from "navbar/Navbar"


const App = () => (
  <div className="container">
    <Navbar />
      <h1>MicroFrontend React</h1>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
