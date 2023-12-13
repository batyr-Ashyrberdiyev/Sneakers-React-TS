import React from "react";

type cardProps = {
  img: string;
  title: string;
  price: number;
};

const Card: React.FC<cardProps> = ({ img, title, price }) => {
  return (
    <div className="card">
      <div className="card__header">
        <img className="card__like" />
        <img className="card__img" src={img} alt="Image" width={135} />
      </div>
      <div className="card__title">{title}</div>
      <div className="card__footer">
        <div className="card__info">
          <p>Цена:</p>
          <b className="card__price">{price} руб.</b>
        </div>
        <img className="card__add" src="" />
      </div>
    </div>
  );
};

export default Card;
