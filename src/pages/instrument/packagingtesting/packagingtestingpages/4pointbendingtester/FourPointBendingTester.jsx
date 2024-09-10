import React from 'react'
import Layout from '../../../../../component/layout/Layout'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FourPointBendingTester = () => {
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
    '/img/instruments/4point_beding_tester.png',
    '/img/instruments/4point_beding_tester.png'
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
          <h1>4-Point Bending Tester</h1>
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
                <h3 className='pageheading'>4-Point Bending Tester</h3>
                <p className='descriptionHead' style={{ textAlign: 'justify' }}>
                  With the Single Column Testing Framework, designed to quickly and accurately determine 4-Point
                  Flexural Stiffness of standard corrugated cardboard samples according to ISO 5628.
                  Flexural Stiffness is the relationship between the Flexural moment applied to a normalized
                  sample according to ISO 5628 and the Deflection within the elastic zone. The Flexural Stiffness
                  of Corrugated Cardboard is of great importance to achieve great resistance to Stacking, BCT, in
                  the corrugated cardboard box. What primarily determines this flexural stiffness of corrugated
                  cardboard is the mixture of the thickness of corrugated cardboard and the tensile strength of
                  Liner Papers.
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

export default FourPointBendingTester
