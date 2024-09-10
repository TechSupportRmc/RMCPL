import React from 'react'
import Layout from '../../../../../component/layout/Layout'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ArtPhotonics = () => {
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
        '/img/instruments/art-photonic.jpg',
        '/img/instruments/art-photonic.jpg'
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
                    <h1>Art Photonics Optical Fiber Probes</h1>
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
                                <h3 className='pageheading'>Art Photonics Optical Fiber Probes</h3>
                                <p className='descriptionHead' style={{ textAlign: 'justify' }}>
                                    FlexiSpec® product line from art photonics GmbH  is a cluster of innovative Fiber Optic Probes and Fiber Probe Couplers designed for in-line analytical analysis in broad spectral range – from UV to Mid-IR (550cmˉ¹ to 55550cmˉ¹ ).
                                    FlexiSpec® family of Immersion Fiber Probes includes ATR, Transmission, Transflection, Fluorescent and Diffuse Reflection probes - all compatible with any FT-MIR, FT-NIR or dispersion spectrometer, process-photometer, IR-LED or QCL spectral sensor to use in-line for PAT-applications.
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

export default ArtPhotonics
