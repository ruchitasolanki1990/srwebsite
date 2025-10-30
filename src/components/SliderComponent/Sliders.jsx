import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import {Autoplay, Pagination } from 'swiper/modules';

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
          <img src="../images/slider/slide1.jpg" className="img-fluid w-100 slide-img object-fit: cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../images/slider/slide2.jpg" className='img-fluid w-100 slide-img object-fit: cover' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../images/slider/slide3.jpg" className='img-fluid w-100 slide-img object-fit: cover'  />
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