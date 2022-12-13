import React from "react";
import News from "../../components/news/News";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Top from "../../components/top/Top";
import "./home.css";
import Footer from "../../components/footer/Footer";

function Home() {
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
