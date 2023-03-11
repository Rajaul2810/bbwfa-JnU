import React from 'react'
import './Member.css'
import himel from '../../assets/himel.jpg'

const Member = () => {
    return (
        <div style={{ background: '#EEE' }}>
            <div>
                <div className="row m-0 pt-5 pb-5">
                    <div className="col-sm-12 col-md-6 col-lg-4" >
                        <div className=" shadow-sm p-2 mb-3 bg-body rounded member" style={{ maxWidth: '100%' }}>
                            < div >
                                <div className='d-flex justify-content-around align-items-center'>
                                    <div>
                                        <img src={himel} className="img-fluid shadow bg-body hira" alt="..." />
                                    </div>
                                    <div>
                                        <h6>MD.Mustafizur Rahman Himel</h6>
                                        <p className='text-secondary'>Student</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4">
                       
                            <div className=" shadow-sm p-2 mb-3 bg-body rounded member2" style={{ width: '100%' }}>
                                < div >
                                    <div className='d-flex justify-content-around align-items-center'>
                                        <div>
                                            <img src={himel} className="img-fluid shadow bg-body hira" alt="..." />
                                        </div>
                                        <div>
                                            <h6>MD.Mustafizur Rahman Himel</h6>
                                            <p className='text-secondary'>Student</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                       
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4">
                        
                            <div className=" shadow-sm p-2 mb-3 bg-body rounded member3" style={{ width: '100%' }}>
                                < div >
                                    <div className='d-flex justify-content-around align-items-center'>
                                        <div>
                                            <img src={himel}  className="img-fluid shadow bg-body  hira" alt="..." />
                                        </div>
                                        <div>
                                            <h6>MD.Mustafizur Rahman Himel</h6>
                                            <p className='text-secondary'>Student</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Member