import React, { useState, useEffect } from 'react';
import Layout from '../../component/layout/Layout';
import "./SpecChem.css";
import 'aos/dist/aos.css';
import AOS from 'aos';

const SpecialityChem = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };

  useEffect(() => {
    AOS.init({
        duration: 1000,
    });
}, []);
  return (
    <Layout>
      <section id="hero">
        <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-interval="5000" data-bs-ride="carousel">
          <ol className="carousel-indicators" id="hero-carousel-indicators">
            <li
              data-bs-target="#heroCarousel"
              data-bs-slide-to="0"
              className={activeSlide === 0 ? "active" : ""}
              onClick={() => handleSlideChange(0)}
            ></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className={`carousel-item ${activeSlide === 0 ? "active" : ""}`} style={{ backgroundImage: "url(/Carousel/industries-application.svg)" }}>
              <div className="carousel-container">
                <div className="container">
                  <div className="text" id='text'>
                    <h2 className="animate__animated animate__fadeInDown"  data-aos="fade-down">Specialty Chemicals</h2>
                    <p className="animate__animated animate__fadeInUp"  data-aos="fade-up">RMC has a wide range of products that encompasses chemicals for various applications in industries like Pharmaceutical, Sugar, Textile, Paper, Metallurgy, Oil & Gas, Mining, etc.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* cards section */}
      <section id="services" className="services">
        <div className="container" data-aos="fade-up">
          <div className="section-title text-center">
            <h1 style={{ textTransform: 'capitalize' }}>Speciality Chemicals</h1>
          </div>
          <br />
          <div className="row md-12">
            <div className="col-lg-4 col-md-12" data-aos="zoom-in" data-aos-delay="100">
              <div className="icon-box">
                <div className="icon-img">
                  <img src="/img/paper-pulp-300x169.jpg" alt="Paper & Pulp" />
                </div>
                <div className="secton-title">
                  <h4>Paper & Pulp</h4>
                </div>
                <p>We have unique expertise in chemical producing to create value both in the pulp and papermaking process. Through our chemistry, we improve our customer’s process efficiency, productivity and end-product quality.</p>
                <br />
                <a href="/spaper" className="get-started-btn">View Products</a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
              <div className="icon-box">
                <div className="icon-img">
                  <img src="/img/oil-gas-cover-300x169.jpg" alt="Textile" />
                </div>
                <h4>Oil</h4>
                <p>To cope with the global demand and energy changing landscape, we provide our new advanced chemistries to support the oil and gas sector to enhance the recovery, energy saving during completion, etc.<br /><br /></p>

                <br />
                <a href="/soil" className="get-started-btn">View Products</a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
              <div className="icon-box">
                <div className="icon-img">
                  <img src="/img/textile-300x169.jpg" alt="Textile" />
                </div>
                <h4>Textile</h4>
                <p>RMCPL is into manufacturing of Polymer based textile processing specialty products & water treatment chemicals products. We have wide range of textile products for Dyeing, Fixation, Printing and Garment processing.</p>
                <br />
                <a href="/sptextile" className="get-started-btn">View Products</a>
              </div>
            </div>
            <br />
          </div>
          <br />
          <div className="row md-12">
            <div className="col-lg-4 col-md-12" data-aos="zoom-in" data-aos-delay="100">
              <div className="icon-box">
                <div className="icon-img">
                  <img src="/img/mining-cover-768x500.jpg" alt="Paper & Pulp" />
                </div>
                <div className="secton-title">
                  <h4>Mining</h4>
                </div>
                <p>We have wide experience in the mining industry. Our mineral processing chemicals are used to extract base and precious metals, industrial minerals, iron ore, mineral sands, alumina, uranium, zinc and lead, cupper and coal.<br /><br /></p>
                <br />
                <a href="/spmining" className="get-started-btn">View Products</a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
              <div className="icon-box">
                <div className="icon-img">
                  <img src="/img/water-treatment-300x203.jpg" alt="Textile" />
                </div>
                <h4>Industrial Water</h4>
                <p>The management of water resources is going to be one of the major challenges we will be facing over the next few decades. Rishabh Metals and Chemicals helps India with more reliable supplies of municipal and industrial water.<br /><br /></p>

                <br />
                <a href="/spindustrywater" className="get-started-btn">View Products</a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
              <div className="icon-box">
                <div className="icon-img">
                  <img src="/img/waste-water-cover-300x225.jpg" alt="Textile" />
                </div>
                <h4>Water & Waste Water</h4>
                <p>The management of water resources is going to be one of the major challenges we will be facing over the next few decades. Rishabh Metals and Chemicals helps India with more reliable supplies of municipal and industrial water.<br /><br /></p>
                <br />
                <a href="/spwater" className="get-started-btn">View Products</a>
              </div>
            </div>
            <br />
          </div>
          <br />
          <div className="row md-12">
            <div className="col-lg-4 col-md-12" data-aos="zoom-in" data-aos-delay="100">
              <div className="icon-box">
                <div className="icon-img">
                  <img src="/img/sugar-industry-cover-300x169.jpg" alt="Paper & Pulp" />
                </div>
                <div className="secton-title">
                  <h4>Sugar</h4>
                </div>
                <p>With years of experience in manufacturing water soluble polymers for sugar segment. Our product basket offers chemical solutions that result in better color, higher yields and improved efficiency in the sugar industry.</p>
                <br />
                <a href="/spsugar" className="get-started-btn">View Products</a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
              <div className="icon-box">
                <div className="icon-img">
                  <img src="/img/ceramic-cover-768x295.jpg" alt="Textile" />
                </div>
                <h4>Ceramic</h4>
                <p>A ceramic is an inorganic, non-metallic, solid material comprising metal, non-metal or metalloid atoms primarily held in ionic and covalent bonds.Some elements, such as carbon or silicon, may be considered ceramic.</p>

                <br />
                <a href="/spceramic" className="get-started-btn">View Products</a>
              </div>
            </div>
            <br />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SpecialityChem;
