import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './project.css';
import './ProjectSwiper.css';
import { LuListTodo } from "react-icons/lu";
import { IoMdChatbubbles } from "react-icons/io";
import { FaUserGraduate } from "react-icons/fa";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { FaSpotify } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
const Projects = () => {
  return (
    <div className="projectdiv bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" id='project'>
    {/* <div className="projectdiv bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%" id='project'> */}
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
            depth: 150,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"



        >
          <SwiperSlide>
            <div onClick={() => window.open('https://task-manager-by-dk.vercel.app/', '_blank')} className="projectcard text-center">
              <h1 className='cursor-pointer hover:text-gray-600'>Task Manager Using React </h1>
              <span className='text-[80px]'><LuListTodo/> </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div onClick={() => window.open('https://livewebchat.onrender.com/', '_blank')} className="projectcard text-center">
              <h1 className='cursor-pointer hover:text-gray-600'>Live Webchat App</h1>
              <span className='text-[80px]'><IoMdChatbubbles/> </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div onClick={() => window.open('https://deepkhatri-portfolio.vercel.app/','_blank')} className="projectcard text-center">
              <h1 className='cursor-pointer hover:text-gray-600'>Portfolio</h1>
              <span className='text-[80px]'><FaUserGraduate/> </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div onClick={() => window.open('https://weather-app-by-dk.vercel.app/', '_blank')} className="projectcard text-center">
              <h1 className='cursor-pointer hover:text-gray-600'>Weather App using React</h1>
              <span className='text-[80px]'><TiWeatherPartlySunny/> </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div onClick={() => window.open('https://resplendent-youtiao-d7ea6c.netlify.app/', '_blank')} className="projectcard text-center">
              <h1 className='cursor-pointer hover:text-gray-600'>Landing Page using React</h1>
              <span className='text-[80px]'><CgWebsite/> </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div onClick={() => window.open('https://spotify-clone-2clh.onrender.com', '_blank')} className="projectcard text-center">
              <h1 className='cursor-pointer hover:text-gray-600'>Spotify Clone</h1>
              <span className='text-[80px]'><FaSpotify/> </span>
            </div>
          </SwiperSlide>
         
        </Swiper>
      </div>
    </div>
  )
}

export default Projects