import React from 'react'
import Layout from '../../../../../component/layout/Layout'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CO2Tester = () => {
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
        '/img/instruments/Coore-co2-brix.jpg',
        '/img/instruments/Coore-co2-brix.jpg'
    ];


    return (
        <Layout>
            <div className="bread">
                <ul className="collapsed">
                    <li><a href="/">Home</a></li>
                    <li><a href="/wastewater">Water Waste</a></li>
                </ul>
            </div>
            <div className="container">
                <div className="section-title text-center" style={{ marginBottom: '2rem' }}>
                    <h1>CooRe Combined CO2 Tester</h1>
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
                                <h3 className='pageheading'>CooRe Combined CO2 Tester</h3>
                                <p className='descriptionHead' style={{ textAlign: 'justify' }}>
                                    Production and converting processes which rely on interactions between liquids and materials such as paper, paperboard, textiles etc. are highly complex in nature. For the purpose of quality control or studies into material properties, current methods utilize these interactions to derive data on specific paper and liquid parameters and ultimately on the manufacturing or converting processes themselves. However, these methods normally give only simple numerical values without allowing for the dynamics of liquid penetration.
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

export default CO2Tester
