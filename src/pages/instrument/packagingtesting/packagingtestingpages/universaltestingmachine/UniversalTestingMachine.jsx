import React from 'react'
import Layout from '../../../../../component/layout/Layout'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const UniversalTestingMachine = () => {
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
        '/img/instruments/universal_testing_machine.png',
        '/img/instruments/universal_testing_machine.png'
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
                    <h1>Universal Testing Machine</h1>
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
                                <h3 className='pageheading'>Universal Testing Machine</h3>
                                <p className='descriptionHead' style={{ textAlign: 'justify' }}>
                                    Electromechanical one column testing framework designed to perform tensile, compression, bending, shearing, peeling..., tests of very light materials up to 1 kN
                                    Universal Materials Testing Machines with one column testing framework designed to perform Tensile - Compression - Flexion - Shear - Adhesion - Tear tests..., on samples of materials such as Paper, Tissue Paper, Non-woven...
                                    The MTE-1 UNIVERSAL MATERIALS TESTING MACHINE is made up of a robust frame in which the test frame is located. The high stiffness frame incorporates a crosshead guidance system to prevent side loading of the sample under test. The test frame is made up of a low friction coefficient drive and re-circulation ball screw with protectors and a rectified and chromed steel guide column.
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

export default UniversalTestingMachine
