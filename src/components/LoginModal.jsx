import { useEffect, useState } from "react";
// import loginIcons from "../images/login.jpg";
import { CiCircleRemove } from "react-icons/ci";

const LoginModal = ({
  handleLogin,
  handleSignUp,
  handleSignUpVendor,
  dataForm,
  dataFormVendor,
}) => {
  const [isLogin, setIsLogin] = useState({
    email: "",
    password: "",
  });

  const handleLoginUser = () => {
    const foundUser = dataForm.find(
      (user) =>
        user.mail === isLogin.email && user.password === isLogin.password
    );

    const foundUserVendor = dataFormVendor.find((user) => {
      user.mail === isLogin.email && user.password === isLogin.password;
    });

    if (foundUser || foundUserVendor) {
      alert("Successful login!");
    } else {
      alert("Failed login!");
    }
  };

  const handleIsLogin = (e) => {
    const { name, value } = e.target;

    setIsLogin((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    console.log(isLogin);
  }, [isLogin]);

  return (
    <div className="login-wrapper">
      <div className="login-input">
        <div className="login-input-head">
          <div className="org">Organick</div>
          <div className="login-input-head-title">
            <p>Welcome Back</p>
            <p>Login in with your email address and password</p>
          </div>
        </div>
        <div className="login-input-title">
          <div>
            <label htmlFor="">Email Address</label>
            <input
              onChange={handleIsLogin}
              name="email"
              value={isLogin.email}
              type="email"
              placeholder="Enter your email..."
            />
          </div>
          <div>
            <label htmlFor="">Password</label>
            <input
              onChange={handleIsLogin}
              name="password"
              value={isLogin.password}
              type="text"
              placeholder="Password"
            />
          </div>
          <div className="login-remember">
            <input type="checkbox" name="Remember me" id="" />
            <label htmlFor="">Remember me</label>
          </div>
        </div>
        <div className="login-button">
          <button onClick={handleLoginUser}>Sign In</button>
        </div>
        <div className="sing-up" onClick={handleSignUp}>
          <p>Buyer create account</p>
          <p>Sign Up</p>
        </div>
        <div className="sing-up" onClick={handleSignUpVendor}>
          <p>Vendor create account</p>
          <p>Sign Up</p>
        </div>
      </div>
      <div className="login-img">
        <img src={"static/login.jpg"} alt="" />
        <div onClick={handleLogin}>
          <CiCircleRemove />
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
