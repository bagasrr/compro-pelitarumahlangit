import "./CardProject.css";

const CardProject = (props) => {
  const { projectName, projectImg, projectDesc } = props;
  return (
    <div className="project-container">
      <img src={projectImg} alt={projectName} />
      <div className="project-knowing">
        <h3 className="project-title">{projectName}</h3>
        <p className="project-desc">{projectDesc}</p>
      </div>
    </div>
  );
};
export default CardProject;
