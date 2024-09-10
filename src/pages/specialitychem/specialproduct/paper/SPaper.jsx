import React, { useState, useEffect } from 'react';
import Layout from "../../../../component/layout/Layout"
import 'aos/dist/aos.css';
import AOS from 'aos';
import "./SPaper.css"

const SPaper = () => {

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
                    <li><a href="/spaper">Paper</a></li>
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
                        <div className={`carousel-item ${activeSlide === 0 ? "active" : ""}`} style={{ backgroundImage: "url(/img/paper-pulp-1024x578.jpg)" }}>
                            <div className="carousel-container">
                                <div className="container">
                                    <div className="text" id='text'>
                                        <h2 className="animate__animated animate__fadeInDown">Paper & Pulp</h2>
                                        <p className="animate__animated animate__fadeInUp">We have unique expertise in chemical producing to create
                                            the ultimate papermaking process. Through our chemistry, we improve our customer’s process efficiency,
                                            productivity and end-product quality</p>
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
                    <div className="section-title text-center"></div>
                    <div className="row md-12">
                        <div className="col-lg-4 col-md-12" data-aos="zoom-in" data-aos-delay="100">
                            <div className="icon-box">
                                <div className="icon-img">
                                    <img src='/img/paper-300x208.jpg' alt="Paper" />
                                </div>
                                <div className=""></div>
                                <h4>Paper</h4>
                                <p>We have unique expertise in chemical producing to create the ultimate papermaking process. Through our
                                    chemistry, we improve our customer’s process efficiency, productivity and end-product quality
                                </p>
                                <br />
                                <a href="/spaperpaper" className="get-started-btn">View Products</a>
                            </div>
                        </div>
                        <br /><br />
                        <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
                            <div className="icon-box">
                                <div className="icon-img">
                                    <img src='./img/tissue1.jpg' alt="Tissue" />
                                </div>
                                <div className=""></div>
                                <h4>Tissue</h4>
                                <p>Tissue paper is produced on a paper machine that has a single large steam heated drying cylinder fitted
                                    with a hot air hood. The yankee cylinder is sprayed with adhesives to make the paper stick.</p>
                                <br /><br />
                                <a href="/spapertissue" className="get-started-btn">View Products</a>
                            </div>
                        </div>
                        <br /><br />
                        <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
                            <div className="icon-box">
                                <div className="icon-img">
                                    <img src='./img/packaging1.jpg' alt="Packaging" />
                                </div>
                                <div className=""></div>
                                <h4>Packaging</h4>
                                <p>Packaging is the technology of enclosing or protecting products for distribution, storage, sell, and use.
                                    Packaging also refers to the process of designing, evaluating, and producing packages.
                                </p>
                                <br /><br />
                                <a href="/spaperpackaging" className="get-started-btn">View Products</a>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="row md-12">
                        <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
                            <div className="icon-box">
                                <div className="icon-img">
                                    <img src='./img/Pulp.jpg' alt="Pulp" />
                                </div>
                                <div className=""></div>
                                <h4>Pulp</h4>
                                <p>Pulp is a lignocellulosic fibrous material prepared by chemically or mechanically separating cellulose
                                    fibres from wood, fiber crops, waste paper, or rags. Many kinds of paper are made from the pulp.
                                </p>
                                <br /><br />
                                <a href="/spaperpaperpulp" className="get-started-btn">View Products</a>
                            </div>
                        </div>
                    </div>
                    <br />
                </div>
            </section>

        </Layout>
    )
}

export default SPaper
