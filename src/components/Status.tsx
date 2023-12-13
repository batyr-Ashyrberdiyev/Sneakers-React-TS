import React from "react";

const Status: React.FC = () => {
  return (
    <div className="status">
      <div className="status__img"></div>
      <div className="status__title">{}</div>
      <div className="status__desc">{}</div>
      <button className="status__btn"></button>
    </div>
  );
};

export default Status;
