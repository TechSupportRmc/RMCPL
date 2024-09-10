import React, { useEffect, useState } from 'react'
import Layout from '../../../../../../component/layout/Layout'
import 'aos/dist/aos.css';
import AOS from 'aos';

const Biological = () => {

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
                    <li><a href="/">Home</a></li>
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
                                        <h2 className="animate__animated animate__fadeInDown">Biological Treatment</h2>
                                        <p className="animate__animated animate__fadeInUp">Secondary treatment is the biological treatment of water using a wide variety of microorganisms, primarily bacteria. These microorganisms convert biodegradable organic matter contained in wastewater into simple substances and additional biomass.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br />
            <section id="services" className="services">
                <div className="container" data-aos="fade-up">
                    <div className="section-title text-center"></div>
                    <div className="row md-12">
                        <div className="col-lg-4 col-md-12" data-aos="zoom-in" data-aos-delay="100">
                            <div className="icon-box">
                                <div></div>
                                <div className="secton-title">
                                    <h4>RISHZYME</h4>
                                </div>
                                <br />
                                <p>
                                    RISHZYME is a specially formulated blend of micro organisms, macro/ micro nutrients exclusively containing facultative bacteria. It is bioremedial solution for wastewater treatments of chemical effluent treatments. RISHZYME when added to waste water treatment systems, immediately begin to secrete multiple enzymes that digest and decompose cellulose, lignin, starch and other organic wastes to simpler compounds.
                                </p>
                                <br />
                                <a href="/biorishzym" className="get-started-btn">View Products</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Biological
