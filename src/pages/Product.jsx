import Header from "../components/HeaderComponent/Header";
import Footer from "../components/FooterComponent/Footer";
import { productData } from "../index.js";

const Product = () => {
    return(
        <>
         <Header />
        

        <div className="imgbackground text-white position:absolute top:150px left:50px">
            <div className="p-5">
            <h2 className="fw-bold">Product</h2>
            <div>We manufacturer Raises their, hand, we serve</div>
            </div>
        </div>

        <div className="container my-5">
      <h2 className="text-primary_font text-primary_color mb-4">Our Product</h2>

      <div className="row g-4">
        {productData.map((item) => (
          <div
            key={item.id}
            className="col-12 col-sm-6 col-md-4 col-lg-2 " // 6 columns on large screens
          >
            <div className="border rounded p-2 text-center productDivCss ">
                <img src={item.image} className="productImgCss" />
              <h6 className=" text-primary_font mt-3 shadow">{item.name}</h6>
              
            </div>
          </div>
        ))}
      </div>
    </div>
        {/*<div className="container-fluid p-5 m-5">
            <div className="row">
                <div className="col-6 col-md-3 col-lg-3" >
                    <img src="../images/product/product2.jpg" className="h-75 w-50"/>
                    <h3>Product name</h3>
                </div>
                <div className="col-6 col-md-3 col-lg-3">
                    <img src="../images/product/product2.jpg" className="h-75 w-50"/>
                    <h3>Product name</h3>
                </div>
                <div className="col-6 col-md-3 col-lg-3">
                    <img src="../images/product/product2.jpg" className="h-75 w-50"/>
                    <h3>Product name</h3>
                </div>
                <div className="col-6 col-md-3 col-lg-3">
                    <img src="../images/product/product2.jpg" className="h-75 w-50"/>
                    <h3>Product name</h3>
                </div>
                

            </div>

        </div>*/}
        <Footer/>
        </>
    )
}
export default Product;