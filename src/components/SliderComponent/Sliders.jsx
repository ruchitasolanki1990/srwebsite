import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import {Autoplay, Pagination } from 'swiper/modules';
import React, { useEffect, useState } from "react";
import { IMAGES_UPLOAD, IMAGE_Display } from "../../constant/Constant";
import axios from "axios";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './slider.css';
import { useRef } from 'react';



const Sliders = () => {
    const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    //progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  }; 
const [allImages, setAllImages] = useState([]);

  const fetchData = async () => {
    try {
       const [res1] = await Promise.all([
      axios.get(`${process.env.REACT_APP_API_URL}/${IMAGES_UPLOAD}`)
    ]);
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
    return (
        <Swiper
        style={{"--swiper-pagination-color": "#e97c1f"}}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
       
        modules={[Autoplay, Pagination]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          {allImages && getValueByKeyImg("slide1", allImages) && (
                    <img
                      src={`${process.env.REACT_APP_API_URL}/${IMAGE_Display}/${getValueByKeyImg(
                        "slide1",
                        allImages
                      )}`}
                      className="w-100 mt-3"
                    />
                  )}
        </SwiperSlide>
        <SwiperSlide>
          {allImages && getValueByKeyImg("slide2", allImages) && (
                    <img
                      src={`${process.env.REACT_APP_API_URL}/${IMAGE_Display}/${getValueByKeyImg(
                        "slide2",
                        allImages
                      )}`}
                      className="w-100 mt-3"
                    />
                  )}
        </SwiperSlide>
        <SwiperSlide>
          {allImages && getValueByKeyImg("slide3", allImages) && (
                    <img
                      src={`${process.env.REACT_APP_API_URL}/${IMAGE_Display}/${getValueByKeyImg(
                        "slide3",
                        allImages
                      )}`}
                      className="w-100 mt-3"
                    />
                  )}
        </SwiperSlide>
        
        <div className="autoplay-progress" slot="container-end">
          <svg  ref={progressCircle}>
          </svg>
          <span ref={progressContent}></span>
        </div>
        
      </Swiper>

    )
}
export default Sliders