import logo from "../img/logo.svg";
import cart from "../img/cart.svg";
import hearth from "../img/hearth.svg";
import user from "../img/user.svg";
import React from "react";

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__col">
            <img className="header__logo" src={logo} alt="LOGO" />
            <div className="header__info">
              <h2 className="h2 header__title">REACT SNEAKERS</h2>
              <h4 className="h4 header__subtitle">Магазин лучших кроссовок</h4>
            </div>
          </div>
          <div className="header__col">
            <div className="header__cart">
              <img src={cart} alt="Cart" />
              <p></p>
            </div>
            <img src={hearth} alt="Favorite" />
            <img src={user} alt="User" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
