import CardP from "../../Element/Card Partner/CardP";
import Title from "../../Element/Title/Title";
import "./OurPartner.css";
const OurPartner = () => {
  return (
    <div className="ourpartner-container section-part">
      <Title titleName="Parter Kami" />
      <div className="partnerCard">
        <CardP cardImg="https://www.impack-pratama.com/wp-content/uploads/2019/04/logo-impack-pratama-industri.png" altText="PT Impack Pratama Industri TBK" />
        <CardP cardImg="https://id.joblum.com/uploads/42/41834.jpg" altText="PT Kreasi Dasatama" />
        <CardP cardImg="https://media.licdn.com/dms/image/C4E0BAQHm45euANVEpQ/company-logo_200_200/0/1675052123835?e=2147483647&v=beta&t=aM38RBXd65Qd1OmQe_Je3mhhgHu6S31ozb7b8HGEneA" altText="PT Setya Guna Sejati" />
        <CardP cardImg="https://image-service-cdn.seek.com.au/e4d6fe15726893e13e27f71e876b35a3e170c4cb" altText="PT Hung A Indonesia" />
      </div>
    </div>
  );
};
export default OurPartner;
