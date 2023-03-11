import React from 'react'
import bg from '../../assets/bg.jpg'
import group1 from '../../assets/group1.jpg'
import group2 from '../../assets/group2.jpg'
import shofiqulSir from '../../assets/shofiqulSir.jpg'

const Home = () => {
  return (
    <div style={{ backgroundColor: '#EEE' }} className='mt-2 pb-3'>
      <section>
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img src={bg} height='400px' width='100%' className="d-block " alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src={group1} height='400px' width='100%' className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={group2} height='400px' width='100%' className="d-block" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      <section>
        <div className='' >
          <div className=' d-flex  justify-content-center align-items-center container'>
            <div className="row w-100 mt-5 ">
              <div className="col-12 col-md-6 col-lg-6 ">
                <img style={{borderRadius:'6px'}} className='shadow-sm p-3 mb-3 bg-body rounded' src={shofiqulSir} height='500px' width='80%' alt="contact" />
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <h4 className='fw-bold align-middle'>ব্রাহ্মণবাড়িয়া জেলা ছাত্র কল্যান পরিষদ নিয়ে প্রধান উপদেষ্টা <span>মোহাম্মদ শফিকুল ইসলাম</span> স্যারের ভাবনা : </h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptates hic odit dolore accusantium dolorum ad error quod repellat aut, sunt dolorem sit corrupti officiis minus quas veniam quos eum.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home