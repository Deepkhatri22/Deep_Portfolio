import './home.css'


const Home = () => {

    return (
        <div className="section1outer">
            <div className="subtextdiv">
                <div className="left">
                    <div className="des">
                        <p>Hi, I am <span>Deep Khatri</span></p>
                        <p>I build websites , I will solve all your business problems. I am open to freelance work.</p>
                    </div>
                </div>
                {/* <div className="right">
                    <div className="stat">
                        <h1>30+</h1>
                        <p>Happy<br></br>clients</p>
                    </div>
                    <div className="stat">
                        <h1>5+</h1>
                        <p>Years of<br></br> experience</p>
                    </div>
                </div> */}

            </div>

            <img src="/avatar.png" className="mainimg" alt="main Image"/>
            <div className="maintextdiv">
                <p>I am a </p>
                <h1>Web Developer</h1>
                {/* <h2>Developer</h2> */}
            </div>
            <video src='/bgvideo.mp4' autoPlay loop muted
                className="smokevideo"
            />
        </div>
    )
}

export default Home