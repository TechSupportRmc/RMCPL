import React from 'react'
import Layout from '../../../../../component/layout/Layout'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PneumaticManualSampleCutter = () => {

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
        '/img/instruments/Pneumaticandmanual.png',
        '/img/instruments/Pneumaticandmanual.png'
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
                    <h1>Pneumatic and Manual Sample Cutter</h1>
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
                                <h3 className='pageheading'>Pneumatic and Manual Sample Cutter</h3>
                                <p className='descriptionHead' style={{ textAlign: 'justify' }}>
                                    Cut-samples of pneumatic operation, for the obtaining by cutting of precise samples (Rubber –
                                    Leather – Plastics ..) The preparation of the elastomer and polymer samples and specimens is of great importance
                                    in order to later have, in the Tensile, Tear, Compression… tests, great precision in the results of the data obtained,
                                    as well as good traceability. The maximum size that can be cut is 200 x 80 mm. The equipment can be supplied
                                    with a wide range of dies of shapes and dimensions according to requirements. It is also possible to supply
                                    device for approaching the edge of the cutting knife of the die to the sample by means of a screw system. Said
                                    configuration must be carried out on request, since a different frame than the standard is necessary.
                                    It is also possible to supply a sample extraction device in addition to the one with the ejector die itself.
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

export default PneumaticManualSampleCutter
