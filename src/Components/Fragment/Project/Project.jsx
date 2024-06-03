import CardProject from "../../Element/CardProject/CardProject";
import Title from "../../Element/Title/Title";
import "./Project.css";
const Project = () => {
  return (
    <div className="project section-part">
      <Title titleName="Project" />
      <CardProject
        projectImg="image/Projectimg/ImpactPratama.svg"
        projectName="Project Impact Pratama"
        projectDesc=" PT Pelita Rumah Langit adalah perusahaan yang memiliki kepemilikan bisnis dalam industri pallet kayu. Kami telah berhasil menyediakan persediaan pallet kayu kepada PT Impact Pratama. Dengan komitmen kami terhadap kualitas dan layanan yang unggul, kami terus berinovasi dan memperluas jangkauan bisnis kami. Kami berfokus pada keberlanjutan dan efisiensi dalam memenuhi kebutuhan pelanggan kami."
      />
      <CardProject
        projectImg="image/Projectimg/ProjectPeti.svg"
        projectName="Project Peti"
        projectDesc=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe ullam exercitationem, sit deleniti officiis nihil provident facere facilis eos iure."
      />
    </div>
  );
};
export default Project;
