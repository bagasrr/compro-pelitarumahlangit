import Button from "../../Element/Button/Button";
import "./Login.css";
const Login = () => {
  return (
    <div className="login-container">
      <div className="login-wrapper">
        <h1 className="login-title">Login</h1>
        <div className="login-input">
          <input type="text" className="id-input" placeholder="Masukkan ID" id="id-input" />
          <input type="password" className="pw-input" placeholder="Masukkan Password" id="pw-input" />
        </div>
        <Button buttonName="Login" />
      </div>
    </div>
  );
};

export default Login;
