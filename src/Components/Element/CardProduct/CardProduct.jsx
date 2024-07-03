import { Fragment } from "react";
import "./CardProduct.css";
const CardProduct = (props) => {
  const { cardImg, cardTitle, cardDesc } = props;

  return (
    <div className="card">
      <img src={cardImg} alt="cardImg" className="cardImg" />
      <h1 className="cardTitle">{cardTitle}</h1>
      <p className="cardDesc">{cardDesc}</p>
    </div>
  );
};

export default CardProduct;
