import React from 'react'
import Layout from '../../../../../component/layout/Layout'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const GelBloomTester = () => {

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
        '/img/instruments/BloomTester.png',
        '/img/instruments/BloomTester.png'
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
                    <h1>Resistance GEL “BLOOM” Tester </h1>
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
                                <h3 className='pageheading'>Resistance GEL “BLOOM” Tester </h3>
                                <p className='descriptionHead' style={{ textAlign: 'justify' }}>
                                    This application is used for  Pectin’s, Gelatine, Agar, Gels for food, medicine, cosmetics, pharmaceutical sector.
                                    The force of the gel is evaluated as the maximum force or force to penetrate to a chosen depth smaller. Standard
                                    probes, such as that required for gelatine tests (according to the ISO Standard) are also used for the evaluation of
                                    the strength or breakage characteristics Bloom of gels, where the penetration force of 4 mm is taken as its Bloom
                                    value. If it were necessary to measure the breaking force, the gel fragility (elasticity), this test (for the
                                    determination of the Bloom force) the test can be configured by means of the Metro TEST Software to continue
                                    the penetration after 4 mm to 15 mm. This test KIT is used incorporated into a Texturometer to test Bloom
                                    Gel Strength and Gel Strength according to the BS 757, ISO 9665 and GMIA methods.
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

export default GelBloomTester
