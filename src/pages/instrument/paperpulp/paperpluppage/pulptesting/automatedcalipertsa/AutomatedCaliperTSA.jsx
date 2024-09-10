import React from 'react'
import Layout from '../../../../../../component/layout/Layout'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AutomatedCaliperTSA = () => {
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
        '/img/instruments/AutomatedTensil.png',
        '/img/instruments/AutomatedTensil.png'
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
                    <h1>Automated Tensile Stiffness Alignment</h1>
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
                                <h3 className='pageheading'>Automated Tensile Stiffness Alignment</h3>
                                <p className='descriptionHead' style={{ textAlign: 'justify' }}>
                                    The Technidyne PROFILE/Plus TSA automatically measures the Tensile Stiffness Alignment using ULTRASONIC
                                    technology. Compact, all inclusive design means reduced investment costs, lower maintenance and support costs
                                    and the smaller Footprint  results in less space requirements. The specially engineered sensors and high precision
                                    measuring head results  in reduced maintenance costs and improved manpower efficiency along with the ability
                                    to introduce tighter process control limits to lower machine breaks, reduce customer complaints, and improve
                                    quality. Self aligning backing ensures reliable results to improve efficiency, reduce retests, and lower costs.
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

export default AutomatedCaliperTSA
