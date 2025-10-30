import React from "react"
import { useNavigate } from "react-router-dom"
import Header from "../components/HeaderComponent/Header";
import Footer from "../components/FooterComponent/Footer";
import { MapPin, Phone, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { getValueByKey } from "../utility/utility";
import { GET_CONTACT_DETAILS } from "../constant/Constant";
import axios from "axios";

const Contact = () =>{

    // database connectivity for form data submition
const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
  };


//database connectivity for company info
const [contactdetail, setcontactdetail] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/${GET_CONTACT_DETAILS}`)
      .then((res) => {
        setcontactdetail(res.data); // ✅ Save data into state
      })
      .catch((err) => console.error("Error:", err));
  }, []);
 

    return(
        <>
        <Header />
        <div className="imgbackground text-white position:absolute top:150px left:50px">
            <div className="p-5">
            <h2 className="fw-bold">Contact Us</h2>
            <div>We manufacturer Raises their, hand, we serve</div>
            </div>
        </div>
        <div className="container py-5">
            <div className="row">
                <div className="col-md-6 col-12 bg-light shadow p-5">
                <div className="container-fluid">
                   
                    <div><br></br><br></br>
                        <div className="d-flex justify-content-center align-items-center">
                            <MapPin size={25} className="text-primary_color icon-hover" /><br></br>
                        </div>
                        <div className="d-flex justify-content-center align-items-center m-2">
                            {contactdetail && getValueByKey('section2',contactdetail)}
                           
                        </div>
                    </div>
                    <div className="m-5">
                        <div className="d-flex justify-content-center align-items-center">
                            <Phone size={25} className="text-primary_color icon-hover" /><br></br>
                        </div>
                        <div className="d-flex justify-content-center align-items-center m-2">
                          {contactdetail && getValueByKey('section3',contactdetail)}
                        </div>
                    </div>
                    <div className="m-5">
                        <div className="d-flex justify-content-center align-items-center">
                            <Mail size={25} className="text-primary_color icon-hover" /><br></br>
                        </div>
                        <div className="d-flex justify-content-center align-items-center m-2">
                          {contactdetail && getValueByKey('section4',contactdetail)}
                        </div>
                    
                    
                </div>
                </div>
                </div>
                <div className="col-md-6 col-12 bg-light">
                    <div>
                        <div className="row justify-content-center">
                                <div className=" shadow p-4">
                                    <h3 className="text-center mb-4 text-primary_color">GET IN TOUCH</h3>
                                    <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label className="form-label text-primary_color">Full Name</label>
                                        <input type="text" 
                                        className="form-control" 
                                        id="name" 
                                        name="name" 
                                        value={formData.name} 
                                        onChange={handleChange} 
                                        placeholder="Enter your name" 
                                        pattern="[A-Za-z ]+" 
                                        title="Only letters allowed"  required/>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label text-primary_color">Email address</label>
                                        <input 
                                        type="email" 
                                        className="form-control" 
                                        id="email" 
                                        name="email" 
                                        value={formData.email} 
                                        onChange={handleChange} 
                                        placeholder="name@example.com"  required/>
                                    </div>
                                    <div className="mb-3">
                                        <label  className="form-label text-primary_color">Phone</label>
                                        <input type="tel" 
                                        className="form-control" 
                                        id="phone" 
                                        name="phone" 
                                        value={formData.phone} 
                                        onChange={handleChange} 
                                        placeholder="+1 234 567 890"  
                                        pattern="[0-9]{10}" 
                                        title="Enter 10 digit mobile number"  required  />
                                    </div>
                                    <div className="mb-3">
                                        <label  className="form-label text-primary_color">Message</label>
                                        <textarea className="form-control" 
                                        id="message" 
                                        rows="4" 
                                        name="massage" 
                                        value={formData.message} 
                                        onChange={handleChange} 
                                        placeholder="Write your message..."></textarea>
                                    </div>
                                    <div className="d-grid">
                                        <button type="submit" className="btn btn-dark text-primary_color">Send Message</button>
                                    </div>
                                </form>
                            </div>
                            
                        </div>
                        </div>
                </div>
            </div>
        </div>
        <div className="container my-4 w-75 ">
            <h3 className="text-center mb-3 text-primary_color">Our Location</h3>
            <div className="ratio ratio-4x3 mapCss">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3726.2250299650705!2d72.95187845899963!3d20.9434763835475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0f7737711dc43%3A0x47ed651063eefda3!2sS%20R%20TEFCOAT%20ENGINEERING!5e0!3m2!1sgu!2sin!4v1760528088850!5m2!1sgu!2sin" 
                width="600" 
                height="450"
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"  
                ></iframe>
            </div>
        </div>
        <Footer />
        </>
    )
}
export default Contact