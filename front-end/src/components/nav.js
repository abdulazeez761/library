import { useState, useEffect } from "react";
import './nav.css'
import { NavLink, useNavigate, Navigate, useLocation } from 'react-router-dom'
import logoImage from '../assets/imgs/logo.png'
import UseLogOut from "../hooks/useLogOut";
import { BsSearch } from "react-icons/bs";
function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate()
    const logOut = UseLogOut();
    let userName = localStorage.getItem('username')
    const isLoggedIn = localStorage.getItem('loggedIn')
    const location = useLocation();
    const signOut = async () => {
        await logOut();
        navigate('/')
    }
    return (
        <div className="nav-container">
            <nav>
                <ul>
                    <div className="logo-containr">
                        <NavLink to='/' className='logo-image'>
                            <img src={logoImage} alt="logo image" />
                        </NavLink>
                    </div>

                    <div className="responsive-div" >
                    </div>
                    <div className={`nav-options ClassForResponsive ${isOpen && "open"}`}>
                        {/* <div class="searchBox">
                            <input class="searchInput" type="text" name="" placeholder="Search" />
                            <button class="searchButton">
                                <BsSearch />
                            </button>
                        </div> */}
                        <div className="nav-options-container">
                            <NavLink to='/' className={({ isActive }) => (isActive ? "activeLink" : "link")}>
                                <li onClick={() => setIsOpen(!isOpen)}>
                                    Home
                                </li>
                            </NavLink>
                            <NavLink to='about' className={({ isActive }) => (isActive ? "activeLink" : "link")}>
                                <li onClick={() => setIsOpen(!isOpen)}>
                                    About
                                </li>
                            </NavLink>
                            <NavLink to='add-books' className={({ isActive }) => (isActive ? "activeLink" : "link")}>
                                <li onClick={() => setIsOpen(!isOpen)}>
                                    Add Books
                                </li>
                            </NavLink>
                            <NavLink to={userName ? userName : 'noprofile'} className={({ isActive }) => (isActive ? "activeLink" : "link")}>
                                <li onClick={() => setIsOpen(!isOpen)}>
                                    profile
                                </li>
                            </NavLink>
                            {/* <NavLink to='direct' className={({ isActive }) => (isActive ? "activeLink" : "link")}>
                                <li onClick={() => setIsOpen(!isOpen)}>
                                    direct
                                </li>
                            </NavLink> */}
                        </div>
                        <div className="responsive-div responsive-div-two" >
                        </div>
                        <div className="nav-options-container">
                            <NavLink to='login' className={({ isActive }) => (isActive ? "activeLink " : "link ")}>
                                <li className={isLoggedIn ? 'notLogged' : 'logged'} onClick={() => setIsOpen(!isOpen)}>
                                    login
                                </li>
                            </NavLink>
                            <NavLink to='register' className={({ isActive }) => (isActive ? "activeLink  " : "link ")}>
                                <li className={isLoggedIn ? 'notLogged' : 'logged'} onClick={() => setIsOpen(!isOpen)}>
                                    sign up
                                </li>
                            </NavLink>
                            <NavLink to='/' onClick={() => setIsOpen(!isOpen)} className={isLoggedIn ? 'logged link' : 'notLogged link'}  >
                                <li onClick={signOut} >
                                    Sign Out
                                </li>
                            </NavLink>
                        </div>

                    </div>
                    <div className={`nav-toggle ${isOpen && "open"}`}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <div className="bar"></div>
                    </div>
                </ul>

            </nav>
        </div >

    )
}
export default Nav;