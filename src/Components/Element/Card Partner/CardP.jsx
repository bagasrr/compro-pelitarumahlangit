import "./CardP.css";
const CardP = (props) => {
  const { cardImg } = props;
  return <img src={cardImg} alt="Our Partner" className="cardPImg" />;
};
export default CardP;
