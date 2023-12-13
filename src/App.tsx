import React from "react";
import { Routes, Route } from "react-router-dom";

import Main from "./components/Main";
import Home from "./Pages/Home";

import "./styles/main.scss";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="" element={<Home />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
