import logo from "../img/logo.svg";
import cart from "../img/cart.svg";
import hearth from "../img/hearth.svg";
import user from "../img/user.svg";
import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__wrapper">
          <Link to="/">
            <div className="header__col cup">
              <img className="header__logo" src={logo} alt="LOGO" />
              <div className="header__info">
                <h2 className="h2 header__title">REACT SNEAKERS</h2>
                <h4 className="h4 header__subtitle">
                  Магазин лучших кроссовок
                </h4>
              </div>
            </div>
          </Link>
          <div className="header__col">
            <Link to="/drawer">
              <div className="header__cart">
                <img src={cart} alt="Cart" />
                <p></p>
              </div>
            </Link>
            <Link to="/favorite">
              <img className="cup" src={hearth} alt="Favorite" />
            </Link>
            <Link to="/order">
              <img className="cup" src={user} alt="User" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
