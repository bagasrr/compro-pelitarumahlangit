import "./VisiMisi.css";
import CardMisi from "../../Element/CardMisi/CardMisi";
import Title from "../../Element/Title/Title";
const VisiMisi = () => {
  return (
    <div className="visi-misi section-part">
      <div className="visi ">
        <Title titleName="VISI" />
        <p className="description">Menjadi perusahaan Wood Working Industry & General Trading terkemuka di Indonesia yang dikenal akan kualitas dan pelayanan profesional.</p>
      </div>
      <div className="misi ">
        <Title titleName="MISI" />
        <ul className="cardMisi-container">
          <CardMisi cardTitle="Mengembangkan Pelayanan Berkualitas" cardDesc="Memberikan pelayanan yang berkualitas tinggi kepada pelanggan, khususnya dalam industri Pallet Kayu dan plastik." />
          <CardMisi cardTitle="Mengembangkan Pengembangan Produk" cardDesc="Mengembangkan berbagai jenis dan bentuk produk Pallet yang memenuhi standar lokal dan ekspor dengan kapasitas produksi yang sesuai." />
          <CardMisi cardTitle="Mengembangkan Pengawasan Kualitas" cardDesc="Melakukan pengawasan ketat pada proses pembuatan dan perawatan Pallet, termasuk perlakuan kayu dan stufing." />
          <CardMisi cardTitle="Mengembangkan Kepuasan Pelanggan" cardDesc="Memastikan kepuasan pelanggan melalui layanan after-sales seperti repairing Pallet yang efisien." />
        </ul>
      </div>
    </div>
  );
};
export default VisiMisi;
