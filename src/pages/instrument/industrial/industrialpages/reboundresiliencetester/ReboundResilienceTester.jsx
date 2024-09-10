import React from 'react'
import Layout from '../../../../../component/layout/Layout'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ReboundResilienceTester = () => {
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
        '/img/instruments/ReboundResilienceTesters.png',
        '/img/instruments/ReboundResilienceTesters.png'
    ];

    return (
        <Layout>
            <div className="bread">
                <ul className="collapsed">
                    <li><a href="/">Home</a></li>
                    <li><a href="/industrial">Industrial</a></li>
                </ul>
            </div>
            <div className="container">
                <div className="section-title text-center" style={{ marginBottom: '2rem' }}>
                    <h1>Rebound Resilience Testers</h1>
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
                                <h3 className='pageheading'>Rebound Resilience Testers</h3>
                                <p className='descriptionHead' style={{ textAlign: 'justify' }}>
                                    Laboratory instrument to perform rebound tests on soft rubber specimens and determine the rebound resilience
                                    of rubber the hardness of which lies between 30 IRHD and 85 IRHD.
                                    The test apparatus allows determining the percentage of rebound of the hammer measured on its height of fall.
                                    The test piece used is circular, 44.6 mm in diameter and 6 mm thick. Otherwise, a piece of round or square
                                    rubber, of approximate dimensions, may be used.
                                    Applicable Standards: DIN 53512 - ISO 4662
                                </p>
                            </div>
                            {/* <div className="portfolio-description"></div> */}
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default ReboundResilienceTester
