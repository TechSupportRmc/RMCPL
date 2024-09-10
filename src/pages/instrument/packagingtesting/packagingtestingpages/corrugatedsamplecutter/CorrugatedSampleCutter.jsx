import React from 'react'
import Layout from '../../../../../component/layout/Layout'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CorrugatedSampleCutter = () => {

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
        '/img/instruments/corrugated_sample_tester.png',
        '/img/instruments/corrugated_sample_tester.png'
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
                    <h1>Corrugated Sample Cutter</h1>
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
                                <h3 className='pageheading'>Corrugated Sample Cutter</h3>
                                <p className='descriptionHead' style={{ textAlign: 'justify' }}>
                                    For precision cutting of corrugated cardboard samples for ECT compression testing on the Sample
                                    Crush Tester.
                                    The sample is cut by means of 2 parallel blades (with a single edge, to obtain samples without
                                    lateral deformations at the cut edges), obtaining rectangular specimens of the chosen width and
                                    up to a maximum of 15 mm thick. With transparent methacrylate screen to protect the operator in
                                    handling, avoiding accident risks.
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

export default CorrugatedSampleCutter
