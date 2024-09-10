import React, { useState, useEffect } from 'react'
import Layout from '../../../../component/layout/Layout'
import 'aos/dist/aos.css';
import AOS from 'aos';

const WaterSp = () => {
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
                                        <h2 className="animate__animated animate__fadeInDown">Water Waste Treatment</h2>
                                        <p className="animate__animated animate__fadeInUp">The management of water resources is going to be one of the major challenges we will be facing over the next few decades. Rishabh Metals and Chemicals helps India with more reliable supplies of municipal and industrial water.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* table section */}
            <section className="shop-detail-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-12 m-auto" style={{ backgroundColor: 'rgb(241, 241, 241)' }}>
                            <div className="custom-block shop-detail-custom-block">
                                <h3 className="mb-3" style={{ color: '#3498db' }}>
                                    Waste water treatment is the process of converting waste water – water that is no longer needed or is no longer suitable for use that can be discharged back into the environment.
                                </h3>
                                <p>
                                    It’s formed by a number of activities including bathing, washing, using the toilet, and rainwater runoff. Wastewater is full of contaminants including bacteria, chemicals and other toxins. Its treatment aims at reducing the contaminants to acceptable levels to make the water safe for discharge back into the environment.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12"></div>
                    </div>
                </div>
                <br />
                <div className="table-responsive">
                    <table className="table table-xl table-bordered table-striped">
                        <thead className="thead table-dark">
                            <tr>
                                <th scope="col">Applications</th>
                                <th scope="col">RISHLYTE Coagulants</th>
                                <th scope="col">RISHFLOC Flocculants</th>
                                <th scope="col">RISHZYME Bio Culture Nutrient</th>
                                <th scope="col">RISHFOAM Defoamers</th>
                                <th scope="col">RISHSCALE Antiscalant</th>
                                <th scope="col">RISHCIDE Biocide</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Organic Coagulant</th>
                                <td>&#10004;</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row">Inorganic Coagulant & Blends</th>
                                <td>&#10004;</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row">Flocculants</th>
                                <td></td>
                                <td>&#10004;</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row">Color Removals</th>
                                <td>&#10004;</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row">Sludge Dewatering</th>
                                <td></td>
                                <td>&#10004;</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    Bacteria Culture / Enzymes for COD Removal / Oil Grease / Odor / Ammonical Nitrogen Removal
                                </th>
                                <td>&#10004;</td>
                                <td></td>
                                <td>&#10004;</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row">Nutrition food for Bacteria</th>
                                <td></td>
                                <td></td>
                                <td>&#10004;</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row">Defoamers for ETP</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>&#10004;</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row">R.O Antiscalant</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>&#10004;</td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row">R.O.Biocide</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>&#10004;</td>
                            </tr>
                            <tr>
                                <th scope="row">R.O. membrane Cleaners ( Acidic & Alkaline)</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>&#10004;</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            <section id="services" className="services">
                <div className="container" data-aos="fade-up">
                    <div className="row md-12">
                        <div className="col-lg-4 col-md-12" data-aos="zoom-in" data-aos-delay="100">
                            <div className="icon-box">
                                <div className=""></div>
                                <h4>Clarification & Dewatering</h4>
                                <p>
                                    The removal of water from solid material or soil by wet classification, centrifugation, filtration, or similar solid-liquid separation processes, such as removal of residual liquid from a filter cake by a filter press as part of various industrial processes.
                                </p>
                                <br />
                                <a href="/clarification" className="get-started-btn">View Products</a>
                            </div>
                        </div>
                        <br /><br />

                        <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
                            <div className="icon-box">
                                <div className=""></div>
                                <h4>Biological Treatment</h4>
                                <p>
                                    Secondary treatment is the biological treatment of water using a wide variety of microorganisms, primarily bacteria. These microorganisms convert biodegradable organic matter contained in wastewater into simple substances and additional biomass.
                                </p>
                                <br />
                                <a href="/biological" className="get-started-btn">View Products</a>
                            </div>
                        </div>
                        <br /><br />

                        <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
                            <div className="icon-box">
                                <div className=""></div>
                                <h4>Scale Inhibition</h4>
                                <p>
                                    The accumulation of scale are significant issues affecting the operation and maintenance of industrial boiler systems and steam raising plant. Scale is caused by the accumulation of hardness salts in the boiler water. They are treated inside the boiler itself with scale inhibitors.
                                </p>
                                <a href="/scale" className="get-started-btn">View Products</a>
                            </div>
                        </div>
                        <br /><br />
                    </div>
                    <br />
                    <div className="row md-12">
                        <div className="col-lg-4 col-md-6 " data-aos="zoom-in" data-aos-delay="200">
                            <div className="icon-box">

                                <div className="">

                                </div>
                                <h4>Foam Control</h4>
                                <p>Foam can be a problem in many water treatment applications as well as in various production processes. On-site testing is an important tool for analyzing our customer’s needs and recommending the best products for their systems.<br/><br/></p>
                                    <a href="foamcontrol" class="get-started-btn">View Products</a>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        </Layout>
    )
}

export default WaterSp
