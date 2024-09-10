import React, { useState, useEffect } from 'react'
import Layout from '../../../../../../component/layout/Layout'
import 'aos/dist/aos.css';
import AOS from 'aos';

const Clarification = () => {
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
                    <li><a href="/spwater">Water & Waste Water</a></li>
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
                        <div className={`carousel-item ${activeSlide === 0 ? "active" : ""}`} style={{ backgroundImage: "url(/img/waste-water-cover-768x576.jpg)" }}>
                            <div className="carousel-container">
                                <div className="container">
                                    <div className="text" id='text'>
                                        <h2 className="animate__animated animate__fadeInDown">Clarification & Dewatering</h2>
                                        <p className="animate__animated animate__fadeInUp">The removal of water from solid material or soil by wet classification, centrifugation, filtration, or similar solid-liquid separation processes, such as removal of residual liquid from a filter cake by a filter press as part of various industrial processes.</p>
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
                                <div className="section-title">
                                    <h4>RISHFLOC Polyacrylamide <br /> Cationic Series (CPAM)</h4>
                                </div>
                                <br />
                                <p>
                                    RISHFLOC CPAM is highly effective cationic flocculant series with varying molecular weight and charges. It conditions solids for dewatering operations and aids water clarification processes in various industries. It shows exceptional performance in liquid-solid separations in a wide range of conditions.
                                    <br /><br />
                                </p>
                                <a href="/rishfloc1" className="get-started-btn">View Products</a>
                            </div>
                        </div>
                        <br /><br />

                        <div className="col-lg-4 col-md-12" data-aos="zoom-in" data-aos-delay="100">
                            <div className="icon-box">
                                <div className=""></div>
                                <div className="section-title">
                                    <h4>RISHFLOC Polyacrylamide <br /> Anionic Series (APAM)</h4>
                                </div>
                                <br />
                                <p>
                                    RISHFLOC APAM is highly effective anionic flocculant series, with varying molecular weight and charges. They have exceptional properties like flocculation, thickening, shear properties, drag reduction and dispersibility. It conditions solids for dewatering operations and aids water clarification processes.
                                    <br /><br />
                                </p>
                                <a href="/rishfloc2" className="get-started-btn">View Products</a>
                            </div>
                        </div>
                        <br /><br />
                        <br /><br />

                        <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
                            <div className="icon-box">
                                <div className=""></div>
                                <h4>RISHLYTE Cationic Coagulant Polyamine</h4>
                                <br />
                                <p>
                                    The RISHLYTE series of polyamines are liquid cationic polymers of differing molecular weights, which work effectively as primary coagulants and charge neutralization agents.
                                    <br /><br /><br /><br /><br />
                                </p>
                                <a href="/rishLyte1" className="get-started-btn">View Products</a>
                            </div>
                        </div>
                        <br /><br />
                    </div>

                    <br /><br />
                    <div className="row md-12">
                        <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
                            <div className="icon-box">
                                <div className=""></div>
                                <h4>RISHLYTE Cationic Coagulant Blends</h4>
                                <br /><br />
                                <p>
                                    The RISHLYTE series of specialty Blends are liquid cationic polymers of differing molecular weights, which work effectively as primary coagulants and charge neutralization agents in liquid-solid separation process in a wide variety of industries. These are customized blends of organic and inorganic coagulants targeted at specific conditions in water treatment.
                                </p>
                                <br />
                                <a href="/rishLyte2" className="get-started-btn">View Products</a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
                            <div className="icon-box">
                                <div className=""></div>
                                <h4>RISHLYTE Cationic Coagulant PolyDCDA</h4>
                                <br /><br />
                                <p>
                                    The RISHLYTE series of color removal products are POLYDCDA based liquid cationic polymers of differing molecular weights.
                                    <br /><br /><br /><br /><br />
                                </p>
                                <br /><br />
                                <a href="/rishLyte3" className="get-started-btn">View Products</a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
                            <div className="icon-box">
                                <div className=""></div>
                                <h4>RISHLYTE Cationic Coagulant PolyDADMAC</h4>
                                <br /><br />
                                <p>
                                    The RISHLYTE series of POLYDADMAC based products are liquid cationic polymers of differing molecular weights. These work effectively as primary coagulants and charge neutralization agents in liquid-solid separation process in a wide variety of industries.
                                </p>
                                <br /><br /><br />
                                <a href="/rishLyte4" className="get-started-btn">View Products</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Clarification
