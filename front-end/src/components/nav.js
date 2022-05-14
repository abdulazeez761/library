import  { useState } from "react";
import './nav.css'
import {NavLink} from 'react-router-dom'
import logoImage from '../assets/imgs/logo.png'
function Nav(){
    const [isOpen, setIsOpen] = useState(false);
        return(
            <div className="nav-container">
        <nav>
            <ul>
                <div className="logo-containr">
                <NavLink to='/' className='logo-image'>
                <img src={logoImage} alt="logo image"/>
                </NavLink>
                </div>
                <div className={`nav-options ClassForResponsive ${isOpen && "open"}`}>
                <NavLink to='/' className={({isActive}) => (isActive ? "activeLink" : "link")}>
                <li onClick={() => setIsOpen(!isOpen)}>
                    Home
                </li>
                </NavLink>
                <NavLink to='about'  className={({isActive}) => (isActive ? "activeLink" : "link")}>
                <li  onClick={() => setIsOpen(!isOpen)}>
                    About
                </li>
                </NavLink>
                <NavLink to='filter'  className={({isActive}) => (isActive ? "activeLink" : "link")}>
                <li  onClick={() => setIsOpen(!isOpen)}>
                    Filter
                </li>
                </NavLink>
                
                <NavLink to='login'  className={({isActive}) => (isActive ? "activeLink " : "link ")}>
                <li  onClick={() => setIsOpen(!isOpen)}>
                    login
                </li>
                </NavLink>
                <NavLink to='register'  className={({isActive}) => (isActive ? "activeLink  " : "link ")}>
                <li  onClick={() => setIsOpen(!isOpen)}>
                    sign up 
                </li>
                </NavLink>
                </div>
            <div className={`nav-toggle ${isOpen && "open"}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="bar"></div>
            </div>
            </ul>
            
        </nav>
        </div>
       
    )
}
export default Nav;