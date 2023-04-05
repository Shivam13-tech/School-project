import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import images1 from "../images/Home/image1.JPG"
import images2 from "../images/Home/image2.jpeg"
import images3 from "../images/Home/image3.JPG"
import News1 from "../images/Home/News1.jpeg"
import News2 from "../images/Home/News2.jpeg"
import News3 from "../images/Home/News3.jpg"
import News4 from "../images/Home/News4.jpeg"
import News5 from "../images/Home/News5.jpeg"
import News6 from "../images/Home/News6.jpeg"
import News7 from "../images/Home/News7.jpeg"
import News8 from "../images/Home/News8.jpeg"
import News9 from "../images/Home/News9.jpeg"
import Award1 from "../images/Home/Award1.jpg"
import Award2 from "../images/Home/Award2.jpg"
import Award3 from "../images/Home/Award3.jpg"
import Award4 from "../images/Home/Award4.jpg"
import Award5 from "../images/Home/Award5.jpg"
import Award6 from "../images/Home/Award6.jpeg"
import Motivation from "../images/Home/Motivation.jpeg"

function Home(){

  const baseGet = 'https://school-link-backend-5p9r.vercel.app/api/v1/'

  const [todo, settodo] = useState([])
  useEffect(() => {
    async function fetchData(){
      const result = await axios.get(baseGet);
      settodo(result.data); 
    }
    fetchData()
  },[])
//   useEffect(async function(){
//     const result = await axios.get(baseGet);
//     settodo(result.data); 
//  },[])

    return (
        <div id='Home'>
          <div id='Home-section1'>
              <div id="carouselExampleCaptions3" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={images1} className="d-block w-100 react-style" alt="Real Madrid 1"/>
                  </div>
                  <div className="carousel-item">
                    <img src={images2} className="d-block w-100 react-style" alt="UCL Image" />
                  </div>
                  <div className="carousel-item">
                    <img src={images3} className="d-block w-100 react-style" alt="Real Madrid 2" />
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
            </div> 
          <div id='Home-section2'>
            <div id='home-imagebox'>
                <img id='sub-image' src={Motivation} />
            </div>
              <div id='home-importantlinkbox'>
              {todo.map(function(item){
                return(
                 <a key={item.todo} className='linkstyle' href={item.link} target="_blank" style={{textDecoration: "none",
    textAlign: "center"}}><h5 style={{color:"#005450"}}>{item.todo}:</h5><p className='link-specific-style'>{item.link}</p></a>
                )
              })}
              </div>
          </div>
          <div id='Home-section3'>
          <h1 className='card-carousel-title'>News & Events</h1>
            <div id="carouselExampleCaptions1" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner ">
                  <div className="carousel-item active">
                  <div className='card-style'>
                      <div className='card-carousel card'>
                        <div className='card-design'>
                            <div className='card-imagecontainer'>
                              <img className="card-actualimage " src={News1} />
                            </div>         
                          <div className='container'>
                              <h4 className='card-title'>25<sup>th</sup> Year <br />celebration</h4>
                          </div>
                        </div>
                      </div>
                      <div className='card-carousel card'>
                            <div className='card-imagecontainer'>
                              <img className="card-actualimage " src={News2} />
                            </div>         
                          <div className='container'>
                              <h4 className='card-title'>Article on Championship win</h4>
                          </div>
                      </div>
                      <div className='card-carousel card'>
                            <div className='card-imagecontainer'>
                              <img className="card-actualimage " src={News3} />
                            </div>         
                          <div className='container'>
                              <h4 className='card-title'>Visit from Room to Read associate's</h4>
                          </div>
                      </div>
                  </div>
                  </div>
                  <div className="carousel-item ">
                  <div className='card-style'>
                      <div className='card-carousel card'>
                            <div className='card-imagecontainer'>
                              <img className="card-actualimage " src={News4} />
                            </div>         
                          <div className='container'>
                          <h4 className='card-title'>Science Exhibition</h4> 
                          </div>
                      </div>
                      <div className='card-carousel card'>
                            <div className='card-imagecontainer'>
                              <img className="card-actualimage " src={News5} />
                            </div>         
                          <div className='container'>
                          <h4 className='card-title'>Medical Camp</h4>
                          </div>
                      </div>
                      <div className='card-carousel card'>
                            <div className='card-imagecontainer'>
                              <img className="card-actualimage " src={News6} />
                            </div>         
                          <div className='container'>
                          <h4 className='card-title'>Annual Sport's Day</h4>   
                          </div>
                      </div>
                  </div>
                  </div>
                  <div className="carousel-item ">
                  <div className='card-style'>
                      <div className='card-carousel card'>
                            <div className='card-imagecontainer'>
                              <img className="card-actualimage " src={News7} />
                            </div>         
                          <div className='container'>
                          <h4 className='card-title'>Annual Health Checkup</h4>      
                          </div>
                      </div>
                      <div className='card-carousel card'>
                            <div className='card-imagecontainer'>
                              <img className="card-actualimage " src={News8} />
                            </div>         
                          <div className='container'>
                          <h4 className='card-title'>Independence Day Celebration</h4>   
                          </div>
                      </div>
                      <div className='card-carousel card'>
                            <div className='card-imagecontainer'>
                              <img className="card-actualimage " src={News9} />
                            </div>         
                          <div className='container'>
                          <h4 className='card-title'>Intenational Yoga Day</h4>
                          </div>
                      </div>
                  </div>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions1" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions1" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
          </div> 
          <div id='Home-section4'>
              <h1 className='card-carousel-title'>Awards & Achievments</h1>
              <div id="carouselExampleCaptions2" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions1" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions1" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions1" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner ">
                  <div className="carousel-item active">
                  <div className='card-style'>
                      <div className='card-carousel card'>
                        <div className='card-design'>
                            <div className='card-imagecontainer'>
                              <img className="card-actualimage " src={Award1} />
                            </div>         
                          <div className='container'>
                              <p className='card-title'>1<sup>st</sup> price - Dance <br />2<sup>nd</sup> price - Science Exhibition <br />3<sup>rd</sup> price - Innovation</p>
                          </div>
                        </div>
                      </div>
                      <div className='card-carousel card'>
                            <div className='card-imagecontainer'>
                              <img className="card-actualimage " src={Award2} />
                            </div>         
                          <div className='container'>
                          {/* <h3 className='card-title'>Award name</h3> */}
                          <p className='card-title'>Mahapaur chashak (2016 & 2017)<br />Championship trophy<br />Kho kho & Kabaddi</p>
                          </div>
                      </div>
                      <div className='card-carousel card'>
                            <div className='card-imagecontainer'>
                              <img className="card-actualimage " src={Award3} />
                            </div>         
                          <div className='container'>
                          <p className='card-title'>Manthan - Interschool champtionship trophy(2016 / 2017 / 2019)</p>
                          </div>
                      </div>
                  </div>
                  </div>
                  <div className="carousel-item ">
                  <div className='card-style'>
                      <div className='card-carousel card'>
                            <div className='card-imagecontainer'>
                              <img className="card-actualimage " src={Award4} />
                            </div>         
                          <div className='container'>
                          <p className='card-title'>Manthan - Interschool sports champtionship trophy(2013 / 2014 / 2015)</p>
                          </div>
                      </div>
                      <div className='card-carousel card'>
                            <div className='card-imagecontainer'>
                              <img className="card-actualimage " src={Award5} />
                            </div>         
                          <div className='container'>
                          <p className='card-title'>Community development <br />Kho kho & Kabaddi<br />Science Exhibition</p>
                          </div>
                      </div>
                      <div className='card-carousel card'>
                            <div className='card-imagecontainer'>
                              <img className="card-actualimage " src={Award6} /> 
                            </div>         
                          <div className='container'>
                          <p className='card-title'>Second place in Swachh survekshan 2020</p>
                          </div>
                      </div>
                  </div>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
          </div>
        </div>
    )
}

export default Home