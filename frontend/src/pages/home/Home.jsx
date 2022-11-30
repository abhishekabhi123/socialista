import React from "react";
import { useEffect } from "react";
import News from "../../components/news/News";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Top from "../../components/top/Top";
import "./home.css";
import axios from "../../axios";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";

function Home() {
  let navigate = useNavigate();
  useEffect(() => {
    axios
      .get("/api")
      .then(() => {})
      .catch((err) => {
        if (err.response.status === 401) {
          localStorage.removeItem("accessToken");
          navigate("/login");
        }
        console.log(err);
      });
  }, []);
  return (
    <>
      <Top />
      <div className="mainContainer">
        <Sidebar />
        <News />
        <Rightbar />
      </div>
      <Footer />
    </>
  );
}

export default Home;
