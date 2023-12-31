import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import close from "../img/close.svg";

const Drawer: React.FC = ({}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const closeDrawer = () => {};

  const closeDrawerIcon = () => {
    navigate("/");
  };

  if (location.pathname === "/drawer") {
    return (
      <div className="drawer__wrapper open">
        <div className="drawer__overlay">
          <div className="drawer">
            <div className="drawer__header">
              <h2 className="drawer__title">Корзина</h2>
              <img alt="close" src={close} onClick={closeDrawerIcon} />
            </div>
            <div className="drawer__scroll">
              <div className="drawerc-logic">
                <div className="drawerc">
                  <img alt="" width={90} />
                  <div className="drawerc__info">
                    <p className="drawerc__title">{}</p>
                    <p className="drawerc__price">{} руб.</p>
                  </div>
                  <img className="drawerc__close" />
                </div>
              </div>
            </div>
            <div className="drawer__footer">
              <div className="drawer__info">
                <div className="">
                  <span className="drawer__price">Итого</span>
                  <span className="drawer__price">{}</span>
                </div>
                <div className="">
                  <span className="drawer__nalog">Налог 5%</span>
                  <span className="drawer__nalog"></span>
                </div>
              </div>
              <button className="drawer__btn">
                Оформить заказ <span className="drawer__ellips"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Drawer;
