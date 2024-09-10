import React from 'react'
import Layout from '../../../../../component/layout/Layout'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CircularCutter = () => {
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
        '/img/instruments/circular_cutter.png',
        '/img/instruments/circular_cutter.png'
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
                    <h1>Circular Cutter</h1>
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
                                <h3 className='pageheading'>Circular Cutter</h3>
                                <p className='descriptionHead' style={{ textAlign: 'justify' }}>
                                    Manually operated by rotary knob to cut samples accurately from Paper Corrugated Cardboard (maximum thickness 5 mm), Aluminum Foil, Films for grammage determination.
                                    The cutting is done by placing the samples on a porous rubber plate included in the standard supply and applying the sample cutter on top of the paper - cardboard board…, to be cut, its knob is rotated by pressing it downwards at the same time. One turn of the knob is enough so that the final sample is cut impeccably. The change of the blades is carried out by the side neck of the device. The lowering movement of the blades is always blocked by a device located next to the neckline. Pulling the small knurled cylinder out and giving it a quarter turn, the movement is free for cutting.
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

export default CircularCutter
