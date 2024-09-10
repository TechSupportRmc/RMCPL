import React from 'react'
import Layout from '../../../../../component/layout/Layout'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const NotchingMachine = () => {

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
        '/img/instruments/NotchingMachine.png',
        '/img/instruments/NotchingMachine.png'
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
                    <h1>Notching Machine</h1>
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
                                <h3 className='pageheading'>Notching Machine</h3>
                                <p className='descriptionHead' style={{ textAlign: 'justify' }}>
                                    Equipment designed to perform standard notches on samples, which are subsequently subjected to mono-axial
                                    impact resistance tests, according to the CHARPY and IZOD procedures.it is suitable for concentrating stress,
                                    minimizing plastic deformation, and directing fracture to the part of the specimen behind the notch. The dispersion
                                    in energy at break is thus reduced. However, due to differences in the elastic and viscoelastic properties of plastics,
                                    the response to a given notch varies between different materials. It is possible to simultaneously notch up to 3
                                    grouped specimens, naturally depending on the plastic material and its characteristics
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

export default NotchingMachine
