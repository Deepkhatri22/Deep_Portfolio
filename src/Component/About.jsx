// import React from 'react'
// import './about.css'

// const About = () => {
//     return (
//         <>
//             <div className="about bg-purple-300 " id='about'>
//                 <div className="textdiv">
//                     <h1>About me</h1>
//                     <p >I am a Web developer, I build websites and web Designs, I will solve all your business problems. I am open to freelance work.</p>
//                     <p>I am a specialized React JS developer, your go-to solution for crafting websites and web design. With a passion for problem-solving and innovation, I excel in creating seamless digital experiences tailored to your business needs.</p>
//                     {/* <p>Specializing in MongoDB, Express.js, React.js, and Node.js, I leverage the power of the MERN stack to deliver robust and dynamic solutions that exceed expectations. Whether you need a sleek website or a feature-rich mobile app, I have the skills to bring your vision to life.</p> */}
//                     <p>My commitment to clean, efficient code ensures easy maintenance and scalability, while my understanding of business challenges enables me to develop custom solutions that address your specific needs.</p>

//                 </div>
//                 <img src="/logoabout.png" alt="aboutimg" quality={100} />

//             </div>
//         </>
//     )
// }

// export default About


import React from 'react';
import { motion } from 'framer-motion';
import './about.css';

const About = () => {
    return (
        <>
            <div className="about bg-purple-300" id='about'>
                <motion.div
                    className="textdiv"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ amount: 0.8 }}
                >
                    <h1>About me</h1>
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                        viewport={{ amount: 0.8 }}
                    >
                        I am a Web developer, I build websites and web Designs, I will solve all your business problems. I am open to freelance work.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                        viewport={{ amount: 0.8 }}
                    >
                        I am a specialized React JS developer, your go-to solution for crafting websites and web design. With a passion for problem-solving and innovation, I excel in creating seamless digital experiences tailored to your business needs.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
                        viewport={{ amount: 0.8 }}
                    >
                        My commitment to clean, efficient code ensures easy maintenance and scalability, while my understanding of business challenges enables me to develop custom solutions that address your specific needs.
                    </motion.p>
                </motion.div>
                <motion.img
                    src="/logoabout.png"
                    alt="aboutimg"
                    quality={100}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ amount: 0.8 }}
                />
            </div>
        </>
    );
}

export default About;
