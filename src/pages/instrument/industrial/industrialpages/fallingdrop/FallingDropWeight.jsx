import React from 'react'
import Layout from '../../../../../component/layout/Layout'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FallingDropWeight = () => {

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
        '/img/instruments/Fallingdrop.png',
        '/img/instruments/Fallingdrop.png'
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
                    <h1>Falling Drop Weight Impact Tester</h1>
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
                                <h3 className='pageheading'>Falling Drop Weight Impact Tester</h3>
                                <p className='descriptionHead' style={{ textAlign: 'justify' }}>
                                    Equipment designed for the determination of the resistance to impact by free fall of an impact hammer from
                                    different heights (up to 1m) in samples of plastic pipes and systems for conducting electrical and fibre optic
                                    cables. It is for Impact tests on plastic pipes, plastic pipes and electrical and optical cable conduction systems.
                                    The standard supply does not include strikers or sample holders, a range available at your choice according to the
                                    diameters of the plastic pipes to be tested. APPLICABLE STANDARDS DIN BS UNE-EN 61386-1, DIN BS UNE-EN
                                    61386-24, DIN BS UNE EN 60794-1-21, IEC 60794-1-21, IEC 61386-1, IEC 61386-24
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

export default FallingDropWeight
