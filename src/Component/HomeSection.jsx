import React from 'react'
import './homesection.css'

function HomeSection() {

    return (
        <>
            <div className="sectionoutermost">
                <div className="left">
                    <p>If you are Looking for a web developer or need help with your project then feel free to contact me at <span>deepkhatri934@gmail.com</span>
                    </p>
                    <a
                        href="/Resume.pdf" // Assuming your resume file is named 'Resume.pdf' in the public folder
                        className='text-white bg-purple-500 rounded-md w-40 mt-5 p-2 text-center block'
                        download="Resume.pdf"
                    >
                        RESUME
                    </a>
                </div>

                <div className="right">
                    <h1 className='text-white font-[550]'>
                        Let's<br />
                        Work<br />
                        together
                    </h1>
                </div>
            </div>

        </>
    )
}

export default HomeSection
