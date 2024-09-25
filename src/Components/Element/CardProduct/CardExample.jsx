const Card = () => {
  const [cardTitle, cardImg, cardDesc] = props;
  return (
    <div className="cardContainer">
      <img src={cardImg} alt="card img" className="cardImg" />
      <h3 className="cardTitle">{cardTitle}</h3>
      <p className="cardDesc">{cardDesc}</p>
    </div>
  );
};
export default Card;

import Card from "./Card.jsx";

const hasil = () => {
  return <Card cardTitle="ReactJs" cardDesc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, explicabo." cardImg="reactjs.jpeg" />;
};
