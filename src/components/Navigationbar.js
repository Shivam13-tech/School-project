import React from 'react';
import schoollogo from "../images/school_logo-modified.png"
import { Link } from 'react-router-dom';

// let {BrowserRouter,Switch,Route,NavLink} = ReactRouterDOM;

function NavigationBar(){
    const [click, setClick] = React.useState(false);

    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);

    return(
        <div>
        <div style={{display: "flex", justifyContent: "center"}}>
            <Link to="/" style={{textDecoration: "none", color: "black"}}>       
                <h3 className='school-title'><img src={schoollogo} className='schoollogo' />Amar Jyoti Group Of Schools and Junior College</h3>
            </Link>  
        </div>
            <div className={click ? "main-container" : ""}  onClick={()=>Close()} >
        <nav className="navbar" onClick={e => e.stopPropagation()}>
        <div className="nav-container">
          {/* <h1 className="nav-logo"><i className="fa fa-code"></i>CodeBucks</h1> */}
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
                <Link to="/" style={{textDecoration: "none"}}>
                <h1 activeclassname="active"
                className="nav-links"
                onClick={click ? handleClick : null}>Home</h1>
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/about" style={{textDecoration: "none"}}>
                <h1 activeclassname="active"
                className="nav-links"
                onClick={click ? handleClick : null}>About</h1>
                </Link>
            </li>
            <ul className="nav-item dropdown">
                 <h1 activeclassname="active" className="nav-links" >Schools</h1>   {/*onClick={click ? handleClick : null} */}
                <div className="dropdown-content">
                    <li className="nav-item" style={{listStyleType: "none"}}>
                        <Link to="/School1" style={{textDecoration: "none"}}>
                        <h2 activeclassname="active" className="subnav-links " style={{color: "white"}} onClick={click ? handleClick : null}>Amar Jyoti Vidya Mandir High School (Eng & Hindi)</h2>
                        </Link>
                    </li> 
                    <li className="nav-item"  style={{listStyleType: "none"}}>
                        <Link to="/School2" style={{textDecoration: "none"}}>
                        <h2 activeclassname="active" className="subnav-links" style={{color: "white"}} onClick={click ? handleClick : null}>Adarsh Public High School</h2> 
                        </Link>
                    </li>
                    <li className="nav-item"  style={{listStyleType: "none"}}>
                    <Link to="/School3" style={{textDecoration: "none"}}>
                        <h2 activeclassname="active" className="subnav-links" style={{color: "white"}} onClick={click ? handleClick : null}>Amar Jyoti Junior college</h2>   
                    </Link>
                    </li>
                    <li className="nav-item"  style={{listStyleType: "none"}}>
                    <Link to="/School4" style={{textDecoration: "none"}}>   
                        <h2 activeclassname="active" className="subnav-links" style={{color: "white"}} onClick={click ? handleClick : null}>Holy - de - integro kindergarten </h2>
                    </Link>
                    </li>
                </div>      
            </ul>
            <li className="nav-item">
                <Link to="/academics" style={{textDecoration: "none"}}>
                <h1 activeclassname="active"
                className="nav-links"
                onClick={click ? handleClick : null}>Academics</h1>
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/contact" style={{textDecoration: "none"}}>
                <h1 activeclassname="active"
                className="nav-links"
               onClick={click ? handleClick : null}>Contact</h1>
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/career" style={{textDecoration: "none"}}>
                <h1 activeclassname="active"
                className="nav-links"
               onClick={click ? handleClick : null}>Career</h1>
                </Link>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
            </div>
        </div>
    )
}

export default NavigationBar