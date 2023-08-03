import { useEffect } from "react";
import reg1 from "../images/reg1.jpg";
import { CiCircleRemove } from "react-icons/ci";

const RegistrationModal = ({
  handleSignUpExit,
  setDataFormInput,
  dataFormInput,
  setDataForm,
}) => {
  const handleFormData = (e) => {
    const { name, value } = e.target;
    setDataFormInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSingUp = () => {
    setDataForm((prev) => {
      return [...prev, dataFormInput];
    });
    setDataFormInput({
      name: "",
      username: "",
      password: "",
      mail: "",
    });
  };

  return (
    <div className="login-wrapper">
      <div className="login-input">
        <div className="login-input-head">
          <div className="org">Buyer Registration</div>
          <div className="login-input-head-title">
            <p>Welcome Back</p>
            <p>Login in with your email address and password</p>
          </div>
        </div>
        <div className="login-input-title">
          <div>
            <label htmlFor="">Name</label>
            <input
              onChange={handleFormData}
              name="name"
              value={dataFormInput.name}
              type="text"
              placeholder="Enter your name..."
            />
          </div>
          <div>
            <label htmlFor="">Username</label>
            <input
              onChange={handleFormData}
              name="username"
              value={dataFormInput.username}
              type="text"
              placeholder="Username"
            />
          </div>
          <div>
            <label htmlFor="">Create your password</label>
            <input
              onChange={handleFormData}
              name="password"
              value={dataFormInput.password}
              type="password"
              placeholder="Create your password..."
            />
          </div>
          <div className="registr_email">
            <label htmlFor="">Enter your email</label>
            <input
              onChange={handleFormData}
              name="mail"
              value={dataFormInput.mail}
              type="email"
              placeholder="Enter your email..."
            />
          </div>
          <div className="login-remember">
            <input type="checkbox" name="Remember me" id="" />
            <label htmlFor="">Remember me</label>
          </div>
        </div>
        <div className="login-button">
          <button onClick={handleSingUp}>Sign Up</button>
        </div>
      </div>
      <div className="login-img">
        <img src={reg1} alt="" />
        <div onClick={handleSignUpExit}>
          <CiCircleRemove />
        </div>
      </div>
    </div>
  );
};

export default RegistrationModal;
