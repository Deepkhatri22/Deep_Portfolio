import React from 'react'
import './about.css'

const About = () => {
    return (
        <>
            <div className="about bg-purple-300 " id='about'>
                <div className="textdiv">
                    <h1>About me</h1>
                    <p >I am a Web developer, I build websites and web Designs, I will solve all your business problems. I am open to freelance work.</p>
                    <p>I am a specialized React JS developer, your go-to solution for crafting websites and web design. With a passion for problem-solving and innovation, I excel in creating seamless digital experiences tailored to your business needs.</p>
                    {/* <p>Specializing in MongoDB, Express.js, React.js, and Node.js, I leverage the power of the MERN stack to deliver robust and dynamic solutions that exceed expectations. Whether you need a sleek website or a feature-rich mobile app, I have the skills to bring your vision to life.</p> */}
                    <p>My commitment to clean, efficient code ensures easy maintenance and scalability, while my understanding of business challenges enables me to develop custom solutions that address your specific needs.</p>

                </div>
                <img src="/logoabout.png" alt="aboutimg" quality={100} />

            </div>
        </>
    )
}

export default About
