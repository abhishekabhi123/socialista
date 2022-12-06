import React, { Fragment } from "react";
import Cover from "../../components/cover/Cover";
import Footer from "../../components/footer/Footer";
import NewAccountPost from "../../components/newaccountpost/NewAccountPost";
import Rightbar from "../../components/rightbar/Rightbar";
import Top from "../../components/top/Top";
import "./account.css";

function Account() {
  return (
    <Fragment>
      <Top />
      <div className="mainContainer d-flex">
        <Cover />
        <div className="nADiv">
          <NewAccountPost />
          <Rightbar />
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default Account;
