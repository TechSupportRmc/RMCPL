import React from 'react'
import Layout from '../../../../../../component/layout/Layout'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AutomatedCaliperPp = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000
  };

  const images = [
    '/img/instruments/AutomatedPPS.png',
    '/img/instruments/AutomatedPPS.png'
  ];

  return (
    <Layout>
      <div className="bread">
        <ul className="collapsed">
          <li><a href="/">Home</a></li>
          <li><a href="/paperpulp">Paper</a></li>
        </ul>
      </div>
      <div className="container">
        <div className="section-title text-center" style={{ marginBottom: '2rem' }}>
          <h1>Automated Caliper PPS</h1>
        </div>
      </div>
      <section id="portfolio-details" className="portfolio-details" style={{ backgroundColor: 'white', marginBottom: '12rem' }}>
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-8">
              <div className="portfolio-details-slider swiper">
                <Slider {...settings}>
                  {images.map((src, index) => (
                    <div className="swiper-slide" key={index}>
                      <div className="img" style={{ alignItems: 'center' }}>
                        <img src={src} alt="" className="responsive" />
                      </div>
                    </div>
                  ))}
                </Slider>
                <div className="swiper-pagination"></div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="portfolio-info" style={{ backgroundColor: 'white' }}>
                <h3 className='pageheading'>Automated Caliper PSS</h3>
                <p className='descriptionHead' style={{ textAlign: 'justify' }}>
                  The Technidyne PROFILE/Plus PPS automatically measures the roughness of paper and board according to the
                  Parker Print Surf method and meets or exceeds these industry standards: TAPPI T 555, ISO 8791-4, BS 6563,
                  Paptac D.31P.Superior measurement heads reduce the measuring head service frequency, thus lowering service
                  costs. Unique  calibration technique simplifies the operation of the instrument and saves time and money. O-ring
                  seal eliminates the need for petroleum jelly thereby improving instrument uptime and availability. Top-side and
                  /or Bottom-side measurement means fewer man-hours are required to complete testing and this reduces costs.
                  Precise measurement tolerances ensure that the data is always accurate and reliable, thus reducing costly
                  rechecks. A choice of backings and measurement pressures means that the same instrument can cover a wide
                  range of applications, which lowers overall testing costs.
                </p>
              </div>
              <div className="portfolio-description"></div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default AutomatedCaliperPp
