import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
import { Autoplay, Pagination } from 'swiper/modules';

const Home = () => {
  return (
    <>
    {/* Banner */}
    <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://res.cloudinary.com/diyqncua4/image/upload/v1728324776/abrtgewws1sxs2kklafy.jpg" className="img-fluid" alt="Banner 1"/></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/diyqncua4/image/upload/v1728325085/yvoakfkxiuneil075dbl.jpg" className="img-fluid" alt="Banner 2"/></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/diyqncua4/image/upload/v1728325126/ztf1bybfzelejs1zme2u.jpg" className="img-fluid" alt="Banner 3"/></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/diyqncua4/image/upload/v1728325136/xgtkquf48cmms2ohw5b9.jpg" className="img-fluid" alt="Banner 4"/></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/diyqncua4/image/upload/v1728325226/m0qzxieghue9wcmz7zar.jpg" className="img-fluid" alt="Banner 5"/></SwiperSlide>
      </Swiper>

    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <img
            src="https://openui.fly.dev/openui/300x400.svg?text=Bookshelf+Image"
            alt="Bookshelf"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h2 className="font-weight-bold">
            Our <span className="text-warning">libraries</span>
          </h2>
          <p>
            Your reading list is a good place to start, but you will be expected to read more widely too. Use Sevi to search for information on your topic, and to find books, journal articles and other materials in the Library.
          </p>
          <button className="btn btn-primary">Learn More</button>
        </div>
      </div>
    </div>

    <section className="resource-section text-center">
      <div className="container">
        <h2 className="mb-5">Our Resources</h2>
        <div className="row">
          <div className="col-md-3 mb-4">
            <div className="card resource-card p-4 border-0 shadow">
              <div className="icon-circle mx-auto">
                <img src="public/loupe.png" alt="magnifying glass icon" style={{ width: "50px" }}/>
              </div>
              <h5 className="card-title">Researchers</h5>
              <p className="card-text">Register online<br/>Discover tools and manage alerts<br/>Learn about how to access</p>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="card resource-card p-4 border-0 shadow">
              <div className="icon-circle mx-auto">
                <img src="public/folders.png" alt="file icon" style={{ width: "50px" }}/>
              </div>
              <h5 className="card-title">Librarian</h5>
              <p className="card-text">Manage your account<br/>View products and solutions<br/>Find resources and support</p>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="card resource-card p-4 border-0 shadow">
              <div className="icon-circle mx-auto">
                <img src="public/communication.png" alt="communication icon" style={{ width: "50px" }}/>
              </div>
              <h5 className="card-title">Societies</h5>
              <p className="card-text">Publish with Wiley<br/>Explore our resource library<br/>Learn about topics and trends</p>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="card resource-card p-4 border-0 shadow">
              <div className="icon-circle mx-auto">
                <img src="public/writing.png" alt="writing icon" style={{ width: "50px" }}/>
              </div>
              <h5 className="card-title">Authors</h5>
              <p className="card-text">Submit a paper<br/>Track your article<br/>Learn about Open Access</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Home
