import React from 'react'
import { SocialIcon } from 'react-social-icons'
import './footer.css'

function Footer() {
    return (
        <>
            <div className="social" id='contact'>
                <div className="socialcard"
                    onClick={() => window.open('mailto:deepkhatri934@gmail.com', '_blank')}
                >
                    <SocialIcon url="https://email.com" style={{ height: 40, width: 40 }} />
                    <p>deepkhatri934@gmail.com</p>
                </div>
                
                <div className="socialcard"
                    onClick={() => window.open('https://www.linkedin.com/in/deepkhatri22', '_blank')}
                >
                    <SocialIcon url="https://linkedin.com" style={{ height: 40, width: 40 }} />
                    <p>Deep Khatri</p>
                </div>
                <div className="socialcard"
                    onClick={() => window.open('https://github.com/Deepkhatri22', '_blank')}
                >
                    <SocialIcon url="https://github.com" style={{ height: 40, width: 40 }} />
                    <p>Deepkhatri22</p>
                </div>
                <div className="socialcard"
                    onClick={() => window.open('https://instagram.com/dk.2263', '_blank')}
                >
                    <SocialIcon url="https://instagram.com" style={{ height: 40, width: 40 }} />
                    <p>@dk.2263</p>
                </div>

                <div className="socialcard"
                    onClick={() => window.open('https://twitter.com/DK2263?t=oT1dHLpW9arbxRqhK_yN_A&s=09https://twitter.com/DK2263?t=oT1dHLpW9arbxRqhK_yN_A&s=09', '_blank')}
                >
                    <SocialIcon url="https://www.x.com" style={{ height: 40, width: 40 }} />
                    <p>DK2263</p>
                </div>
                {/* <div className="socialcard"
                    onClick={() => window.open('https://www.youtube.com/@CodersHubYoutube', '_blank')}
                >
                    <SocialIcon url="https://www.youtube.com" style={{ height: 40, width: 40 }} />
                    <p>Coders Hub</p>
                </div> */}
            </div>
        </>
    )
}

export default Footer
