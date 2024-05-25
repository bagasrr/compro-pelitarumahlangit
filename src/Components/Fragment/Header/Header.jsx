import Button from "../../Element/Button/Button";
import "./Header.css";
const Header = () => {
  return (
    <div className="header-container">
      <h1 className="company-title">PT Pelita Rumah Langit</h1>
      <h5 className="company-tagline">Your Packaging Solution</h5>
      <p className="company-businessType description">Wood Working Industri - Produsen Pallet, Peti, Crate</p>
      <Button buttonName="Hubungi Kami" buttonLink="/contact" />
    </div>
  );
};

export default Header;
