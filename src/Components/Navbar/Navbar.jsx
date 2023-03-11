import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body shadow-sm p-1 bg-body rounded ">
                <div className="container-fluid">
                <NavLink className="navbar-brand" to="/"><img height={60} width={80} src={logo} alt='logo'/></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link  nav" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link nav" to="/program">Program</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link nav" to="/achievement">Achievement</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link nav" to="/member">Member</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link nav" to="/dashboard">Dashboard</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link nav" to="/contact">Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link login" to="/login">Login</NavLink>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
            
        </>
    )
}

export default Navbar