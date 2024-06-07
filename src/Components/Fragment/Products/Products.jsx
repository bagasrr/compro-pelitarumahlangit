import { Fragment } from "react";
import Card from "../../Element/CardProduct/CardProduct";
import Title from "../../Element/Title/Title";
import "./Products.css";

const productList = [
  {
    id: 1,
    name: "Pallet",
    img: "image/Produk/PalletKayu.jpeg",
    desc: "Struktur datar untuk mengangkut barang dengan stabil dan efisien. Sering digunakan di gudang, pabrik, dan industri logistik.",
  },
  {
    id: 2,
    name: "Peti",
    img: "image/Produk/PetiKayu.jpeg",
    desc: "Melindungi dan memudahkan pengiriman barang. Terbuat dari kayu dan berbagai ukuran. Cocok untuk penyimpanan dan transportasi.",
  },
  {
    id: 3,
    name: "Crate",
    img: "image/Produk/CrateKayu.jpeg",
    desc: "Berfungsi sebagai pengemasan aman untuk barang pecah belah dan fragile. Biasanya memiliki desain terbuka atau tertutup dengan pegangan untuk memudahkan pengangkutan.",
  },
  {
    id: 4,
    name: "Other",
    img: "image/Produk/WoodWorkingIndustry.jpeg",
    desc: "Request untuk produk lainnya",
  },
];

const Products = () => {
  return (
    <Fragment>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="wave">
        <path
          fill="#5bbcff"
          fill-opacity="1"
          d="M0,0L34.3,16C68.6,32,137,64,206,96C274.3,128,343,160,411,144C480,128,549,64,617,48C685.7,32,754,64,823,85.3C891.4,107,960,117,1029,128C1097.1,139,1166,149,1234,160C1302.9,171,1371,181,1406,186.7L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>
      <div className="products-container section-part">
        <Title titleName="Produk Kami" />

        <div className="card-container">
          {productList.map((products) => (
            <Card cardTitle={products.name} cardImg={products.img} cardDesc={products.desc} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};
export default Products;
