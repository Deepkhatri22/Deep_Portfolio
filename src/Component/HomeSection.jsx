// import React from 'react'
// import './homesection.css'

// function HomeSection() {

    

//     return (
//         <>

//             <div className="sectionoutermost" >
//                 <div className="left">
//                     <p>If you are Looking for a web developer or need help with your project then feel free to contact me at <span>deepkhatri934@gmail.com</span>
//                     </p>
//                     <a
//                         href="/Resume.pdf"
//                         className='text-white bg-purple-500 rounded-md w-40 mt-5 p-2 text-center block'
//                         download="Resume.pdf"
//                     >
//                         RESUME
//                     </a>
//                 </div>

//                 <div className="right">
//                     <h1 className='text-white font-[550]'>
//                         Let's<br />
//                         Work<br />
//                         together
//                     </h1>
//                 </div>
//             </div >

//         </>
//     )
// }

// export default HomeSection


import React from 'react';
import { motion } from 'framer-motion';
import './homesection.css';

function HomeSection() {
    return (
        <>
            <div className="sectionoutermost">
                <motion.div 
                    className="left"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ amount: 0.8 }}
                >
                    <p>If you are looking for a web developer or need help with your project then feel free to contact me at <span>deepkhatri934@gmail.com</span></p>
                    <a
                        href="/Resume.pdf"
                        className='text-white btn hover:font-bold hover:text-black bg-purple-500 rounded-md w-40 mt-5 p-2 text-center block'
                        download="Resume.pdf"
                    >
                        RESUME
                    </a>
                </motion.div>

                <motion.div 
                    className="right"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ amount: 0.8 }}
                >
                    <h1 className='text-white font-[550]'>
                        Let's<br />
                        Work<br />
                        together
                    </h1>
                </motion.div>
            </div>
        </>
    );
}

export default HomeSection;
