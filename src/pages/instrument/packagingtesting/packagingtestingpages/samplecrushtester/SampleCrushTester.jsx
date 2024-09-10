import React from 'react'
import Layout from '../../../../../component/layout/Layout'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SampleCrushTester = () => {
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
        '/img/instruments/samples_crush_tester.png',
        '/img/instruments/samples_crush_tester.png'
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
                    <h1>Samples Crush Tester</h1>
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
                                <h3 className='pageheading'>Samples Crush Tester</h3>
                                <p className='descriptionHead' style={{ textAlign: 'justify' }}>
                                    To perform compression strength tests on standardized samples of paper (liner & medium) and corrugated cardboard such as CMT - RCT - CCT - ECT - FCT – PAT.
                                    New generation bench top microprocessor-controlled Compression Tester. The appropriate sample holder (ECT - CCT - PAT ...) with the chosen specimen is placed in the center of the lower plate of the Crush Tester. The bottom plate is mobile, and the compression force is captured by a precision load cell, coupled to the top plate.
                                    If series of tests are carried out with the same type of sample, statistical results, mean value and standard deviation are obtained. During the tests, the Crush Tester work at very low speed, but when finished and reset, the return of the moving plate to its initial test position is at maximum speed (100 mm / min).
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

export default SampleCrushTester
