import Header from "../components/HeaderComponent/Header";
import Footer from "../components/FooterComponent/Footer";
import Sliders from "../components/SliderComponent/Sliders";
import { Settings, HelpCircle ,Search, Newspaper, Beaker } from "lucide-react";
import React, { useEffect, useState } from "react";
import { getValueByKey } from "../utility/utility";
import { GET_HOME_DETAILS,IMAGES_UPLOAD, IMAGE_Display } from "../constant/Constant";
import axios from "axios";

const Home = () => {   

  //database connectivity
const [homedetetail, sethomedetetail] = useState([]);
const [allImages, setAllImages] = useState([]);

 //  Fetch all rows
  const fetchData = async () => {
    try {
       const [res, res1] = await Promise.all([
      axios.get(`${process.env.REACT_APP_API_URL}/${GET_HOME_DETAILS}`),
      axios.get(`${process.env.REACT_APP_API_URL}/${IMAGES_UPLOAD}`)
    ]);
      sethomedetetail(res.data);
      setAllImages(res1.data);
      console.log();
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
  
    return(
        <>
        <Header />
        <Sliders/>
        <div>
          {/* Company info*/ }
      <div className="mx-6 container p-4 bg-light my-5">
        <div className="container">
            <div className="row">
              <div className="col-md-6 col-12 p-3">
               
                  {allImages && getValueByKeyImg("homeimg", allImages) && (
                    <img
                      src={`${process.env.REACT_APP_API_URL}/${IMAGE_Display}/${getValueByKeyImg(
                        "homeimg",
                        allImages
                      )}`}
                      className="w-100 mt-3"
                    />
                  )}
              </div>
            <div className="col-md-6 col-12 p-3">
              {homedetetail && getValueByKey('section1',homedetetail)}
            </div>
          </div>
        </div>
      </div>
    
      <div className="container mx-6 text-j my-5">
        <div className="row">
          <div className="col-md-6 col-12 p-3 ">
            <div className="p-4 bg-light">
              <Settings size={35}  className="me-2 icon-hover" />
             <span className="fs-4 text-primary_color ps-2">{homedetetail && getValueByKey('section2-heading2',homedetetail)}</span>
             <p className="m-2">{homedetetail && getValueByKey('section2-disc2',homedetetail)}</p>
            </div>
          </div>
          <div className="col-md-6 col-12 p-3">
            <div className="bg-light p-4 pb-5">
              <Newspaper size={35} className="me-2 icon-hover" />
              <span className="fs-4 text-primary_color ps-2">{homedetetail && getValueByKey('section2-heading4',homedetetail)}</span>
             <p className="m-2">{homedetetail && getValueByKey('section2-dics4',homedetetail)}</p>
            </div>
          </div>
        </div>
        </div>
        {/*Product Information */}

      {/*<div className="container-fluid border-top text-j">
        <div className="container my-4">
          <div className="row">
              <div className="fs-3  d-flex justify-content-center fw-bold ">PTFE, PEA, FEP Lined Product</div>
            <div className="col-md-4 col-12 p-2">
             <div className="p-4 rounded-lg bg-light shadow">
              <div className="text-primary_color fs-5 fw-bold">PTFE / FEP / PFA Lined Pipe</div>
                <p>We are one of the market leaders in providing PTFE Lining in the Pipes. Our PTFE Lined Pipes are acclaimed among our customers.</p>
             </div>
            </div>
            <div className="col-md-4 col-12 p-2">
              <div className="p-4 bg-light rounded-lg shadow">
                <div className="text-primary_color fs-5 fw-bold">PTFE / FEP / PFA Lined Elbow</div>
                  <p>We are one of the renowned name in the market for offering PTFE Lined 45° Elbow and PTFE Lined 90° Elbow.</p>
              </div>
             </div>
            <div className="col-md-4 col-12 p-2">
              <div className="p-4 bg-light rounded-lg shadow">
                <div className="text-primary_color fs-5 fw-bold">PTFE / FEP / PFA Lined Tee & Cross</div>
                <p>We can also perform PTFE Lining in Reducing Tee. Our PTFE Lined Tees are highly acclaimed among our customers.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container my-4">
          <div className="row">
            <div className="col-md-4 col-12 p-2">
             <div className="p-4 bg-light rounded-lg shadow">
                <div className="text-primary_color fs-5 fw-bold">PTFE / FEP / PFA Lined Reducer</div>
                <p>We are renowned names in providing PTFE Lining in the Reducer to our clients. We manufacture these products as per the industry norms.</p>
             </div>
            </div>
            <div className="col-md-4 col-12 p-2">
              <div className="p-4 bg-light rounded-lg shadow">
                <div className="text-primary_color fs-5 fw-bold">PTFE / FEP / PFA Lined Valve</div>
                <p>We can perform PTFE Lining in Diaphragm Valve, Ballcheck Valve, Butterfly Valve, Plug Valve, Flush Bottom Valve etc.</p>
             </div>
             </div>
            <div className="col-md-4 col-12 p-2">
              <div className="p-4 bg-light rounded-lg shadow">
                <div className="text-primary_color fs-5 fw-bold ">PTFE / FEP / PFA Lined Strainer</div>
                <p>Proposed strainer is required to obtain a tight seal with proper gasket compression and permits nearly complete removal of liquid and dirt.</p>
             </div>
            </div>
          </div>
        </div>
        </div>
        {/*Product Panel 
        <div className="container mx-6 pb-5 px-4 text-j bg-light my-5 border-top py-3">
          <div className="text-center"><h4>Our Products</h4></div>
          <div className="row">
            <div className="col-4 col-md-3 col-lg-3 p-3">
              <img src="../images/product/product2.jpg" className="w-75 shadow"></img>
            </div>
            <div className="col-4 col-md-3 col-lg-3 p-3">
              <img src="../images/product/product3.jpg" className="w-75 shadow"></img>
            </div>
            <div className="col-4 col-md-3 col-lg-3 p-3">
              <img src="../images/product/product4.jpg" className="w-75 shadow"></img>
            </div>
            <div className="col-4 col-md-3 col-lg-3 p-3">
              <img src="../images/product/product4.jpg" className="w-75 shadow"></img>
            </div>
            
        </div>
        </div>*/}
        </div>
        <Footer />
        </>
    )
}
export default Home