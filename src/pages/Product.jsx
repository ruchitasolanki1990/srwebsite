import Header from "../components/HeaderComponent/Header";
import Footer from "../components/FooterComponent/Footer";
import { GET_PRODUCT_DETAILS, IMAGES_UPLOAD, IMAGE_Display, IMAGE_PRODUCT_DISPLAY } from "../constant/Constant.js";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Product = () => {

  const [allImages, setAllImages] = useState([]);
   const [productDetails, setProductDetails] = useState([]);
  const fetchData = async () => {
    try {
       const [res1 , res2] = await Promise.all([
      axios.get(`${process.env.REACT_APP_API_URL}/${IMAGES_UPLOAD}`),
      axios.get(`${process.env.REACT_APP_API_URL}/${GET_PRODUCT_DETAILS}`)
    ]);
      setAllImages(res1.data);
      setProductDetails(res2.data);
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

const bgImage = getValueByKeyImg("productimg", allImages);

    return(
        <>
         <Header />
        

        <div style={{backgroundImage: `url(${process.env.REACT_APP_API_URL}/${IMAGE_Display}/${bgImage})` }} 
              className="imgbackground text-white position:absolute top:150px left:50px">
            <div className="banner-content">
            <h2 className="fw-bold">Product</h2>
            <div>We manufacturer Raises their, hand, we serve</div>
            </div>
        </div>

       {/*} <div className="container my-5">
      <h2 className="text-primary_font text-primary_color mb-4">Our Product</h2>

     
    </div>*/}
    <div className="container-fluid m-5">
                    <div className="row">
                        <div className="col-6 col-md-4 col-lg-4">
                            <h2 className="text-primary_font text-primary_color ms-5">Our Special Services</h2>
                             <ul className="list-unstyled m-3 border bg-light">
                                {productDetails.map((item) => (
                                    <li key={item.id} className="m-3"><a href={`#s${item.id}`} className="text-decoration-none text-dark link-underline-primary my-link">{item.name}</a></li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-6 col-md-7 col-lg-7">
                          <div className="container mt-4">
                              <div className="row">
                                {productDetails.map(productDetails => (
                                    <div id={`s${productDetails.id}`} key={productDetails.id} className="col-6 col-md-3 mb-4 text-center">
                                         <img
                                                src={`${process.env.REACT_APP_API_URL}/${IMAGE_PRODUCT_DISPLAY}/${productDetails.image}`}
                                                alt={productDetails.name}
                                                className="img-fluid" />
                                           <p className="text-primary_font text-primary_color fs-5">{productDetails.name}</p>
                                      </div>
                                ))}
                                </div>
                                </div>
                                </div>
                            </div>
                        </div>
       
        <Footer/>
        </>
    )
}
export default Product;