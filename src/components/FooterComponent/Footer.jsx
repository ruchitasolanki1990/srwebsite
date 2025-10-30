import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { SECONDARY_COLOR } from "../../constant/theme";
import { PRAIMARY_COLOR } from "../../constant/theme";
import { COMPANY_NAME, GET_CONTACT_DETAILS } from "../../constant/Constant";
import Container from 'react-bootstrap/Container';
import { useState, useEffect } from "react";
import { getValueByKey } from "../../utility/utility";
import axios from "axios";

const Footer = () =>{

  //database connectivity
  const [footerdetail, setfooterdetail] = useState([]);
    useEffect(() => {
      axios
        .get(`${process.env.REACT_APP_API_URL}/${GET_CONTACT_DETAILS}`)
        .then((res) => {
          //console.log("Fetched data:", data);
          setfooterdetail(res.data); // ✅ Save data into state
        })
        .catch((err) => console.error("Error:", err));
    }, []);
 

    return(
    <div className="text-primary_font fs-md-6 fs-lg-2 bg-primary_color">
   <footer className="pt-4 mt-5 text-black  mx-5" >
      <div className="container-fluid custom-footer">
        <div className="row">
          <div className=" col-md-6 col-lg-4">
            <a className="navbar-brand" href="/"><img src="/images/logo.png" width={'15%'} className="me-3"></img>
            <span className="color-dark fw-bolder fs-5">{COMPANY_NAME}</span></a>
            <div className="text-secondary_color text-j  ps-4">
              {/*{homedetetail && getValueByKey('section1',contactdetail)}*/}
              {footerdetail && getValueByKey('section1',footerdetail)}
            </div>
          </div>
        
        <div className="col-12 col-md-6 col-lg-4 d-flex flex-column  align-items-center pt-3">
            <p className="color-black fs-5 fw-bolder">Menu</p>
            <ul className="list-unstyled">
              <li><a href="/" className="text-secondary_color text-decoration-none">Home</a></li>
              <li><a href="/about" className="text-secondary_color text-decoration-none">About</a></li>
              <li><a href="/contact" className="text-secondary_color text-decoration-none">Contact</a></li>
            </ul>
          </div>
       
        <div className="col-12 col-md-12 col-lg-4 d-grid justify-content-end">
                  <p className="mb-3 fs-5 fw-bolder pt-3">Contact Us</p>
                      <p className="mb-1 text-secondary_color text-j">
                         {footerdetail && getValueByKey('section2',footerdetail)}
                      </p>
                      <p className="mb-1 text-secondary_color text-j">
                         {footerdetail && getValueByKey('section5',footerdetail)}
                      </p>
                       <p className="mb-1 text-secondary_color text-j">
                         {footerdetail && getValueByKey('section3',footerdetail)}
                      </p>
                       <p className="mb-1 text-secondary_color text-j">
                         {footerdetail && getValueByKey('section4',footerdetail)}
                      </p>
          <div>
              <a href="https://facebook.com" className="text-white me-3">
                <i className="bi bi-facebook fs-4"></i>
              </a>
              <a href="https://twitter.com" className="text-white me-3">
                <i className="bi bi-twitter fs-4"></i>
              </a>
              <a href="https://instagram.com" className="text-white me-3">
                <i className="bi bi-instagram fs-4"></i>
              </a>
              <a href="https://linkedin.com" className="text-white">
                <i className="bi bi-linkedin fs-4"></i>
              </a>
    </div>
    </div>
        {/* Contact or Info Column */}
    </div>
    <div className="text-center py-3 border-top border-secondary text-secondary_color">
          © {new Date().getFullYear()}{"   "}{COMPANY_NAME}. All rights reserved.
    </div>
    </div>
    </footer>
    </div>
    )
}
export default Footer