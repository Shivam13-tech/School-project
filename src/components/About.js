import React from 'react';
import BBChaube from "../../src/images/Trustee/BB Chaube.jpg"
import DD from "../../src/images/Trustee/Deenanath Dubey.jpg"
import KC from "../../src/images/Trustee/Kiran Chaube.jpg"
import MC from "../../src/images/Trustee/Manoj Chaube.jpg"
import RS from "../../src/images/Trustee/Ramesh Shukla.jpg"
import RC from "../../src/images/Trustee/Renu Kiran Chaube.jpg"
import SD from "../../src/images/Trustee/Santosh Dubey.jpg"
import SDD from "../../src/images/Trustee/Savita Dubey.jpg"
import SCC from "../../src/images/Trustee/Subedar Chaube.jpg"
import about from "../../src/images/Trustee/about.jpeg"


function About(){
    return (
        <div id='About'>
            <div id='mission-vision'>
                <div className='about-content'>
                    <div className='about-imagebox'>
                        <img className='about-image' src={about} />
                    </div>
                    <div className='about-content-info'>
                        <h1 className='about-title'>About us</h1>
                        <p style={{ fontFamily: "'DM Serif Display', serif",
    fontFamily: "'Josefin Sans', sans-serif",
    fontWeight: "400" , textAlign: "justify"}}>
                        Amar Jyoti Vidya Mandir started its journey in year 1984 by our founder Shri Vaidya B.B.Chaube. We began our journey with vision to provide better education to the young minds of our society. Started with a hindi medium school in Bhayandar west with small strength we now have English medium as well as 1 more branch in Virar i.e. Adarsh Public High School. We have also added Junior College section to our Amar Jyoti Group started in year 2013-2014, for the students who wish to pursue in the field of Commerce. We currently have 40+ teaching staff in our Amar Jyoti family who constantly adds value to our schools and drive it towards our goals. Our students have also made our school proud by constantly scoring above distinction percentage in SSC exams every year. Apart from academics our students also excel in sports wherein we hold record of winning Champions trophy 6 times in a row in Sports competition organised by Manthon Samajik Sanstha and Mira Bhayandar Block Congress Committee. Our students have also won 1 gold, 3 silver and 2 bronze for school in sports competition organised by Mahapaur Chashak. We hope to continue our journey with a view to achieve our vision and mission and make our students ready for their future and career.</p>
                    </div>
                </div>
                <div className='about-content1'>
                    <div className='about-content-info'>
                        <h1 className='about-title'>Vision</h1>
                        <p style={{ fontFamily: "'DM Serif Display', serif",
    fontFamily: "'Josefin Sans', sans-serif",
    fontWeight: "400" , textAlign: "justify"}}>
                        Our vision at Amar Jyoti is to empower our students to acquire quality education, skills, knowledge, values, etiquettes, culture that will help build a better future for them. We at Amar Jyoti strive to provide better learning's to our students. Our goal is to empower our students to portray themselves with their uniqueness in their own specialised fields.</p>
                    </div>
                    <div className='about-content-info'>
                        <h1 className='about-title'>Mission</h1>
                        <p style={{ fontFamily: "'DM Serif Display', serif",
    fontFamily: "'Josefin Sans', sans-serif",
    fontWeight: "400" , textAlign: "justify"}}>
                        Our mission is to provide a high-quality, comprehensive, and meaningful education for all students. Our mission is to grow further by nurturing our students with values, culture, knowledge and skills with which they can be more productive and use their knowledge and skills to lead a successful life.</p>
                    </div>
                </div>
            </div>        
            <div className='trust-set'>
                <h1 className='trust-name'>Our Trustees</h1>
                <h1 className='trust-name'>Amar Jyoti Education Society</h1>
                <div className='image-container1' >
                     <div className='card-carousel card' style={{margin: "4vh"}}>
                            <div className='card-imagecontainer'>
                              <img className="card-actualimage " src={BBChaube} />
                            </div>         
                          <div className='container'>
                              <h5 className='card-title'>Shri Vaidya B B Chaube</h5>
                              <p className='card-caption'>Founder & President</p>
                          </div>
                      </div>
                      <div className='card-carousel card' style={{margin: "4vh"}}>
                            <div className='card-imagecontainer'>
                              <img className="card-actualimage " src={RS} />
                            </div>         
                          <div className='container'>
                              <h5 className='card-title'>Shri Rameshchandra R Shukla </h5>
                              <p className='card-caption'>Vice-president</p>
                          </div>
                      </div>
                      <div className='card-carousel card' style={{margin: "4vh"}}>
                            <div className='card-imagecontainer'>
                              <img className="card-actualimage " src={KC} />
                            </div>         
                          <div className='container'>
                              <h5 className='card-title'>Shri Kiran B Chaube</h5>
                              <p className='card-caption'>Secretary</p>
                          </div>
                      </div>
                      <div className='card-carousel card' style={{margin: "4vh"}}>
                            <div className='card-imagecontainer'>
                              <img className="card-actualimage " src={RC} />
                            </div>         
                          <div className='container'>
                              <h5 className='card-title'>Smt. Renu Kiran Chaube</h5>
                              <p className='card-caption'>Treasurer</p>
                          </div>
                      </div>
                      <div className='card-carousel card' style={{margin: "4vh"}}>
                            <div className='card-imagecontainer'>
                              <img className="card-actualimage " src={MC} />
                            </div>         
                          <div className='container'>
                              <h5 className='card-title'>Shri Manoj B Chaube</h5>
                              <p className='card-caption'>Committee member</p>
                          </div>
                      </div>
                      <div className='card-carousel card' style={{margin: "4vh"}}>
                            <div className='card-imagecontainer'>
                              <img className="card-actualimage " src={SDD} />
                            </div>         
                          <div className='container'>
                              <h5 className='card-title'>Smt. Savita S Dubey</h5>
                              <p className='card-caption'>Committee member</p>
                          </div>
                      </div>
                      <div className='card-carousel card' style={{margin: "4vh"}}>
                            <div className='card-imagecontainer'>
                              <img className="card-actualimage " src={SD} />
                            </div>         
                          <div className='container'>
                              <h5 className='card-title'>Shri Santosh K Dubey</h5>
                              <p className='card-caption'>Committee member</p>
                          </div>
                      </div>  
                </div>
            </div>
            <div className='trust-set'>              
                <h1 className='trust-name' >Vaidya B B Chaube Education Society</h1>
                <div className='image-container1'>
                     <div className='card-carousel card' style={{margin: "4vh"}}>
                            <div className='card-imagecontainer'>
                              <img className="card-actualimage " src={BBChaube} />
                            </div>         
                          <div className='container'>
                              <h5 className='card-title'>Shri Vaidya B B Chaube</h5>
                              <p className='card-caption'>Founder & President</p>
                          </div>
                      </div>
                      <div className='card-carousel card' style={{margin: "4vh"}}>
                            <div className='card-imagecontainer'>
                              <img className="card-actualimage " src={RS} />
                            </div>         
                          <div className='container'>
                              <h5 className='card-title'>Shri Rameshchandra R Shukla</h5>
                              <p className='card-caption'>Vice-president</p>
                          </div>
                      </div>
                      <div className='card-carousel card' style={{margin: "4vh"}}>
                            <div className='card-imagecontainer'>
                              <img className="card-actualimage " src={KC} />
                            </div>         
                          <div className='container'>
                              <h5 className='card-title'>Shri Kiran B Chaube</h5>
                              <p className='card-caption'>Secretary</p>
                          </div>
                      </div>
                      <div className='card-carousel card' style={{margin: "4vh"}}>
                            <div className='card-imagecontainer'>
                              <img className="card-actualimage " src={SDD} />
                            </div>         
                          <div className='container'>
                              <h5 className='card-title'>Smt. Savita S Dubey</h5>
                              <p className='card-caption'>Treasurer</p>
                          </div>
                      </div>
                      <div className='card-carousel card' style={{margin: "4vh"}}>
                            <div className='card-imagecontainer'>
                              <img className="card-actualimage " src={MC} />
                            </div>         
                          <div className='container'>
                              <h5 className='card-title'>Shri Manoj B Chaube</h5>
                              <p className='card-caption'>Committee member</p>
                          </div>
                      </div>
                      <div className='card-carousel card' style={{margin: "4vh"}}>
                            <div className='card-imagecontainer'>
                              <img className="card-actualimage " src={SCC} />
                            </div>         
                          <div className='container'>
                              <h5 className='card-title'>Shri Subedar B Chaube</h5>
                              <p className='card-caption'>Committee member</p>
                          </div>
                      </div>
                      <div className='card-carousel card' style={{margin: "4vh"}}>
                            <div className='card-imagecontainer'>
                              <img className="card-actualimage " src={DD} />
                            </div>         
                          <div className='container'>
                              <h5 className='card-title'>Shri Deenanath A Dubey</h5>
                              <p className='card-caption'>Committee member</p>
                          </div>
                      </div>     
                </div>
            </div>
        </div>
    )
}

export default About