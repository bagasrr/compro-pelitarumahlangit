import CardP from "../../Element/Card Partner/CardP";
import Card from "../../Element/CardProduct/CardProduct";
import Title from "../../Element/Title/Title";
import "./OurPartner.css";
const OurPartner = () => {
  return (
    <div className="ourpartner-container section-part">
      <Title titleName="Parter Kami" />
      <div className="partnerCard">
        <CardP cardImg="https://media.neliti.com/media/organisations/logo-None-kalbe-farma-8aa3a8e3.png" />
      </div>
    </div>
  );
};
export default OurPartner;
