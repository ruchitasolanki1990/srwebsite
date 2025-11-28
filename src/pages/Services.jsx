import Footer from "../components/FooterComponent/Footer";
import Header from "../components/HeaderComponent/Header";
import { IMAGE_Display, IMAGES_UPLOAD, GET_SERVICES_DETAILS, SERVICES_IMAGE_DISPLAY } from "../constant/Constant";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Services = () =>{

    const [allImages, setAllImages] = useState([]);
    const [servicesDetails, setServicesDetails] = useState([]);
  const fetchData = async () => {
    try {
       const [res1, res2] = await Promise.all([
      axios.get(`${process.env.REACT_APP_API_URL}/${IMAGES_UPLOAD}`),
      axios.get(`${process.env.REACT_APP_API_URL}/${GET_SERVICES_DETAILS}`)
    ]);
      setAllImages(res1.data);
      setServicesDetails(res2.data);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const getValueByKeyImg = (key, data) => {
  const item = data.find((x) => x.pagekey === key);
  return item ? item.path : null;
};

const bgImage = getValueByKeyImg("servicesimg", allImages);

    return(
        <>
            <Header />
             <div style={{backgroundImage: `url(${process.env.REACT_APP_API_URL}/${IMAGE_Display}/${bgImage})` }} 
                          className="imgbackground text-white position:absolute top:150px left:50px">
                        <div className="banner-content">
                        <h2 className="fw-bold">Services</h2>
                        <div>Specialist In Repairing Of Glass Lined Reactor With Teflon , Tantalum Plugging , 
                            Through Hole Repair.Inspection Of Glr By Spark Testing, Thickness Testing, Jacket Fitting / Welding 
                            , Overhauling Of Glr.</div>
                        </div>
            </div>

            <div className="container-fluid m-5">
                <div className="row">
                    <div className="col-6 col-md-4 col-lg-4">
                        <h2 className="text-primary_font text-primary_color ms-5">Our Special Services</h2>
                         <ul className="list-unstyled border bg-light">
                            {servicesDetails.map((item) => (
                                <li key={item.id} className="m-3"><a href={`#s${item.id}`} className="text-decoration-none text-dark link-underline-primary my-link">{item.name}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-6 col-md-7 col-lg-7">
                        {servicesDetails.map(servicesDetails => (
                            <div key={servicesDetails.id} className="p-3 container-fluid">

                                {/* Show image only if available */}
                                
                                {servicesDetails.image ? (
                                <>
                                    <div className="container-fluid" id={`s${servicesDetails.id}`}>
                                        <div className="row">
                                            <div className="col-md-4 col-12 col-lg-3 ">
                                            <img
                                            src={`${process.env.REACT_APP_API_URL}/${SERVICES_IMAGE_DISPLAY}/${servicesDetails.image}`}
                                            alt={servicesDetails.name}
                                            className="img-fluid"
                                            width={300}
                                            height={300} />
                                            </div>
                                            <div className="col-12 col-md-6  col-lg-9 mt-3 ">
                                            <p className="text-primary_font text-primary_color fs-5">{servicesDetails.name}</p>
                                            </div>
                                        </div>
                                        <p className="mt-3">{servicesDetails.discription}</p>
                                        </div>
                                </>
                                ) : (
                                <>
                                <div id={`s${servicesDetails.id}`}>
                                    <p className="text-primary_font text-primary_color fs-5">{servicesDetails.name}</p>
                                    <p>{servicesDetails.discription}</p>
                                </div>
                                </>
                                )}
                            </div>
                            ))}
                            </div>
                        </div>
                    </div>
            <Footer />
        </>
    )
}
export default Services;