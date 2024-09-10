import React from 'react'
import Layout from '../../../../../../component/layout/Layout'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FiberPotentialAnalyser = () => {
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
        '/img/instruments/fpa3-f1333aae.webp',
        '/img/instruments/fpa3-f1333aae.webp'
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
                    <h1>Fiber Potential Analyser</h1>
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
                                <h3 className='pageheading'>Fiber Potential Analyser</h3>
                                <p className='descriptionHead' style={{ textAlign: 'justify' }}>
                                    The Fiber Potential Analyzer is an advanced instrument
                                    designed for the precise measurement and analysis of fiber properties in various
                                    materials, particularly in the field of paper and pulp industries. This cutting-edge
                                    device employs innovative technology to assess the quality and characteristics of
                                    fibers, providing essential data on parameters such as length, width, and
                                    coarseness. By offering a comprehensive understanding of fiber attributes, the Fiber
                                    Potential Analyzer plays a crucial role in optimizing production processes,
                                    enhancing product quality, and ultimately contributing to the efficiency and
                                    competitiveness of the paper and pulp sector.
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

export default FiberPotentialAnalyser
