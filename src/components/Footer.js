import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import schoollogo from "../images/school_logo-modified.png"
import { Link } from 'react-router-dom';


function Footer(){
    return (
        <div id='Footer'>
            <div className='footer-info'>
                <h3 className='footer-school-colour'><img className='footer-logo' src={schoollogo}  />Amar Jyoti Group</h3>
                <p className='footer-school-colour' style={{padding: "1vh", fontSize: "18px" }}>Devoted to the nation in the development of education</p>
            </div>
            <div className='footer-info'>
                <h3 className='footer-school-colour'>Connect with us</h3>
                <FacebookIcon style={{color: "darkblue"}}/><a className='footer-school-colour' target= "_blank" style={{textDecoration: "None"}} href="https://www.facebook.com/AmarJyotiGroupOfSchoolColleges">Facebook</a>
                <YouTubeIcon style={{color: "red"}}/><a className='footer-school-colour' target= "_blank" style={{textDecoration: "None"}} href="https://www.youtube.com/@ajvmgroupofschools/featured">Youtube</a>
            </div>
            <div className='footer-info'>
                <h3 className='footer-school-colour'>Quick Links</h3>
                <Link to="/contact" style={{textDecoration: "none"}}>
                    <p className='footer-school-colour'>Contact us</p>
                </Link>
                <Link to="/about" style={{textDecoration: "none"}}>
                    <p className='footer-school-colour'>About</p>
                </Link>
                <Link to="/career" style={{textDecoration: "none"}}>
                    <p className='footer-school-colour'>Career</p>
                </Link>
                <Link to="/academics" style={{textDecoration: "none"}}>
                    <p className='footer-school-colour'>Academics</p>
                </Link>
            </div>
        </div>
    )
}

export default Footer