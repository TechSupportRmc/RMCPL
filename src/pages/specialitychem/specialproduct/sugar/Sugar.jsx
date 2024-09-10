import React, { useState, useEffect } from 'react'
import Layout from '../../../../component/layout/Layout'
import 'aos/dist/aos.css';
import AOS from 'aos';
const Sugar = () => {

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
                        <div className={`carousel-item ${activeSlide === 0 ? "active" : ""}`} style={{ backgroundImage: "url(/img/sugar-industry-cover-300x169.jpg)" }}>
                            <div className="carousel-container">
                                <div className="container">
                                    <div className="text" id='text'>
                                        <h2 className="animate__animated animate__fadeInDown">Sugar</h2>
                                        <p className="animate__animated animate__fadeInUp">e have experties in manufacturing water soluble polymers for sugar segment. Our product basket offers chemical solutions that result in better color, higher yields and improved efficiency in the sugar industry.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br />
            <div className="table-responsive">
                <table className="table table-bordered table-striped ">
                    <thead className="thead table-dark">
                        <tr>
                            <th scope="col">Applications</th>
                            <th scope="col">RISHLYTE
                                Coagulants</th>
                            <th scope="col">RISHFLOC
                                Flocculants</th>
                            <th>RISHICIDE
                                Biocides</th>
                            <th>RISHFOAM
                                Defoamer</th>
                            <th>RISHLYTE
                                Antiscalent /
                                Viscosity Modifiers</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Sugar Cane / Beet Juicer</th>
                            <th></th>
                            <td></td>
                            <td>&#10004;</td>
                            <td>&#10004;</td>
                            <td></td>

                        </tr>
                        <tr>
                            <th scope="row">Juice Liming</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>&#10004;</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">Juice Clarification</th>
                            <td>&#10004;</td>
                            <td>&#10004;</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th>Mill Sanitation</th>
                            <td></td>
                            <td></td>
                            <td>&#10004;</td>
                            <td></td>
                            <td></td>

                        </tr>
                        <tr>
                            <th>Pan Additives</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>&#10004;</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th>Sugar Refining</th>
                            <td>&#10004;</td>
                            <td>&#10004;</td>
                            <td></td>
                            <td></td>
                            <td>&#10004;</td>


                        </tr>
                        <tr>
                            <th>Molasses Distillery</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>&#10004;</td>
                            <td>&#10004;</td>
                        </tr>
                        <tr>
                            <th>Effluent Treatment</th>
                            <td>&#10004;</td>
                            <td>&#10004;</td>
                            <td></td>
                            <td></td>
                            <td>&#10004;</td>
                        </tr>

                        <tr>
                            <th>Juice Evaporation</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>&#10004;</td>
                            <td></td>
                        </tr>

                    </tbody>
                </table>
            </div>
            <br />
            <section id="services" className="services">
                <div className="container" data-aos="fade-up">
                    <div className="section-title text-center">
                        {/* Add any section title or subtitle here */}
                    </div>

                    <div className="row md-12">
                        <div className="col-lg-4 col-md-12" data-aos="zoom-in" data-aos-delay="100">
                            <div className="icon-box">
                                <div className=""></div>
                                <h4>Juice Clarification</h4>
                                <p>
                                    Decolorizing applications involve removal of large molecular compounds which require activated carbon
                                    with a well developed macropore structure. The information provided here applies to sugar refining but
                                    the same concepts and principles apply to other decolorising applications.
                                    <br /><br /><br />
                                </p>
                            </div>
                        </div>
                        <br /><br />

                        <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
                            <div className="icon-box">
                                <div className=""></div>
                                <h4>Mill Sanitation</h4>
                                <p>
                                    These are specifically developed organic biocides for improved sanitation/hygiene in sugarcane juice
                                    and sugar mills. These are vastly superior to conventional chemicals like ammonium bifluoride,
                                    bleaching powder and other halogen compounds.
                                    <br /><br />
                                </p>
                                <br /><br />
                            </div>
                        </div>
                        <br /><br />

                        <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
                            <div className="icon-box">
                                <div className=""></div>
                                <h4>Color Precipitant</h4>
                                <p>
                                    This is a highly effective cationic polymer designed for improving color of sugar remelt/syrup in sugar
                                    mills and sugar refineries. It also removes certain high molecular weight impurities present in sugar
                                    remelt and syrup.
                                    <br /><br /><br /><br />
                                </p>
                            </div>
                        </div>
                        <br /><br />
                    </div>

                    <br />
                    <div className="row md-12">
                        <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
                            <div className="icon-box">
                                <div className=""></div>
                                <h4>Juice Evaporator / Pan Additives</h4>
                                <p>
                                    The clarified juice is concentrated in a multiple-effect evaporator to make a syrup of about 60 percent
                                    sucrose by weight. In a multiple-effect evaporator, water is boiled in a sequence of vessels, each held
                                    at a lower pressure than the last.
                                </p>
                                <br /><br />
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
                            <div className="icon-box">
                                <div className=""></div>
                                <h4>Waste Water</h4>
                                <p>
                                    The treatment of these wastewaters requires a process that combines mechanical, chemical and biological
                                    treatment measures. The principle element of the purification process is based upon the aerobic
                                    activated sludge technology with one or more aeration stages.
                                    <br /><br /><br />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout >
    )
}

export default Sugar
