import "./Button.css";
const Button = (props) => {
  const { buttonName, buttonLink } = props;
  return (
    <div className="button">
      <a href={buttonLink}>{buttonName}</a>
    </div>
  );
};
export default Button;
