import React, { useState, useEffect } from 'react'
import Layout from '../../../../../../component/layout/Layout'
import 'aos/dist/aos.css';
import AOS from 'aos'


const PaperPackaging = () => {

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
                        <div className={`carousel-item ${activeSlide === 0 ? "active" : ""}`} style={{ backgroundImage: "url(/Carousel/industries-application.svg)" }}>
                            <div className="carousel-container">
                                <div className="container">
                                    <div className="text" id='text'>
                                        <h2 className="animate__animated animate__fadeInDown">Packaging</h2>
                                        <p className="animate__animated animate__fadeInUp">Packaging is the technology of enclosing or protecting products for distribution, storage, sell, and use. Packaging also refers to the process of designing, evaluating, and producing packages.</p>
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
                                <h4>Size Press Additives</h4>
                                <p>
                                    Sized papers show a considerably higher strength. For instance, important for liner and corrugated media, but also for other packaging papers as well as for graphic papers. For tensile strength increase, penetration of the size into the paper is desired.
                                </p>
                                <br />
                                {/* <a href="/clarification" className="get-started-btn">View Products</a> */}
                            </div>
                        </div>
                        <br /><br />

                        <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
                            <div className="icon-box">
                                <div className=""></div>
                                <h4>Refining Enzymes</h4>
                                <p>
                                    Enzymes have opened up a new dimension in the paper Industry by virtue of their application with respect to its usage in lowering of chemical load, energy saving and low loads on effluent treatment plant. Various processes are being targeted for enzyme usage.
                                </p>
                                <br />
                                {/* <a href="/biological" className="get-started-btn">View Products</a> */}
                            </div>
                        </div>
                        <br /><br />

                        <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
                            <div className="icon-box">
                                <div className=""></div>
                                <h4>Defoamers</h4>
                                <p>
                                    Surface active agents added in the process of boiling of wood or pulp cause foam. The degree of foam formation depends on the type & speed of machine, nature of pulp, pH etc. Defoamers are developed with a view to reduce surface tension at the liquid to air surface and eliminate foam.
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
                                <h4>Binders</h4>
                                <p>
                                    Binders promote the binding of pigment particles between themselves and the coating layer of the paper. Binders are used in printing and dyeing process of various kinds of fabrics which imparts high degree of color fastness and a wide spectrum of shades in fabrics.
                                </p>
                                
                                {/* <a href="/scale" className="get-started-btn">View Products</a> */}
                            </div>
                        </div>
                        <br /><br />
                        <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
                            <div className="icon-box">
                                <div className=""></div>
                                <h4>Dispersants</h4>
                                <p>
                                The chemicals that are sprayed on a surface oil slick to break down the oil into smaller droplets that more readily mix with the water. Dispersants do not reduce the amount of oil entering the environment, but push the effects of the spill underwater.
                                </p>
                                <br />
                                {/* <a href="/scale" className="get-started-btn">View Products</a> */}
                            </div>
                        </div>
                        <br /><br />
                        <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
                            <div className="icon-box">
                                <div className=""></div>
                                <h4>Retention Aids</h4>
                                <p>
                                Retention aids bind fillers and fines to the fibre so they can be retained in the sheet. Retention aids also fix dyes to the sheet. Rishabh’s Retention and Drainage Aid product line consists of 25-30 products in powder and emulsion forms for optimal working in a system.
                                </p>

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

export default PaperPackaging
