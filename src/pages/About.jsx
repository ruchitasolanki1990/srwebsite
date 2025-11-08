import React from "react"
import { useNavigate } from "react-router-dom"
import Header from "../components/HeaderComponent/Header";
import Footer from "../components/FooterComponent/Footer";
import { useEffect, useState } from "react";
import { getValueByKey } from "../utility/utility";
import { GET_ABOUT_DETAILS } from "../constant/Constant";
import axios from "axios";

const About = () => {
//database connectivity
        const [aboutdetail, setaboutdetail] = useState([]);
        useEffect(() => {
            axios
                .get(`${process.env.REACT_APP_API_URL}/${GET_ABOUT_DETAILS}`)
                .then((res) => {
                //console.log("Fetched data:", data);
            setaboutdetail(res.data); //  Save data into state
            })
            .catch((err) => console.error("Error:", err));
        }, []);
        


    return(
       <>
        <Header />
        <div className="imgbackground text-white position:absolute top:150px left:50px">
            <div className="p-5">
            <h2 className="fw-bold">About Us</h2>
            <div>We manufacturer Raises their, hand, we serve</div>
            </div>
        </div>
        <div className="container py-5">
            <div className="row">
                <div className="col-md-6 col-12 mb-5 bg-light">
                    <div className="position-relative">
                        <img src="../images/slider/slide1.jpg" className="img-fluid imgAboutCss"/>
                        
                    </div>
                </div>
                <div className="col-md-6 col-12 p-3">
                    <div className="ps-5">
                        <h3 className="text-primary_color">{aboutdetail && getValueByKey('section3-heading3',aboutdetail)}</h3>
                        {aboutdetail && getValueByKey('section3-dics1',aboutdetail)}
                    </div>
                </div>
            </div>

        </div>
        
        <Footer />
        </>
    )
}
export default About