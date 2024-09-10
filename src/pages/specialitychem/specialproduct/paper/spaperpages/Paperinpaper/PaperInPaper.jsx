import React, { useState, useEffect } from 'react'
import Layout from '../../../../../../component/layout/Layout'
import 'aos/dist/aos.css';
import AOS from 'aos';

const PaperInPaper = () => {

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
                        <div className={`carousel-item ${activeSlide === 0 ? "active" : ""}`} style={{ backgroundImage: "url(/img/paper-mills-768x533.jpg)" }}>
                            <div className="carousel-container">
                                <div className="container">
                                    <div className="text" id='text'>
                                        <h2 className="animate__animated animate__fadeInDown">Paper</h2>
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
            <section id="services" className="services">
                <div className="container" data-aos="fade-up">
                    <div className="row md-12">
                        <div className="col-lg-4 col-md-12" data-aos="zoom-in" data-aos-delay="100">
                            <div className="icon-box">
                                <div className=""></div>
                                <h4>Fixing Agent</h4>
                                <p>
                                    Fixing agents are used to improve retention of internal sizing agents and to enhance sizing degree. They also reduce machine deposits caused from internal sizing agent. They function as both productivity aids and product improvement since they increase speed and increase fines retention.
                                </p>
                                <br />
                                {/* <a href="/clarification" className="get-started-btn">View Products</a> */}
                            </div>
                        </div>
                        <br /><br />

                        <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
                            <div className="icon-box">
                                <div className=""></div>
                                <h4>Retention Aids</h4>
                                <p>
                                    Retention aids bind fillers and fines to the fibre so they can be retained in the sheet. Retention aids also fix dyes to the sheet. Rishabh’s Retention and Drainage Aid product line consists of 25-30 products in powder and emulsion forms for optimal working in a system.
                                </p>
                                <br />
                                {/* <a href="/biological" className="get-started-btn">View Products</a> */}
                            </div>
                        </div>
                        <br /><br />

                        <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
                            <div className="icon-box">
                                <div className=""></div>
                                <h4>Drainage Aids</h4>
                                <p>
                                    Drainage also can be increased in most paper furnish types by addition of positively charged (cationic) polymers having a high charge density. Popular chemicals for such use include PEI products, polyamines, and DADMAC of moderate molecular mass.
                                </p>
                                <br /><br />
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
                                <h4>Slime Control Agents</h4>
                                <p>
                                    Micro-organism is a paper technologists nightmare. These micro-organisms disturb the operating sequence of Paper machine circulation system. This leads to formation of a bio-film multiple issues. If left untreated it can damage to irreversible points.
                                </p>
                                <br /><br />
                                {/* <a href="/scale" className="get-started-btn">View Products</a> */}
                            </div>
                        </div>
                        <br /><br />
                        <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
                            <div className="icon-box">
                                <div className=""></div>
                                <h4>Stickies Control</h4>
                                <p>
                                    Stickies are tacky substances contained in the paper pulp and process water systems of paper machines. Stickies have the potential to contaminate the components either within or around the equipment necessary in the Stages of Manufacturing that a Paper Mill follows in its Developed Process.
                                </p>
                                <br />
                                {/* <a href="/scale" className="get-started-btn">View Products</a> */}
                            </div>
                        </div>
                        <br /><br />
                        <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
                            <div className="icon-box">
                                <div className=""></div>
                                <h4>Dry Strength Additives</h4>
                                <p>
                                    Dry strength additives are multifunctional chemicals which are widely used both to enhance paper / paperboard strength such as bursting, compressing, tensile, and internal bond strength etc. and to improve drainage and retention of fiber, fines and filler.
                                </p>
                                <br /><br />
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
                                <h4>Coagulants</h4>
                                <p>
                                    Using conventional coagulants like salts of Aluminium or Iron pose problems of finely divided flocs of aluminum hydroxide or ferric hydroxide getting carried over into the clarified water. Our Coagulants replace inorganic coagulants and also reduce cost of treatment.
                                </p>
                                <br /><br />
                                {/* <a href="/scale" className="get-started-btn">View Products</a> */}
                            </div>
                        </div>
                        <br /><br />
                        <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
                            <div className="icon-box">
                                <div className=""></div>
                                <h4>Flocculants for Fiber Recovery</h4>
                                <p>
                                    Flocculants for fibre recovery are present in different products in powder form with product charge. Anionic low molecular weight and medium molecular weight, Cationic low, medium and high molecular weight. These Products are being used in fibre recovery like krofta, save all etc.
                                </p>
                                <br />
                                {/* <a href="/scale" className="get-started-btn">View Products</a> */}
                            </div>
                        </div>
                        <br /><br />
                        <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
                            <div className="icon-box">
                                <div className=""></div>
                                <h4>Felt Conditioners</h4>
                                <p>
                                    Maintaining clean, open felts is critical to paper machine performance. A one percent increase in sheet dryness leaving the press section generally permits a three percent to five percent increase in production or a comparable energy decrease.
                                </p>
                                <br /><br /><br />
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
                                <h4>Wire Passivation</h4>
                                <p>
                                    Wire passivation agents modifies the surface of the forming fabric, reducing its surface energy to prevent contaminants from spreading / being caught in the wire. Wire passivation agents has also been proven to be effective against pitch
                                </p>
                                <br /><br />
                                {/* <a href="/scale" className="get-started-btn">View Products</a> */}
                            </div>
                        </div>
                        <br /><br />
                        <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
                            <div className="icon-box">
                                <div className=""></div>
                                <h4>Refining Enzymes</h4>
                                <p>
                                    The Refining enzyme program helps in the reduction of refining energy of fibre, gives better drainage on wire part with improved machine runnability with improved paper properties. Enzymes have opened up a new dimension in the paper Industry
                                </p>
                                <br /><br />
                                {/* <a href="/scale" className="get-started-btn">View Products</a> */}
                            </div>
                        </div>
                        <br /><br />
                        <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
                            <div className="icon-box">
                                <div className=""></div>
                                <h4>Boil Out</h4>
                                <p>
                                    Effective boil-outs and machine cleaning is required to maintain maximum operational efficiency. Effective boil-outs are one of the foundations of a comprehensive microbiological control program. Boil-outs are critical components of deposit and microbiological control programs.
                                </p>
                                <br />
                                {/* <a href="/scale" className="get-started-btn">View Products</a> */}
                            </div>
                        </div>
                        <br /><br />
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default PaperInPaper
