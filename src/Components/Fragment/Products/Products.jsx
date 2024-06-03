import Card from "../../Element/CardProduct/CardProduct";
import Title from "../../Element/Title/Title";
import "./Products.css";
const Products = () => {
  return (
    <div className="products-container section-part">
      <Title titleName="Produk Kami" />

      <div className="card-container">
        <Card cardImg="image/Produk/PalletKayu.jpeg" cardTitle="Pallet" cardDesc="Struktur datar untuk mengangkut barang dengan stabil dan efisien. Sering digunakan di gudang, pabrik, dan industri logistik." />
        <Card cardImg="image/Produk/PetiKayu.jpeg" cardTitle="Peti" cardDesc="Melindungi dan memudahkan pengiriman barang. Terbuat dari kayu dan berbagai ukuran. Cocok untuk penyimpanan dan transportasi." />
        <Card
          cardImg="image/Produk/CrateKayu.jpeg"
          cardTitle="Crate"
          cardDesc="Berfungsi sebagai pengemasan aman untuk barang pecah belah dan fragile. Biasanya memiliki desain terbuka atau tertutup dengan pegangan untuk memudahkan pengangkutan."
        />
        <Card cardImg="image/Produk/WoodWorkingIndustry.jpeg" cardTitle="Other" cardDesc="Request untuk produk lainnya" />
      </div>
    </div>
  );
};
export default Products;
