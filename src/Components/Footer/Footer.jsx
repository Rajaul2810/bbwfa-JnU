import React from 'react'
import './Footer.css'
import { FiFacebook, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='bg-dark'>
            <div className='d-flex justify-content-center pt-3'>
                <div className="row w-75">
                    <div className="col-md-4 ">
                        <div className='text-secondary text-center'>
                            <h4>Brahmanbaria Welfare Association</h4>
                            <address>
                                Jagannath University
                                <p> Dhaka-1100</p>
                            </address>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center">
                        <div className="text-secondary">
                            <h4 >Help</h4>
                            <p><NavLink className='foot ' to="#">Contact</NavLink> </p>
                            <p><NavLink className='foot' to="#">Program</NavLink> </p>
                            <p><NavLink className='foot' to="#">Achievement</NavLink> </p>
                            <p><NavLink className='foot' to="#">Credit</NavLink> </p>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center">
                        <div>
                            <h4 className='text-secondary'>Social Link</h4>
                            <div className='d-flex'>
                                <div className='icon'> <Link to="https://www.facebook.com/groups/1620953181521037/?ref=share&mibextid=NSMWBT" target={'_blank'} > <FiFacebook /></Link></div>
                                <div className='icon'><Link to="#" ><FiTwitter /> </Link></div>
                                <div className='icon'> <Link to="#" ><FiLinkedin /> </Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className='text-secondary text-center p-2'>&copy;Himel, {new Date().getFullYear()}</p>
        </footer>
    )
}

export default Footer