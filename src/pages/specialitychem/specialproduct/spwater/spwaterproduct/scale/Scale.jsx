import React, { useState, useEffect } from 'react'
import Layout from '../../../../../../component/layout/Layout'
import 'aos/dist/aos.css';
import AOS from 'aos';

const Scale = () => {
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
                                        <h2 className="animate__animated animate__fadeInDown">Scale Inhibition</h2>
                                        <p className="animate__animated animate__fadeInUp">The accumulation of scale are significant issues affecting the operation and maintenance of industrial boiler systems and steam raising plant. Scale is caused by the accumulation of hardness salts in the boiler water. They are treated inside the boiler itself with scale inhibitors.</p>
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
                                <div className=""></div>
                                <div className="secton-title">
                                    <h4>RISHSCALE</h4>
                                </div>
                                <br />
                                <p>
                                    RISHSCALE offers a range of products with low to High molecular weight antiscalants. These are used to optimize the anti-scale performance through the following mechanisms: – Solubility enhancement by threshold effect – Crystal modification – Dispersing activity.
                                    <br />
                                    <br />
                                </p>
                                <a href="/rishScale" className="get-started-btn">View Products</a>
                            </div>
                        </div>
                        <br />
                        <br />
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Scale
