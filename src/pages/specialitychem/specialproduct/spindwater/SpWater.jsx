import React, { useState, useEffect } from 'react'
import Layout from '../../../../component/layout/Layout'
import 'aos/dist/aos.css';
import AOS from 'aos';


const SpWater = () => {
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
       <div className="bread">
                <ul className="collapsed">
                    <li><a href="/specialalitychem">Speciality Chemicals</a></li>
                    <li><a href="/">Home</a></li>
                </ul>
            </div>
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
                        <div className={`carousel-item ${activeSlide === 0 ? "active" : ""}`} style={{ backgroundImage: "url(/img/water-treatment-1024x520.jpg)" }}>
                            <div className="carousel-container">
                                <div className="container">
                                    <div className="text" id='text'>
                                        <h2 className="animate__animated animate__fadeInDown">Industrial Water</h2>
                                        <p className="animate__animated animate__fadeInUp">The management of water resources is going to be one of the major challenges we will be facing over the next few decades. Rishabh Metals and Chemicals helps India with more reliable supplies of municipal and industrial water.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="services" className="services">
      <div className="container" data-aos="fade-up">
        <div className="section-title text-center"></div>

        <div className="row md-12">
          <div className="col-lg-4 col-md-12" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon-box">
              <div className=""></div>
              <h4>Scale Inhibitors</h4>
              <p>
                The accumulation of scales is a significant issue affecting the operation and maintenance of industrial
                boiler systems and steam plant. Scale is caused by the accumulation of hardness salts in the boiler
                water. They are treated inside the boiler itself with scale inhibitors.
                <br />
                <br />
              </p>
            </div>
          </div>
          <br />
          <br />

          <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-box">
              <div className=""></div>
              <h4>Corrosion Inhibitors</h4>
              <p>
                Corrosion Inhibitors decreases the corrosion rate of a material, typically a metal or an alloy. The
                effectiveness of a corrosion inhibitor depends on fluid composition, quantity of water, and flow regime.
                Corrosion inhibitors is highly used industry.
                <br />
                <br />
              </p>
              <br />
            </div>
          </div>
          <br />
          <br />

          <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon-box">
              <div className=""></div>
              <h4>Biocide</h4>
              <p>
                Biological products intended to prevent damage to human health or property. Due to these properties,
                pesticides and biocides may cause harm to health and the environment. That is why pesticides and
                biocides need authorisation and must be used properly.
                <br />
                <br />
              </p>
            </div>
          </div>
        </div>

        <br />

        <div className="row md-12">
          <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon-box">
              <div className=""></div>
              <h4>Sludge Conditioner</h4>
              <p>
                Sludge is caused by small quantities of hardness salts and traces of suspended matter present in
                operational steam boilers and feed waters. If left untreated, salt and suspended matter concentrations
                increase in the boiler water to create a sludge.
                <br />
                <br />
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-box">
              <div className=""></div>
              <h4>RO Antiscalant</h4>
              <p>
                Antiscalant is a pretreatment water additive for reverse osmosis system that is highly effective in
                preventing the membranes from scaling. Before the feed water enters the reverse osmosis membrane, an
                antiscalant is injected into the water and sent the through the system.
                <br />
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon-box">
              <div className=""></div>
              <h4>Desalination</h4>
              <p>
                Desalination is a process that extracts mineral components from saline water. More generally,
                desalination refers to the removal of salts and minerals from a target substance, as in soil
                desalination, which is an issue for industries.
                <br />
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </Layout>
  )
}

export default SpWater
