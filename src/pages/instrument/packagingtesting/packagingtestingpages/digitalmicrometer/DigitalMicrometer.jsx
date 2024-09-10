import React from 'react'
import Layout from '../../../../../component/layout/Layout'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const DigitalMicrometer = () => {
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
        '/img/instruments/digital_micrometer_m5.png',
        '/img/instruments/digital_micrometer_m5.png'
    ];

  return (
    <Layout>
      <div className="bread">
                <ul className="collapsed">
                    <li><a href="/">Home</a></li>
                    <li><a href="/packaingtesting">Packaging Testing</a></li>
                </ul>
            </div>
            <div className="container">
                <div className="section-title text-center" style={{ marginBottom: '2rem' }}>
                    <h1>Digital Micrometer M5</h1>
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
                                <h3 className='pageheading'>Digital Micrometer M5</h3>
                                <p className='descriptionHead' style={{ textAlign: 'justify' }}>
                                The device is manually operated by a rotating crank, designed to accurately measure the thickness of various materials such as paper, tissue, compact cardboard, and corrugated cardboard. It features manual actuation via an ergonomic rotary lever and includes a digital readout display with a reset to zero function. The design is robust and user-friendly, with a probe area of either 2 cm² or 10 cm² depending on the model. The reading resolution is either ±0.01 mm or ±0.001 mm, also depending on the model. The measuring range spans from 0 to 10 mm for paper and up to 15 mm for corrugated cardboard. The device applies pressure to the sample according to the corresponding standard and is compatible with the T-LAB Laboratory Management System. Additionally, it is CE marked, ensuring compliance with European safety standards.
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

export default DigitalMicrometer
