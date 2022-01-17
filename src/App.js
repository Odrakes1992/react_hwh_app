import "./App.css";
import React, { Component } from "react";
import Home from "./Components/Home";
import Results from "./Components/Results";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Results />} />
      </Routes>
    </Router>
  );
}

export default App;
