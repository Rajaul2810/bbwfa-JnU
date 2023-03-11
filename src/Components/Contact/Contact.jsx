import React from 'react'
import contact from '../../assets/contact.png'
import { FiFacebook, FiMail, FiMap, FiMapPin, FiMessageCircle, FiPhone } from 'react-icons/fi';

const Contact = () => {
  return (
    <div className='' style={{backgroundColor:'#EEE'}}>
        <div className=' d-flex  justify-content-center align-items-center container'>
            <div className="row w-100 ">
                <div className="col-12 col-md-6 col-lg-6 mt-5">
                    <h1 className='fw-bold align-middle'><span>Contact</span> With Us</h1>
                    <p>You can use any of the following channels to contact us directly.</p>
                    <p className='mt-5'><FiPhone size={20}/> <span>+8801621954211</span></p>
                    <p><FiMessageCircle size={20}/> <span>+8801621954211</span></p>
                    <p> <FiMail size={20}/> <a href='mailto:mdmustafizurrahmanhimel1@gmail.com' className='text-decoration-none'> <span>mdmustafizurrahmanhimel1@gmail.com</span> </a></p>
                    <p> <FiFacebook size={20}/> <a href='https://www.facebook.com/groups/1620953181521037/?ref=share&mibextid=NSMWBT' className='text-decoration-none '> <span>facebook.com</span> </a></p>
                    <p className='mb-5'> <FiMapPin size={20}/> Jagannath University, Dhaka-1100 </p>
                    
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                    <img src={contact} alt="contact" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact