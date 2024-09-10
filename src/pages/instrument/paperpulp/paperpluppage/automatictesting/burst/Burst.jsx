import React from 'react'
import Layout from '../../../../../../component/layout/Layout'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Burst = () => {
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
        '/img/instruments/profit-gloss.png',
        '/img/instruments/profit-gloss.png'
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
                <div className="section-title text-center">
                    <h1>Automated Burst</h1>
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
                                <h3 className='pageheading'>Automated Burst</h3>
                                <p className='descriptionHead' style={{ textAlign: 'justify' }}>
                                    The Technidyne PROFILE/Plus Burst automatically measures top or bottom side Burst.
                                    Bolt on diaphragm mounting ensures the proper installation of this critical element, thereby keeping service
                                    costs low. Silicon oil prevents measurement system gumming, providing greater instrument uptime and
                                    reduced service costs. Adjusted Burst helps to ensure that data will always be reliable, thereby avoiding costly
                                    retests and improving lab efficiency. Improved diaphragm design simplifies routine maintenance and to avoid
                                    costly retests and helps to optimize test efficiency. Selectable clamping pressure ensures stable testing
                                    conditions, thereby reducing variability and increasing testing efficiency.</p>
                            </div>
                            <div className="portfolio-description"></div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Burst
