import { Link } from "react-router-dom";
import "./Button.css";
const Button = (props) => {
  const { buttonName, buttonLink, bgButton } = props;
  return (
    <div className="button" style={bgButton}>
      <Link to={buttonLink}>{buttonName}</Link>
    </div>
  );
};
export default Button;
