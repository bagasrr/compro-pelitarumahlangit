import "./VisiMisi.css";
import CardMisi from "../../Element/CardMisi/CardMisi";
import Title from "../../Element/Title/Title";

const misi = [
  {
    id: 1,
    title: "Mengembangkan Pelayanan Berkualitas",
    desc: "Memberikan pelayanan yang berkualitas tinggi kepada pelanggan, khususnya dalam industri Pallet Kayu dan plastik.",
  },
  {
    id: 2,
    title: "Melakukan Pengembangan Produk",
    desc: "Mengembangkan berbagai jenis dan bentuk produk Pallet yang memenuhi standar lokal dan ekspor dengan kapasitas produksi yang sesuai.",
  },
  {
    id: 3,
    title: "Mengembangkan Pengawasan Kualitas",
    desc: "Melakukan pengawasan ketat pada proses pembuatan dan perawatan Pallet, termasuk perlakuan kayu dan stufing.",
  },
  {
    id: 4,
    title: "Mengembangkan Kepuasan Pelanggan",
    desc: "Memastikan kepuasan pelanggan melalui layanan after-sales seperti repairing Pallet yang efisien.",
  },
];

const VisiMisi = () => {
  return (
    <div className="visi-misi section-part">
      <div className="visi ">
        <Title titleName="VISI" />
        <p className="description visiDesc">Menjadi perusahaan Wood Working Industry & General Trading terkemuka di Indonesia yang dikenal akan kualitas dan pelayanan profesional.</p>
      </div>
      <div className="misi ">
        <Title titleName="MISI" />
        <ul className="cardMisi-container">
          {misi.map((misi) => (
            <CardMisi cardTitle={misi.title} cardDesc={misi.desc} />
          ))}
        </ul>
      </div>
    </div>
  );
};
export default VisiMisi;
