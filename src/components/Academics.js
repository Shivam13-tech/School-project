import React from 'react';
import rtr from "../images/RTR.jpg"
import IT from "../images/IT.jpg"
import GFC from "../images/GFC.jpeg"


function Academics(){
    return(
        <div>
        <h1 className='card-carousel-title'>Feature's</h1>
                <div className='about-content'>
                    <div className='about-imagebox'>
                        <img className='about-image' src={GFC} />
                    </div>
                    <div className='about-content-info'>
                        <h1 className='about-title'>Google Future Classroom (GFC)</h1>
                        <p style={{fontFamily: "'DM Serif Display', serif",
    fontFamily: "'Josefin Sans', sans-serif",
    fontWeight: "400", textAlign: "justify"}}>
                         'Google future classroom' aims to enhance the classroom experience for both teachers and students. Some of these tools include Google Classroom, which allows teachers to create and manage assignments, communicate with students, and provide feedback in one centralized platform. Other tools include G Suite for Education, which provides collaborative tools such as Google Docs, Sheets, and Slides to help students work together on projects and assignments. Additionally, Google Expeditions allows teachers to take their students on virtual reality field trips to various locations around the world. The ultimate goal of these tools is to help students learn more effectively and prepare them for success in the modern, digital world.</p>
                    </div>
                </div>
                <div className='about-content'>
                    <div className='about-imagebox'>
                        <img className='about-image' src={rtr} />
                    </div>
                    <div className='about-content-info'>
                        <h1 className='about-title'>Room To Read</h1>
                        <p style={{fontFamily: "'DM Serif Display', serif",
    fontFamily: "'Josefin Sans', sans-serif",
    fontWeight: "400", textAlign: "justify"}}>
                       Room to Read program is a special space for girls to improve literacy and gender equality in education. It seeks to promote gender equality in education by offering scholarships for girls to continue their education, and providing girls with life skills and mentorship programs. Room to Read's ultimate goal is to transform the lives of millions of children by providing them with the necessary tools and resources to become literate, educated, and empowered individuals who can contribute positively to their communities and societies.</p>
                    </div>
                </div>
                <div className='about-content'>
                    <div className='about-imagebox'>
                        <img className='about-image' src={IT} />
                    </div>
                    <div className='about-content-info'>
                        <h1 className='about-title'>Information Technology Lab</h1>
                        <p style={{fontFamily: "'DM Serif Display', serif",
    fontFamily: "'Josefin Sans', sans-serif",
    fontWeight: "400", textAlign: "justify"}}>
                        Information Technology plays an important role in supporting students' academic and professional development in the field of information technology.
Through IT lab we provide students with access to computer hardware and software that may not be available to them outside of the lab. This is particularly important for students who may not have access to the latest technology at home.
This lab provides students with the opportunity to develop their technical skills through hands-on experience with different technologies, software applications, and programming languages. This can help students prepare for careers in the IT industry.</p>
                    </div>
                </div>
        <div id='academics-boxcontainer'>
            <div className='academics-box'>
                <h2 className='school-title' style={{marginTop: "1vh", marginBottom: "1vh"}}>Amar Jyoti Vidya Mandir School</h2>
                <h2 className='school-title' style={{marginTop: "1vh", marginBottom: "1vh"}}>Location: Bhayandar</h2>
                <h3 className='school-title' style={{marginTop: "1vh", marginBottom: "1vh"}}>Primary - Hindi</h3>
                <h3 className='school-title' style={{marginTop: "1vh", marginBottom: "1vh"}}>Secondary - Hindi</h3>
            </div>
            <div className='academics-box'>
                <h2 className='school-title' style={{marginTop: "1vh", marginBottom: "1vh"}}>Amar Jyoti Vidya Mandir English School</h2>
                <h2 className='school-title' style={{marginTop: "1vh", marginBottom: "1vh"}}>Location: Bhayandar</h2>
                <h3 className='school-title' style={{marginTop: "1vh", marginBottom: "1vh"}}>Primary - English</h3>
                <h3 className='school-title' style={{marginTop: "1vh", marginBottom: "1vh"}}>Secondary - English</h3>
            </div>
            <div className='academics-box'>
                <h2 className='school-title' style={{marginTop: "1vh", marginBottom: "1vh"}}>Amar Jyoti Junior College Of Commerce</h2>
                <h2 className='school-title' style={{marginTop: "1vh", marginBottom: "1vh"}}>Location: Bhayandar</h2>
                <h3 className='school-title' style={{marginTop: "1vh", marginBottom: "1vh"}}>Higher Secondary</h3>
                <h3 className='school-title' style={{marginTop: "1vh", marginBottom: "1vh"}}>*Math & IT Available</h3>
            </div>
            <div className='academics-box'>
                <h2 className='school-title' style={{marginTop: "1vh", marginBottom: "1vh"}}>Holy-de integro kinder garten</h2>
                <h2 className='school-title' style={{marginTop: "1vh", marginBottom: "1vh"}}>Location: Bhayandar</h2>
                <h3 className='school-title' style={{marginTop: "1vh", marginBottom: "1vh"}}>Play Group</h3>
                <h3 className='school-title' style={{marginTop: "1vh", marginBottom: "1vh"}}>LKG, UKG & SR.KG</h3>
            </div>
            <div className='academics-box'>
                <h2 className='school-title' style={{marginTop: "1vh", marginBottom: "1vh"}}>Adarsh Public High School</h2>
                <h2 className='school-title' style={{marginTop: "1vh", marginBottom: "1vh"}}>Location: Virar</h2>
                <h3 className='school-title' style={{marginTop: "1vh", marginBottom: "1vh"}}>Primary - Hindi</h3>
                <h3 className='school-title' style={{marginTop: "1vh", marginBottom: "1vh"}}>Secondary - Hindi</h3>
            </div>
        </div>
        </div>
    )
}

export default Academics

