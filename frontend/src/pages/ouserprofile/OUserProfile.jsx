import React, { Fragment } from "react";
import Footer from "../../components/footer/Footer";
import NewSingleAccountPost from "../../components/newsingleaccountpost/NewSingleAccountPost";
import OCover from "../../components/ocover/OCover";
import ONewAccountPost from "../../components/onewaccountpost/ONewAccountPost";
import ORightBar from "../../components/orightbar/ORightBar";
import OTop from "../../components/Otop/OTop";
import "./ouserprofile.css";

function OUserProfile() {
  return (
    <Fragment>
      <OTop />
      <div className="mainContainer d-flex">
        <OCover />
        <div className="nADiv">
          <ONewAccountPost />
          <ORightBar />
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default OUserProfile;
