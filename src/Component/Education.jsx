import React from 'react'
import './education.css';

function Education() {
  return (
    <>
      <section className="education w-full pt-12 md:pt-24 lg:pt-32 pb-14 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%" id='education'>
      <div className="container px-4 md:px-6" >
        <div className="space-y-12">
          <div className="space-y-2">
            {/* <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Education</div> */}
            <h1 className="heading text-4xl font-bold tracking-tighter sm:text-5xl">My Academic Journey</h1>
          </div>
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold tracking-tight font">Bachelor of Engineering in Computer Science & Engineering  </h3>
              <p className="text-black dark:text-black font ">Shri S'ad Vidyamandal Institute of Technology, Bharuch</p>
              <p className="text-black dark:text-black font ">Gujarat Technological University. </p>
              <p className="text-black dark:text-black font ">October 2020 - Present</p>
              
            </div>
            <div className="space-y-4 text-black dark:text-black">
              <p className="text-justify font ">
              I am currently enrolled in a Bachelor's in Computer Science & Engineering at Shri S'ad Vidyamandal Institute of technology, Bharuch, India, working towards my undergraduate degree.
                CGPA : 8.79
              
              </p>
              <ul className="grid gap-2 list-disc list-outside sm:grid-cols-2 font">
                <li>Intern at BIT INFOTECH, VADODARA , where I gained hands-on experience in web development. January 2024 - Present</li>
                <li>Intern at PARAM CONSULTING SERVICES, VADODARA. July 2023 - August 2023 </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold tracking-tight font">HSC • Jay Ambe group of schools </h3>
              <p className="text-black dark:text-black font">Gujarat Secondary and Higher Secondary Education Board </p>
              <p className="text-black dark:text-black font">Science Stream  •  Jun 2019 - Mar 2020</p>
            </div>
            <div className="space-y-4 text-black dark:text-black">
              {/* <p className="text-justify font">
              Grade - B2, Percentage – 70%
              </p> */}
              <ul className="grid gap-2 list-disc list-outside sm:grid-cols-2 font">
                <li>Grade - B2</li>
                <li>
                Percentage – 70%
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold tracking-tight font">SSC • Jay Ambe group of schools </h3>
              <p className="text-black dark:text-black font">Gujarat Secondary and Higher Secondary Education Board </p>
              <p className="text-black dark:text-black font">Jun 2017 - Mar 2018</p>
            </div>
            <div className="space-y-4 text-black dark:text-black">
              {/* <p className="text-justify font">
              Grade - A2, Percentage – 86%
              </p> */}
              <ul className="grid gap-2 list-disc list-outside sm:grid-cols-2 font">
                <li>Grade - A2</li>
                <li>
                Percentage – 86%
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section> 
    </>
  )
}

export default Education
