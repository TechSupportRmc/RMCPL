import React from 'react'
import Layout from '../../../../../component/layout/Layout'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PunctureTester = () => {
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
        '/img/instruments/digital_puncture_tester.png',
        '/img/instruments/digital_puncture_tester.png'
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
                    <h1>Digital Puncture Tester</h1>
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
                                <h3 className='pageheading'>Digital Puncture Tester</h3>
                                <p className='descriptionHead' style={{ textAlign: 'justify' }}>
                                    To determine the absorbed energy or puncture resistance of corrugated and compact cardboard,
                                    especially those employed in the manufacture of packaging.
                                    Puncture resistance has become increasingly important, and many countries have included this
                                    indicator in the quality specifications of corrugated cardboard. The PT-48 Digital Puncture
                                    Tester measures the ability of corrugated cardboard to resist puncture, changing positional
                                    energy before and after perforation of the cardboard, and transforming the change in potential
                                    energy into kinetic energy to perforate and tear the cardboard.
                                    in the puncture test according to international standards, the use of a pyramidal puncture head
                                    causes the material to load in all spatial directions. During this process, combined tensile,
                                    compressive, bending, and shear forces are produced. The result obtained in this test is the
                                    energy absorbed in the perforation of the material. To do this, a dynamic pendulum dynamic
                                    drilling testing machine like the PT-48 is used.
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

export default PunctureTester
