import React from "react";
import CustomNavbar from "../components/CustomNavbar";
import FooterErp from '../components/Footer/FooterErp';
import FooterData from '../components/Footer/FooterData';
import { Link } from "react-router-dom";
const NotFound = () => (
  <div className="body_wrapper">
    <CustomNavbar hbtnClass="new_btn" />
    <section className="error_two_area">
      <div className="container flex">
        <div className="error_content_two text-center">
          <img src={require("../img/new/error.png")} alt="" />
          <h2>Error. Can’t find the page you’re looking for.</h2>
          <p>
            Sorry for the inconvenience. Go to our homepage...{" "}
          </p>
        
          <Link to="/" className="about_btn btn_hover">
            Back to Home Page <i className="arrow_right"></i>
          </Link>
        </div>
      </div>
    </section>
    <FooterErp fClass="h_footer_dark_two" FooterData={FooterData}/>
  </div>
);
export default NotFound;
