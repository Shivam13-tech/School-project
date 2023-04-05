import React from 'react';
import Sneak1 from  "../images/Amar jyoti vidya mandir high school/Sneak1.JPG"
import Sneak2 from  "../images/Amar jyoti vidya mandir high school/Sneak2.jpg"
import Sneak3 from  "../images/Amar jyoti vidya mandir high school/Sneak3.jpg"
import Slider1 from "../images/Amar jyoti vidya mandir high school/Slider 1.jpeg"
import Slider2 from "../images/Amar jyoti vidya mandir high school/Slider 2.jpg"
import Slider3 from "../images/Amar jyoti vidya mandir high school/Slider 3.JPG"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';

function School1(){
    return(
        <div id="School1">
            <h1 className='School-name'>Amar Jyoti Vidya Mandir High School<br /><h3 style={{textAlign: "center"}}>English & Hindi medium</h3></h1> 
            
            <div id="carouselExampleCaptions3" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={Slider1} className="d-block w-100 school-slider1"  alt="Real Madrid 1"/>
                  </div>
                  <div className="carousel-item">
                    <img src={Slider2} className="d-block w-100 school-slider1"  alt="UCL Image" />
                  </div>
                  <div className="carousel-item">
                    <img src={Slider3} className="d-block w-100 school-slider1"  alt="Real Madrid 2" />
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
                <p className='school-overview'>Started in year 1983 Amar Jyoti Vidya Mandir High School is run by trained professionals such as teachers, administrators, and support staff. Our focus is to work together to create a safe and supportive learning environment for students, and to ensure that all students have access to the resources and support they need to succeed. We aim on shaping the future of society by providing students with the knowledge, skills, and values they need to become responsible and productive citizens.</p>
              </div>
              <div style={{display: "flex", justifyContent: "center"}}>
              <h1 className='school-header' >Contact</h1>
              </div>
              <div className='school-contact-single'>
              <div className='contact-section'>
                <div className='contact-info'>
                    <h3 className='contact-schoolname'>Amar Jyoti Vidya Mandir High School </h3>
                    <p className='contact-subinfo'>Directions:</p>
                    <p className='contact-subinfo'><LocationOnIcon style={{paddingRight: "0.3vw"}} />Address: 184-10(C), God - Dev Navghar Cross Rd, Sai Baba Nagar, Bhayandar East, Mira Bhayandar, Maharashtra. Pin Code: 401105</p>
                    <p className='contact-subinfo'><CallIcon style={{paddingRight: "0.3vw"}}/>Contact no: 022-28162976 / 28165084</p>
                </div>
                <div>
                    <iframe className="mapiframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.327662786657!2d72.85871341438028!3d19.311582949544633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0284ec3aa0d%3A0x6865ee9f090eb9dc!2sAmar%20Jyoti%20Vidya%20Mandir%20High%20School!5e0!3m2!1sen!2sin!4v1625338584415!5m2!1sen!2sin" allowFullScreen="" loading="lazy"></iframe>
                </div>
           </div>
              </div>
        </div>
    )
}

export default School1