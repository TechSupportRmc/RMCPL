import React from 'react'
import Layout from '../../../../../../component/layout/Layout';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const AutomatedGram = () => {
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
        '/img/instruments/Automated-gammage.png',
        '/img/instruments/Automated-gammage.png'
    ];

    return (
        <Layout>
            <div className="bread">
                <ul className="collapsed">
                    <li><a href="/">Home</a></li>
                    <li><a href="/paperpulp">Paper</a></li>
                </ul>
            </div>
            <div className="container">
                <div className="section-title text-center" style={{ marginBottom: '2rem' }}>
                    <h1>Automated Grammage</h1>
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
                                <h3 className='pageheading'>Automated Grammage</h3>
                                <p className='descriptionHead' style={{ textAlign: 'justify' }}>
                                    The Technidyne PROFILE/Plus Grammage determines the Grammage of paper and board according to the
                                    gravimetric method and meets or exceeds these industry standards: TAPPI T410, SCAN P6, DIN 53104, ISO 536.
                                    Precisely Engineered Punch and Die Assembly for results that ensure tighter control of process & on-line gauging
                                    thereby reducing operational costs. High Precision Sample Scale promotes accurate results to help Reduce fiber
                                    costs, and customer complaints Automatic Sample Removal for improved manpower efficiency, to lower the
                                    overall cost of testing. Automatic  Zero Point for increased precision and repeatability to reduce retests and save
                                    money. Isolated Measurement Chamber  reduces variability and lowers costs by improving accuracy.
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

export default AutomatedGram
