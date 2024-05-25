import "./CardP.css";
const CardP = (props) => {
  const { cardImg, altText } = props;
  return <img src={cardImg} alt={altText} title={altText} className="cardPImg" />;
};
export default CardP;
