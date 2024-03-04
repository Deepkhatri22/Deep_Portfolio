import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './project.css';
import './ProjectSwiper.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
const Projects = () => {
  return (
    <div className="projectdiv" id='project'>
      <h1>My Projects</h1>

      <div className='projectswipercontainer'>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"



        >
          <SwiperSlide>
            <div className="projectcard text-center">
              <h1 className='cursor-pointer hover:text-gray-600'>TO-DO List Using React</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div onClick={() => window.open('https://livewebchat.onrender.com/', '_blank')} className="projectcard text-center">
              <h1 className='cursor-pointer hover:text-gray-600'>Live Webchat App</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="projectcard text-center">
              <h1 className='cursor-pointer hover:text-gray-600'>Portfolio</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div onClick={() => window.open('https://weather-app-by-dk.vercel.app/', '_blank')} className="projectcard text-center">
              <h1 className='cursor-pointer hover:text-gray-600'>Weather App using React</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div onClick={() => window.open('https://spotify-clone-2clh.onrender.com', '_blank')} className="projectcard text-center">
              <h1 className='cursor-pointer hover:text-gray-600'>Spotify Clone</h1>
            </div>
          </SwiperSlide>
         
          {/* <SwiperSlide>
            <div className="projectcard">
              <h1>Project 6</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="projectcard">
              <h1>Project 7</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="projectcard">
              <h1>Project 8</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="projectcard">
              <h1>Project 9</h1>
            </div>
          </SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  )
}

export default Projects