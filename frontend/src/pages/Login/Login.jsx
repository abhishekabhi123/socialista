import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [userauth, setUserauth] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = async (e) => {
    e.preventDefault();
    console.log(userauth);
    try {
      const { data } = await axios.post("/api/users/login", {
        userauth,
        password,
      });

      localStorage.setItem("userInfo", JSON.stringify(data));
      toast.success("Login Success");
      navigate("/");
    } catch (err) {
      console.error(err);
      toast.error("Invalid email/password");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("userInfo")) {
      localStorage.getItem("userInfo");
      navigate("/");
    }
  }, [navigate]);
  console.log(userauth);

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
          <form onSubmit={loginHandler}>
            <div className="formGroup">
              <input
                type="text"
                required
                onChange={(e) => setUserauth(e.target.value)}
                placeholder="Email "
              />
            </div>
            <div className="formGroup">
              <input
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>
            <div className="formGroup form-btnLogin">
              <button>Login</button>
            </div>
            <div className="formGroup form-btnRegister">
              <Link to="/register">Create New Account</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
