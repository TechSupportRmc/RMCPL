import React from 'react'
import Layout from '../../../../../../component/layout/Layout'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const WetStetech = () => {
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
        '/img/instruments/Wet-Stetch.png',
        '/img/instruments/Wet-Stetch.png'
    ];

    return (
        <Layout>
            <div className="bread">
                <ul className="collapsed">
                    <li><a href="/">Home</a></li>
                    <li><a href="/PPwetendQC">Wet End QC</a></li>
                </ul>
            </div>
            <div className="container">
                <div className="section-title text-center" style={{ marginBottom: '2rem' }}>
                    <h1>Wet Stretch Dynamics Analyzerr</h1>
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
                                <h3 className='pageheading'>Wet Stretch Dynamics Analyzer</h3>
                                <p className='descriptionHead' style={{ textAlign: 'justify' }}>
                                    As machine speed in paper coating and converting operation increases, paper are stretched more than Before.
                                    In the printing process overstretching of the paper may result in misregister problems. Because f this, the paper
                                    quality has to be assessed  prior to upgrading and converting. However, Traditional static test methods such as
                                    wet tensile stress fail to satisfactorily describe the converting 114behavior. What are needed for quality are
                                    more detailed test method which give close-to-reality results. These problems can be minimized by WSD
                                    Analyzer which is used to measure the wet stretch dynamic of the paper. It reveals the behaviour of paper
                                    material during  orienting and impregnating processes. The result provide the information about the
                                    composition of paper or liquids such as inks or impregnating resins, so that industries can work on optimization.
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

export default WetStetech
