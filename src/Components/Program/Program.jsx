import React from 'react'
import program from '../../assets/bg.jpg'
import ad2021 from '../../assets/ad2021.jpg'
import ad2022 from '../../assets/ad2022.jpg'

const Program = () => {
    return (
        <div style={{ backgroundColor: '#EEE' }}>
            <div>
            <h1 className='text-center pt-4 pb-3 fw-bold'>আমাদের কার্যক্রম</h1>
                <div className="row m-2  pb-5">
                    <div className="col-sm-12 col-md-6 col-lg-4 ">
                        <div className="card shadow-sm p-3 mb-3 bg-body rounded" style={{ width: '100%', border: 'none' }}>
                            <img src={program} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">বার্ষিক বনভোজন ও নবীন বরন অনুষ্ঠান ২০২৩।</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 ">
                        <div className="card shadow-sm p-3 mb-3 bg-body rounded" style={{ width: '100%', border: 'none' }}>
                            <img src={ad2021} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">২০২০-২১ শিক্ষাবর্ষের ভর্তিচ্ছু শিক্ষার্থীদের পাশে ব্রাহ্মণবাড়িয়া জেলা ছাত্র কল্যান পরিষদ |</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 ">
                        <div className="card shadow-sm p-3 mb-3 bg-body rounded" style={{ width: '100%', border: 'none' }}>
                            <img src={ad2022} className="card-img-top img-fluid" alt="..." />
                            <div className="card-body">
                                <p className="card-text">২০২১-২২ শিক্ষাবর্ষের ভর্তিচ্ছু শিক্ষার্থীদের সার্বিক সহযোগিতায় ব্রাহ্মণবাড়িয়া জেলা ছাত্র কল্যান পরিষদ |</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Program