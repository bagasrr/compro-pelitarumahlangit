import Card from "../../Element/CardProduct/CardProduct";
import Title from "../../Element/Title/Title";
import "./Products.css";
const Products = () => {
  return (
    <div className="products-container section-part">
      <Title titleName="Produk Kami" />

      <div className="card-container">
        <Card cardImg="https://th.bing.com/th/id/OIP.iubVIE07aVJdzlHS4VqxjgHaFb?w=4492&h=3293&rs=1&pid=ImgDetMain" cardTitle="Pallet" cardDesc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, numquam!" />
        <Card
          cardImg="https://img2.pngdownload.id/20180512/ucq/kisspng-crate-pallet-wooden-box-freight-transport-5af6d196c303c8.4385279415261249507988.jpg"
          cardTitle="Peti"
          cardDesc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, numquam!"
        />
        <Card cardImg="https://th.bing.com/th/id/OIP.iubVIE07aVJdzlHS4VqxjgHaFb?w=4492&h=3293&rs=1&pid=ImgDetMain" cardTitle="Crate" cardDesc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, numquam!" />
        <Card cardImg="https://th.bing.com/th/id/OIP.iubVIE07aVJdzlHS4VqxjgHaFb?w=4492&h=3293&rs=1&pid=ImgDetMain" cardTitle="Other" cardDesc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, numquam!" />
      </div>
    </div>
  );
};
export default Products;
