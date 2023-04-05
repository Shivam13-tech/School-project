import React from 'react';
import Sneak1 from "../images/Adarsh public/Sneak1.jpeg"
import Sneak2 from "../images/Adarsh public/Sneak2.jpeg"
import Sneak3 from "../images/Adarsh public/Sneak3.jpeg"
import Slider1 from "../images/Adarsh public/Slider 1.jpg"
import Slider2 from "../images/Adarsh public/Slider 2.jpg"
import Slider3 from "../images/Adarsh public/Slider 3.jpeg"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';

function School2(){
    return(
        <div id="School2">
            <h1 className='School-name'>Adarsh Public High School</h1>
            <div id="carouselExampleCaptions3" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={Slider3} className="d-block w-100 school-slider1"  alt="Real Madrid 1"/>
                  </div>
                  <div className="carousel-item">
                    <img src={Slider2} className="d-block w-100 school-slider1"  alt="UCL Image" />
                  </div>
                  <div className="carousel-item">
                    <img src={Slider1} className="d-block w-100 school-slider1"  alt="Real Madrid 2" />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions3" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions3" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <div style={{display: "flex", justifyContent: "center"}}>
              <h1 className='school-header'>Sneak peak</h1>
              </div>
              <div className='school-image-box'>
                <div className='school-card-imagecontainer'>
                    <img src={Sneak1} className="school-card-image"/>
                </div>
                <div className='school-card-imagecontainer'>
                    <img src={Sneak2} className="school-card-image"/>
                </div>
                <div className='school-card-imagecontainer'>
                    <img src={Sneak3} className="school-card-image"/>
                </div>
              </div>
              <div style={{display: "flex", justifyContent: "center"}}>
              <h1 className='school-header'>School overview</h1>
              </div>
              <div className='school-overview-box'>
                <p className='school-overview'>Adarsh Public High School intiated in year 1994 is an institution designed to provide education to children. We have a structured curriculum that includes subjects such as language, math, science, social studies, and physical education. The purpose of a school is to impart knowledge and skills to students, preparing them for success in their future endeavors.</p>
              </div>
              <div style={{display: "flex", justifyContent: "center"}}>
              <h1 className='school-header'>Contact</h1>
              </div>
              <div className='school-contact-single'>
              <div className='contact-section1'>
                <div className='contact-info'>
                    <h3 className='contact-schoolname'>Adarsh Public High School</h3>
                    <p className='contact-subinfo'>Directions:</p>
                    <p className='contact-subinfo' ><LocationOnIcon style={{paddingRight: "0.3vw"}} />Address:  M.B. Kunj building, M.B. Estate, Virar (W).
                 Dist - Palghar Pin code: 401303</p>
                    <p className='contact-subinfo'><CallIcon style={{paddingRight: "0.3vw"}}/>Contact no: +91 7741026979</p>
                </div>
                <div>
                <iframe className="mapiframe" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3762.0363390846546!2d72.8066!3d19.454!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x701318f5542fd7c5!2sAdarsh%20Public%20High%20School!5e0!3m2!1sen!2sus!4v1625338745148!5m2!1sen!2sus" allowFullScreen="" loading="lazy"></iframe>
                </div>
           </div>
              </div>
        </div>
    )
}

export default School2