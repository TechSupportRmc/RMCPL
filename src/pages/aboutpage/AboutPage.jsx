import React, { useState } from 'react'
import Layout from '../../component/layout/Layout';

const AboutPage = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const handleSlideChange = (index) => {
        setActiveSlide(index);
    };
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
                        <div className={`carousel-item ${activeSlide === 0 ? "active" : ""}`} style={{ backgroundImage: "url(/Carousel/about-us3.jpeg)" }}>
                            <div className="carousel-container">
                                <div className="container">
                                    <div className="text" id='text'>
                                        <h2 className="animate__animated animate__fadeInDown" data-aos="fade-down">About Us</h2>
                                        <p className="animate__animated animate__fadeInUp"  data-aos="fade-up">Started in 1984, Rishabh Metals & Chemicals Pvt Ltd is a
                                            diverse company manufacturing a range of specialty chemicals, bulk drugs, instruments and equipments
                                            for specialized applications</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br />
            <div className="container">
            <div className="row align-items-center py-5">
                <div className="section-title text-center">
                    <h1 style={{ textTransform: 'capitalize' }}>About Us</h1>
                </div>
                <div className="col">
                    <p>
                        Started in 1984, <span style={{ color: '#0763af', fontWeight: 'bold' }}>Rishabh Metals & Chemicals Pvt Ltd</span> is a diverse company manufacturing a range of specialty chemicals, bulk drugs, instruments and equipments for specialized applications in various industry segments including Water, Waste Water treatment, Paper, Textiles, Pharmaceuticals, Oil & Gas, Mining & Metallurgical, Sugar etc.
                    </p>
                    <p>
                        The specialty chemicals range include polymers and copolymers of Acrylamide, Polyamines, PolyDadmacs, PolyAmido resins, Poly Acrylates, crosslinked polymers, structured and branched polymers, formulated polymers, and various surfactants and specialty chemicals and are manufactured in Jalgaon in our modern manufacturing facility. Continuous R&D has been a strong point with RMCPL and all technologies have been developed in-house. RMCPL is one of the only Indian company manufacturing these polymers in powders, emulsions and solution forms in an ISO 9000 accredited facility.
                    </p>
                    <p>
                        A fine chemicals (bulk drug) facility for the manufacture and esterification of Salicylic Acid to Methyl Salicylate is also operational and manufactures products for various multinationals. Products of high purities and very low impurities are manufactured in a Kosher and GMP certified facility. With current production of over 4000 MT, Rishabh is among the largest producer of Methyl Salicylate in India. High standards of product quality and prompt service have enabled Rishabh to get market leadership in this segment.
                    </p>
                    <p>
                        Instruments and equipments offered by Rishabh provide solutions for Automation, Process Control, Research and Development and quality measurement to the Pulp and Paper industry as well as to Water, Waste Water and other industrial applications. Products include laboratory and Online Charge Analysers, Zeta Potential Analyzers, Laboratory Flocculators, Portable & Process viscometers, Dispersion Analyser, On-line Concentration / Density Monitor, and other water quality parameter monitoring systems.
                    </p>
                </div>
            </div>
        </div>
        </Layout>
    )
}

export default AboutPage
