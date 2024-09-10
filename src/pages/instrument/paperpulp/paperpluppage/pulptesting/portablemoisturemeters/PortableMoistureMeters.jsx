import React from 'react'
import Layout from '../../../../../../component/layout/Layout'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PortableMoistureMeters = () => {
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
        '/img/instruments/portableMoisture.png',
        '/img/instruments/portableMoisture.png'
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
          <h1>Portable Moisture Meters</h1>
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
                <h3 className='pageheading'>Portable Moisture Meters</h3>
                <p className='descriptionHead' style={{ textAlign: 'justify' }}>
                This is the most cost effective measuring principle to measure the moisture without damaging the material. The 
                meter are working in accordance with the principle of an opened plate capacitor. The capacity of the capacitor 
                depends on the material-(dielectric)-constant (DC) of the material in between the plates. The water content of a 
                wet material can therefore be determined by determining the dielectric constant of this material. The 
                measurements are influenced  through differences in the material densities
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

export default PortableMoistureMeters
