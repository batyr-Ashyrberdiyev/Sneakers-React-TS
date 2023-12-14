import React from "react";
import { Routes, Route } from "react-router-dom";

import Main from "./components/Main";
import Home from "./Pages/Home";
import Drawer from "./components/Drawer";
import Order from "./Pages/Order";
import Favorite from "./Pages/Favorite";

import "./styles/main.scss";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="" element={<Home />}></Route>
        <Route path="drawer" element={<Drawer />}></Route>
        <Route path="order" element={<Order />}></Route>
        <Route path="favorite" element={<Favorite />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
