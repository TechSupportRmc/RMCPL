import React from 'react'
import Layout from '../../../../../component/layout/Layout'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FertilizerProcessAnalyser = () => {

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
        '/img/instruments/fertilizerprocessanalyser.png',
        '/img/instruments/fertilizerprocessanalyser.png'
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
                    <h1>Fertilizer Process Analyser</h1>
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
                                <h3 className='pageheading'>Fertilizer Process Analyser</h3>
                                <p className='descriptionHead' style={{ textAlign: 'justify' }}>
                                    The award winning Sparna‘s FreSpec is a dedicated FT-IR-ATR process analyser for inorganic fertilizer.
                                    FerSpec is the unique in the current market, as it is able to Perform Qualitatively &  quantitative analysis
                                    simultaneously for more components in inorganic fertilizer than any other commercial analyser currently
                                    available on the market can. The expected accuracy of qualification of various chemicals components in inorganic
                                    fertilizer range from 0.2 to 0.5% wt. depending on the application. This Analyzer is  having less or Nil Maint. &
                                    Calibration requirement. These can be used in Nitrogen & Phosphate Fertilizer manufacturing field to
                                    measure UREA, Ammonium Nitrate, water, Biuret, Ammonium, Amide, Nitrate, total Nitrogen,
                                    Total Phosphate.
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

export default FertilizerProcessAnalyser
