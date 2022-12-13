import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import "./register.css";

function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [userauth, setUserauth] = useState("");
  const [password, setPassword] = useState("");
  const [rPassword, setRPassword] = useState("");

  const registerHanlder = async (e) => {
    e.preventDefault();
    //*Check password
    if (password !== rPassword) {
      toast.error("Password does not match");
      return;
    }
    try {
      await axios.post("/api/users/register", {
        username,
        userauth,
        password,
      });
      toast.success("Successfully registered");
      navigate("/login");
    } catch (error) {
      toast.error("Registration failed, please try again");
    }
  };
  useEffect(() => {
    if (localStorage.getItem("userInfo")) {
      localStorage.getItem("userInfo");
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="form">
      <div className="formGroups">
        <div className="formLeft">
          <h4 className="formSubTitle">
            Connect with friends and the world around you on Socialista.
          </h4>
          <h1 className="formsTitle">Socialista</h1>
        </div>
        <div className="formRight">
          <form onSubmit={registerHanlder}>
            <div className="formGroup">
              <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username "
                required
              />
            </div>
            <div className="formGroup">
              <input
                type="text"
                onChange={(e) => setUserauth(e.target.value)}
                placeholder="Email "
                required
              />
            </div>
            <div className="formGroup">
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password "
                required
              />
            </div>
            <div className="formGroup">
              <input
                type="password"
                onChange={(e) => setRPassword(e.target.value)}
                placeholder="Password Retype"
                required
              />
            </div>
            <div className="formGroup form-btnLogin">
              <button>Create new account</button>
            </div>
            <div className="formGroup form-btnRegister">
              <Link to="/login">Login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
