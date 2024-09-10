import React, { useState, useEffect } from 'react';
import Layout from '../../../../component/layout/Layout'
import 'aos/dist/aos.css';
import AOS from 'aos';

const Oil = () => {
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
                        <div className={`carousel-item ${activeSlide === 0 ? "active" : ""}`} style={{ backgroundImage: "url(/img/oil-gas-cover-1024x576.jpg)" }}>
                            <div className="carousel-container">
                                <div className="container">
                                    <div className="text" id='text'>
                                        <h2 className="animate__animated animate__fadeInDown">Oil</h2>
                                        <p className="animate__animated animate__fadeInUp">To cope with the global demand and energy changing landscape, we provide our new advanced chemistries to support the oil sector to enhance the recovery, energy saving during completion, advance tailing management etc.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* textual data */}
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className="custom-block shop-detail-custom-block">
                            <h5 className="mb-3 mt-5">
                                The oil and gas industries are constantly seeking to increase the final percentage of hydrocarbons recovered from mature or newly exploited reservoirs.
                            </h5>
                            <ul>
                                <li>Thus multiplying the number of enhanced extraction projects around. Our product range RISHFLOC, RISHLYTE, RISHICIDE offer advance chemistries to support the oil and gas sector to enhance the recovery, energy saving & to keep environment Clean.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 m-auto">
                        <div className="custom-block shop-detail-custom-block">
                            <br /><br /><br />
                            <ul>
                                <li>Our range Flocculant, Coagulant, Dispersant, Rheology modifiers, Biocides & many other Specialty products find the applications in oilfield & Gas industry.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
            {/* table  */}
            <table
                className="table table-responsive-sm table-bordered table-striped"
            >
                <thead className="table table-dark">
                    <tr>
                        <th scope="col">Applications</th>
                        <th scope="col">RISHFLOC Flocculants</th>
                        <th scope="col">RISHLYTE Coagulants</th>
                        <th scope="col">RISHSCALE Scale Inhibitors</th>
                        <th>RISHFOAM Defoamer</th>
                        <th>RISHCIDE Microbial Control</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Friction Reducer</th>
                        <td>&#10004;</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">De emulsifier</th>
                        <td></td>
                        <td>&#10004;</td>
                        <td></td>
                        <td>&#10004;</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">Viscocifier</th>
                        <td>&#10004;</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">Bentonite Extender</th>
                        <td>&#10004;</td>
                        <td>&#10004;</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">Scale Inhibitors</th>
                        <td></td>
                        <td></td>
                        <td>&#10004;</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">Fungicide</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>&#10004;</td>
                    </tr>
                    <tr>
                        <th scope="row">Algeacide</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>&#10004;</td>
                    </tr>
                </tbody>
            </table>

            {/* small cards */}
            <section id="services" className="services">
                <div className="container" data-aos="fade-up">
                    <div className="row md-12">
                        <div className="col-lg-4 col-md-12" data-aos="zoom-in" data-aos-delay="100">
                            <div className="icon-box">
                                <div className=""></div>
                                <h4>Friction Reducer</h4>
                                <p>
                                    It is used to reduce the friction forces experienced by tools and tubulars in the wellbore. Friction
                                    reducers are routinely used in horizontal and highly deviated wellbores where the friction forces limit
                                    the passage of tools along the wellbore.
                                </p>
                                <br />
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
                            <div className="icon-box">
                                <div className=""></div>
                                <h4>Doilers / De-emulsifier</h4>
                                <p>
                                    Deolier is a process in which oil is removed from a material or surface. De-emulsification is the
                                    breaking of a crude oil emulsion into oil and water phases. Both are essential for further purification
                                    of the oil and its various applications.

                                </p>
                                <br />
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
                            <div className="icon-box">
                                <div className=""></div>
                                <h4>Viscosity Modifier</h4>
                                <p>
                                    Viscosity modifiers are high molecular weight polymers which change the temperature dependence of the
                                    viscosity of a liquid lubricant. These polymeric additives reduce mineral oil thinning as temperature
                                    increases. Polymers used as viscosity modifiers in oil.
                                </p>
                                {/* <br /> */}
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="row md-12">
                        <div className="col-lg-4 col-md-12" data-aos="zoom-in" data-aos-delay="100">
                            <div className="icon-box">
                                <div className=""></div>
                                <h4>Bentonite Extender</h4>
                                <p>
                                    It is common practice to add a small amount of polymer to the ore during milling inorder to guarantee
                                    that the bentonite will meet the API specification of minimum barrel yield without compromising fluid loss
                                    control.
                                </p>
                                <br />
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
                            <div className="icon-box">
                                <div className=""></div>
                                <h4>Scale Inhibitor</h4>
                                <p>
                                    Scale inhibitors are a class of specialty chemicals that are used to slow or prevent scaling in water
                                    systems. ‘Scale’ is a common term used in the oil industry Scaling represents a major challenge for flow
                                    assurance in the oil and gas industry.

                                </p>
                                <br />
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
                            <div className="icon-box">
                                <div className=""></div>
                                <h4>Biocide</h4>
                                <p>
                                    Biocides are chemical or biological products intended to prevent or deter animals, plants or
                                    micro-organisms from causing damage to human health or property. Biocides may cause harm to health and the
                                    environment. That is why biocides need authorisation and regulation.
                                </p>
                                {/* <br /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Oil
