import React from "react";

const Favorite: React.FC = () => {
  return (
    <div className="bg">
      <div className="wrapper">
        <div className="hero">
          <div className="container">
            <div className="home__wrapper">
              <div className="hero__header">
                <h1 className="h1 hero__title">Закладки</h1>
              </div>
              <div className="cards"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
