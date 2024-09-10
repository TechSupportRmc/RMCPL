import React from 'react'
import Layout from '../../../../../component/layout/Layout'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ElectroMechanicalMaterial = () => {
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
        '/img/instruments/ElectromechanicalMaterial.png',
        '/img/instruments/ElectromechanicalMaterial.png'
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
                    <h1>Electromechanical Material Testing Machine</h1>
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
                                <h3 className='pageheading'>Electromechanical Material Testing Machine</h3>
                                <p className='descriptionHead' style={{ textAlign: 'justify' }}>
                                    A universal testing machine is a machine with a testing framework; its function is to check the resistance of
                                    various types of materials by subjecting them to tensile, compression or bending tests to measure their
                                    properties … in the Quality Control Departments and Research and Development on all types of materials and
                                    standardized specimens of materials such as Very Light Metals, Rigid and Soft Plastics, Paper, Rubbers, Rubber,
                                    Cables, Latex, Adhesives, Plastic Film, Wires, Ropes, Textiles, Threads …The test is achieved through the use of
                                    grips, tools and test devices where the samples or test pieces of the material to be tested are placed, testing
                                    machines driven by mechanical spindles. This machine is widely used in the characterization of new light materials
                                    up to a capacity of 1 kN to 1000 kN range meets ASTM, EN , ISO, DIN, FINAT,UNE, FEFCO standards.
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

export default ElectroMechanicalMaterial
