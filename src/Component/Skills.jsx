"use client"
import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './skill.css'
import './ProjectSwiper.css';
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa";
import { DiJqueryLogo } from "react-icons/di";
import { FaGithub } from "react-icons/fa";


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
const Projects = () => {
  return (
    <div className="skilldiv" id='skills'>
      <h1>My Skills</h1>

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
            <div className="skillcard">
              <h1>HTML5</h1>
              <span className='text-[200px] text-[#e34c26]'><FaHtml5 /> </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="skillcard">
              <h1>CSS3</h1>
              <span className='text-[200px] text-[#264de4]'><FaCss3Alt /> </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="skillcard">
              <h1>Java Script</h1>
              <span className='text-[200px] text-[#F0DB4F]'><IoLogoJavascript /> </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="skillcard">
              <h1>React Js</h1>
              <span className='text-[200px] text-[#61DBFB]'><FaReact /> </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="skillcard">
              <h1>Tailwind CSS</h1>
              <span className='text-[200px] text-[#61DBFB]'><SiTailwindcss /> </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="skillcard">
              <h1>Bootstrap</h1>
              <span className='text-[200px] text-[#7511f6]'><FaBootstrap /></span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="skillcard">
              <h1>JQuery</h1>
              <span className='text-[200px] text-[#78cff5]'><DiJqueryLogo /> </span>
            </div>
          </SwiperSlide>
        
          <SwiperSlide>
            <div className="skillcard">
              <h1>Git</h1>
              <span className='text-[200px] text-[#F1502F]'><FaGitAlt /> </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="skillcard">
              <h1>GitHub</h1>
              <span className='text-[200px] '><FaGithub /> </span>
            </div>
          </SwiperSlide>
         
          
         
        </Swiper>
      </div>
    </div>
  )
}

export default Projects


