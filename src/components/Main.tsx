import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header";

const Main: React.FC = () => {
  return (
    <div className="bg">
      <div className="wrapper">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
