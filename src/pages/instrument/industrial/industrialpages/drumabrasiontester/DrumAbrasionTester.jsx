import React from 'react'
import Layout from '../../../../../component/layout/Layout'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const DrumAbrasionTester = () => {
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
        '/img/instruments/DrumAbrasionTester.jpg',
        '/img/instruments/DrumAbrasionTester.jpg'
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
                    <h1>Drum Abrasion Tester</h1>
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
                                <h3 className='pageheading'>Drum Abrasion Tester</h3>
                                <p className='descriptionHead' style={{ textAlign: 'justify' }}>
                                    Laboratory equipment to determine the wear resistance of rubber, rubber, plastic, leather samples …
                                    The sample to be tested has a diameter of 16mm, and a rub against an abrasive sheet that covers the roll in
                                    applied under a normalized load. The roll that carries the sheet turns at a speed of 40 turn per minute and the
                                    sample is in continuous contact with the abrasive that is equal to 40 lineal meters. After these meters the sample
                                    support is automatically separated from the abrasive sheet. The weight of this sample support applies a pressure
                                    over the sample of 0,5kg. A special balance weight can be located on the sample support to increase the pressure
                                    to  1kg when very resistant materials are to be tested. The amount of sample that has been worn is determined by
                                    calculating the weight difference of the sample before and after the test.
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

export default DrumAbrasionTester
