import "./CardMisi.css";
const CardMisi = (props) => {
  const { cardTitle, cardDesc } = props;

  return (
    <li href="#" className="cardMisiList">
      <h1 className="cardMisiTitle">{cardTitle}</h1>
      <p className="cardMisiDesc">{cardDesc}</p>
    </li>
  );
};

export default CardMisi;
