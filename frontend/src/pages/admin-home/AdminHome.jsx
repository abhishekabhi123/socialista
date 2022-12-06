import React from "react";
import { useEffect } from "react";
import News from "../../components/news/News";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Top from "../../components/top/Top";
import "./AdminHome.css";
import axios from "../../admin-axios";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";

function AdminHome() {
  let navigate = useNavigate();
  useEffect(() => {
    axios
      .get("/admin/users")
      .then(() => {})
      .catch((err) => {
        if (err.response.status === 401) {
          localStorage.removeItem("accessToken");
          navigate("/admin/login");
        }
        console.log(err);
      });
  }, []);
  return (
    <>
      <Top />
      <div className="admin">
        <div className="mainContainer">
          <div className="sidebar">
            <span style={{ marginTop: "2rem" }}>Dashboard</span>
            <span>Home</span>
            <span onClick={() => navigate("/admin/users")}>Users</span>
            <span>Posts</span>
            <span>Reports</span>
          </div>
          <h1>Home Page</h1>
          {/* <Sidebar /> */}
          {/* <News /> */}
          {/* <Rightbar /> */}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AdminHome;
