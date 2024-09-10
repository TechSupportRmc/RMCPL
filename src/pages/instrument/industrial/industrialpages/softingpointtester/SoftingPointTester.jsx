import React from 'react'
import Layout from '../../../../../component/layout/Layout'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SoftingPointTester = () => {
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
        '/img/instruments/SofteningPointTester.png',
        '/img/instruments/SofteningPointTester.png'
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
                    <h1>Softening Point Tester for Plastic Material</h1>
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
                                <h3 className='pageheading'>Softening Point Tester for Plastic Material</h3>
                                <p className='descriptionHead' style={{ textAlign: 'justify' }}>
                                    Laboratory equipment for the determination of the VICAT Softening Point and the “H.D.T.”Bending Temperature
                                    of plastic materials.The VICAT softening point is the temperature at which a flat needle of 1 mm 2 of section
                                    penetrates a sample at a depth of 1 mm. The Vicat softening temperature is standardized in ISO 306 and ASTM D
                                    1525. Another magnitude to be measured is the temperature of deformability by heat at which a prismatic
                                    specimen is subjected to bending and heated with a certain temperature increase. Determination of VICAT
                                    Softening Point and HDT Heat Distorsion Temperature under load and temperatures in plastic materials used in
                                    civil engineering, automobile, aeronautics, plastic pipes ... in relation to the behaviour against thermal properties.
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

export default SoftingPointTester
