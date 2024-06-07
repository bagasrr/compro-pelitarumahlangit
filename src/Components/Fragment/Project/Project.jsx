import CardProject from "../../Element/CardProject/CardProject";
import Title from "../../Element/Title/Title";
import "./Project.css";

const projects = [
  {
    id: 1,
    name: "Project Impact Pratama",
    img: "image/Projectimg/ImpactPratama.svg",
    desc: "PT Pelita Rumah Langit adalah perusahaan yang memiliki kepemilikan bisnis dalam industri pallet kayu. Kami telah berhasil menyediakan persediaan pallet kayu kepada PT Impact Pratama. Dengan komitmen kami terhadap kualitas dan layanan yang unggul, kami terus berinovasi dan memperluas jangkauan bisnis kami. Kami berfokus pada keberlanjutan dan efisiensi dalam memenuhi kebutuhan pelanggan kami.",
  },
  {
    id: 2,
    name: "Project Peti",
    img: "image/Projectimg/ProjectPeti.svg",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe ullam exercitationem, sit deleniti officiis nihil provident facere facilis eos iure.",
  },
];

const Project = () => {
  return (
    <div className="project section-part">
      <Title titleName="Project" />
      {projects.map((project) => (
        <CardProject projectName={project.name} projectImg={project.img} projectDesc={project.desc} />
      ))}
    </div>
  );
};
export default Project;
