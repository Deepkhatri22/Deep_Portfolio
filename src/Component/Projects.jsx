import React from 'react';
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
import { RiOpenaiFill } from "react-icons/ri";
import { FaApple } from "react-icons/fa";
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';



const Projects = () => {
  return (
    <div className="projectdiv bg-[#000415]" id='project'>
      {/* <div className="projectdiv bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" id='project'> */}
      {/* <div className="projectdiv bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%" id='project'> */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ amount: 0.8 }}>
        My Projects
      </motion.h1>


      <div className='projectswipercontainer'>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          initialSlide={3}
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
              <h1 className='cursor-pointer hover:text-gray-500'>Task Manager Using React </h1>
              <span className='text-[80px] text-white'><LuListTodo /> </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div onClick={() => window.open('https://livewebchat.onrender.com/', '_blank')} className="projectcard text-center">
              <h1 className='cursor-pointer hover:text-gray-500'>Live Webchat App</h1>
              <span className='text-[80px] text-white'><IoMdChatbubbles /> </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div onClick={() => window.open('https://deepkhatri-portfolio.vercel.app/', '_blank')} className="projectcard text-center">
              <h1 className='cursor-pointer hover:text-gray-500'>Portfolio</h1>
              <span className='text-[80px] text-white'><FaUserGraduate /> </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div onClick={() => window.open('https://ai-summarizer-by-dk.vercel.app/', '_blank')} className="projectcard text-center">
              <h1 className='cursor-pointer  hover:text-gray-500'>AI Article Summarizer</h1>
              <span className='text-[90px] text-white'><RiOpenaiFill /> </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div onClick={() => window.open('https://iphone15pro-clone-by-dk.vercel.app/', '_blank')} className="projectcard text-center">
              <h1 className='cursor-pointer hover:text-gray-500'>IPhone clone Website</h1>
              <span className='text-[90px] text-white'><FaApple /> </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div onClick={() => window.open('https://weather-app-by-dk.vercel.app/', '_blank')} className="projectcard text-center">
              <h1 className='cursor-pointer hover:text-gray-500'>Weather App using React</h1>
              <span className='text-[80px] text-white'><TiWeatherPartlySunny /> </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div onClick={() => window.open('https://resplendent-youtiao-d7ea6c.netlify.app/', '_blank')} className="projectcard text-center">
              <h1 className='cursor-pointer hover:text-gray-500'>Landing Page using React</h1>
              <span className='text-[80px] text-white'><CgWebsite /> </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div onClick={() => window.open('https://spotify-clone-2clh.onrender.com', '_blank')} className="projectcard text-center">
              <h1 className='cursor-pointer hover:text-gray-500'>Spotify Clone</h1>
              <span className='text-[80px] text-white'><FaSpotify /> </span>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>
    </div>
  )
}

export default Projects