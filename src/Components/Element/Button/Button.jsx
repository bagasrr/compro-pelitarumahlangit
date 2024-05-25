import { Link } from "react-router-dom";
import "./Button.css";
const Button = (props) => {
  const { buttonName, buttonLink } = props;
  return (
    <div className="button">
      <Link to={buttonLink}>{buttonName}</Link>
    </div>
  );
};
export default Button;
