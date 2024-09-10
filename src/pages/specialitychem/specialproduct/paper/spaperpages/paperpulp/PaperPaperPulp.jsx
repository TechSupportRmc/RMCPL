import React, { useState, useEffect } from 'react'
import Layout from '../../../../../../component/layout/Layout'
import 'aos/dist/aos.css';
import AOS from 'aos'


const PaperPaperPulp = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    const [activeSlide, setActiveSlide] = useState(0);

    const handleSlideChange = (index) => {
        setActiveSlide(index);
    };


  return (
    <Layout>
      <div className="bread">
                <ul className="collapsed">
                    <li><a href="/specialalitychem">Speciality Chemicals</a></li>
                    <li><a href="/spaper">Paper & Pulp</a></li>
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
                        <div className={`carousel-item ${activeSlide === 0 ? "active" : ""}`} style={{ backgroundImage: "url(/img/Carousel/pulp.jpg)" }}>
                            <div className="carousel-container">
                                <div className="container">
                                    <div className="text" id='text'>
                                        <h2 className="animate__animated animate__fadeInDown">Pulp</h2>
                                        <p className="animate__animated animate__fadeInUp">Pulp is a lignocellulosic fibrous material prepared by chemically or mechanically separating cellulose fibres from wood, fiber crops, waste paper, or rags. Many kinds of paper are made from the pulp</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="services" className="services">
                <div className="container" data-aos="fade-up">
                    <div className="row md-12">
                        <div className="col-lg-4 col-md-12" data-aos="zoom-in" data-aos-delay="100">
                            <div className="icon-box">
                                <div className=""></div>
                                <h4>Cooking Aids</h4>
                                <p>
                                Cooking aids are used to enhance cooking liquor penetration throughout the fibers. It also improves the diffusion process and facilitates uniform cooking of pulp. Treatment of wood chips with a hot mixture of water, sodium hydroxide, and sodium sulfide, known as white liquor.
                                </p>
                                <br />
                                {/* <a href="/clarification" className="get-started-btn">View Products</a> */}
                            </div>
                        </div>
                        <br /><br />

                        <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
                            <div className="icon-box">
                                <div className=""></div>
                                <h4>Pitch Control</h4>
                                <p>
                                Deposits of organic contaminants can cause serious runnability or quality issues. Contaminants can come from wood or from manmade sources through recycled fiber. They can impact the paper making process from the pulp mill to the paper machine.
                                </p>
                                <br /><br />
                                {/* <a href="/biological" className="get-started-btn">View Products</a> */}
                            </div>
                        </div>
                        <br /><br />

                        <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
                            <div className="icon-box">
                                <div className=""></div>
                                <h4>Scale ControlScale</h4>
                                <p>
                                Any process which uses water is susceptible to the deposition of inorganic scales. Calcium carbonate, calcium oxalate, and barium sulfate are examples of the problematic scales which can form in chemical pulping, mechanical pulping, bleaching, and paper making.
                                </p>
                                <br />
                                {/* <a href="/scale" className="get-started-btn">View Products</a> */}
                            </div>
                        </div>
                        <br /><br />
                    </div>
                    <br />
                    <div className="row md-12">
                        <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
                            <div className="icon-box">
                                <div className=""></div>
                                <h4>Wash Aids</h4>
                                <p>
                                Wash Aid works as a defoaming agent in pulp washing system. It is a water based defoamer and can be easily diluted on line and offline. It helps in improving the productivity of wash plant. It has been specially formulated to take care of downstream problems of pitch etc.
                                </p>
                                
                                {/* <a href="/scale" className="get-started-btn">View Products</a> */}
                            </div>
                        </div>
                        <br /><br />
                        <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
                            <div className="icon-box">
                                <div className=""></div>
                                <h4>Brightness Reversion Agents</h4>
                                <p>
                                The mechanisms of brightness reversion are fairly complex and involve a great number of simultaneous reactions. Cellulose is a polyalcohol that can be oxidized during pulp bleaching giving rise to carbonyl and carboxyl groups.
                                </p>
                                <br />
                                {/* <a href="/scale" className="get-started-btn">View Products</a> */}
                            </div>
                        </div>
                        <br /><br />
                        <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
                            <div className="icon-box">
                                <div className=""></div>
                                <h4>Black Liquor Burning Aidss</h4>
                                <p>
                                In industrial chemistry, black liquor is the waste product from the kraft process when digesting pulpwood into paper pulp removing lignin, hemicelluloses and other extractives from the wood to free the cellulose fibers.
                                </p>
                                <br />
                                {/* <a href="/scale" className="get-started-btn">View Products</a> */}
                            </div>
                        </div>
                        <br /><br />
                    </div>
                    <br />
                </div>
            </section>
    </Layout>
  )
}

export default PaperPaperPulp
