import { Fragment } from "react";
import "./CardProduct.css";
const CardProduct = (props) => {
  const { cardImg, cardTitle, cardDesc } = props;

  return (
    <Fragment>
      <a href="#" className="card">
        <img src={cardImg} alt="cardImg" className="cardImg" />
        <h1 className="cardTitle">{cardTitle}</h1>
        <p className="cardDesc">{cardDesc}</p>
      </a>
    </Fragment>
  );
};

export default CardProduct;
