import React from 'react'
import Layout from '../../../../../component/layout/Layout'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ZetaPotentialAnalyser = () => {
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
        '/img/instruments/ZetaPotentialAnalyser.png',
        '/img/instruments/ZetaPotentialAnalyser.png'
    ];

    return (
        <Layout>
            <div className="bread">
                <ul className="collapsed">
                    <li><a href="/">Home</a></li>
                    <li><a href="/rd">R & D</a></li>
                </ul>
            </div>
            <div className="container">
                <div className="section-title text-center" style={{ marginBottom: '2rem' }}>
                    <h1>Zeta Potential Analyser</h1>
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
                                <h3 className='pageheading'>Zeta Potential Analyser</h3>
                                <p className='descriptionHead' style={{ textAlign: 'justify' }}>
                                    The zeta probe is the most accurate zeta potential analyser. Sample can be measured without dilution up
                                    to 60% of Volume concentration. Even the direct measurements of Zeta potential of pastes, gels, cements, and
                                    other difficult material  is possible with the zeta probe. Traditional characterization techniques required sample
                                    dilution and sample preparation which are both time consuming and error-prone, but this patented multi –
                                    frequency electro acoustic technology eliminated these problems. Also automatic titration offer unattended
                                    operation as well as optimization of dispersant or flocculants. The zeta probe is embedded with highly
                                    sophisticated software for automatic correction of practical size and double layer distortion. The rugged design
                                    makes the Zeta Probe ideal for use in research and plant optimization.
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

export default ZetaPotentialAnalyser
