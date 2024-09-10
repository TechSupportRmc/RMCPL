import React from 'react'
import Layout from '../../../../../../component/layout/Layout'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Profitgloss = () => {
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
        '/img/instruments/profit-gloss.png',
        '/img/instruments/profit-gloss.png'
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
                <div className="section-title text-center">
                    <h1>Profit/Plus Gloss</h1>
                </div>
            </div>
            <section id="portfolio-details" className="portfolio-details" style={{ backgroundColor: 'white', marginBottom: '12rem'  }}>
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
                                <h3 className='pageheading'>Profit/Plus Gloss</h3>
                                {/* <p className='descriptionHead' style={{ textAlign: 'justify'}}>
                                    The Technidyne PROFILE/Plus Roughness and Porosity measures surface roughness and air permeance according to industry standard methods. Multiple measurement capabilities reduce labor costs, and optimize the ability to make process adjustments, thereby saving raw materials and improving production. High resolution flow meter improves measurement accuracy. This helps in reducing process variability to enable tighter control specifications, reduce customer complaints, minimize product returns, and generate higher profits. Selectable Reporting Units reduces the need for multiple instrument types, thereby saving money on testing equipment. Continuous monitoring of zero flow rate helps to optimizes measurement accuracy. This reduces process variability, which minimizes false reject decisions to improve PM efficiency and generate higher profits.
                                </p> */}
                            </div>
                            <div className="portfolio-description"></div>
                        </div>
                    </div>
                </div>
            </section>
    </Layout>
  )
}

export default Profitgloss
