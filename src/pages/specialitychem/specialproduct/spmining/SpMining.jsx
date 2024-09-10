import React, { useState, useEffect } from 'react'
import Layout from '../../../../component/layout/Layout'
import 'aos/dist/aos.css';
import AOS from 'aos';

const SpMining = () => {
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
                        <div className={`carousel-item ${activeSlide === 0 ? "active" : ""}`} style={{ backgroundImage: "url(/img/mining-cover-1024x667.jpg)" }}>
                            <div className="carousel-container">
                                <div className="container">
                                    <div className="text" id='text'>
                                        <h2 className="animate__animated animate__fadeInDown">Mining</h2>
                                        <p className="animate__animated animate__fadeInUp">We have wide experience in the mining industry. Our mineral processing chemicals are used to extract base and precious metals, industrial minerals, iron ore, mineral sands, Alumina, uranium, zinc and lead, cupper and coal.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br />
            <br />
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className="custom-block shop-detail-custom-block">
                            <h5 className="mb-3">
                                RISHFLOC & RISHLYTE Flocculants & Coagulants engineered to improve throughput, enhance yield and optimize processes in mining.
                            </h5>
                            <ul>
                                <li>
                                    The mining industry consumes large quantities of water. With water scarcity issues on the rise and ore quality on the decline, finding a solution to effectively separate ore and gangue materials is important in lowering your total cost of operations. We offer a complete flocculants and coagulants products portfolio engineered to improve throughput, enhance yield and optimize your processes in mining application.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-6 col-12 m-auto">
                        <div className="custom-block shop-detail-custom-block">
                            <h3 style={{ color: '#3498db' }}>Advantages</h3>
                            <br /><br />
                            <ul>
                                <li>
                                    Our treatment programs offer innovative solutions for all of the primary mining and mineral processing industries, including Alumina, Coal, Copper and Base Metals, Gold, Silver and Platinum, Phosphate and Potash, Iron Ore, Industrial Minerals and Aggregate (Sand and Gravel).
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
            <div className="table-responsive">
                <table className="table table-bordered table-striped" style={{ paddingLeft: '30px', paddingRight: '30px' }}>
                    <thead className="thead table-dark">
                        <tr>
                            <th scope="col">Applications</th>
                            <th scope="col">RISHFLOC Cationic Flocculants</th>
                            <th scope="col">RISHLYTE Coagulants</th>
                            <th scope="col">RISHFLOC Anionic Flocculants</th>
                            <th>RISHFLOC Nonionic Flocculants</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" style={{ color: '#0763af' }}>Coal dewatering</th>
                            <td></td>
                            <td>&#10004;</td>
                            <td>&#10004;</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">Sludge dewatering</th>
                            <td></td>
                            <td>&#10004;</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">Phosphate slimes dewatering</th>
                            <td></td>
                            <td></td>
                            <td>&#10004;</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th>Tailings thickening</th>
                            <td></td>
                            <td></td>
                            <td>&#10004;</td>
                            <td>&#10004;</td>
                        </tr>
                        <tr>
                            <th>Tailing rheology modification</th>
                            <td></td>
                            <td></td>
                            <td>&#10004;</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th>Tailing overflow clarification</th>
                            <td></td>
                            <td>&#10004;</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th>Phosphogypsum filtration</th>
                            <td></td>
                            <td></td>
                            <td>&#10004;</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th>Phospheric acid clarification</th>
                            <td></td>
                            <td></td>
                            <td>&#10004;</td>
                            <td>&#10004;</td>
                        </tr>
                        <tr>
                            <th>Cathode smoothing</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>&#10004;</td>
                        </tr>
                        <tr>
                            <th>Alumina washer tray settling</th>
                            <td></td>
                            <td></td>
                            <td>&#10004;</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th>Leach plant CCD train clarification</th>
                            <td></td>
                            <td></td>
                            <td>&#10004;</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th>Bio leach settling</th>
                            <td>&#10004;</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th>Flotation concentrate thickening</th>
                            <td></td>
                            <td></td>
                            <td>&#10004;</td>
                            <td>&#10004;</td>
                        </tr>
                        <tr>
                            <th>Flotation concentration clarification</th>
                            <td></td>
                            <td>&#10004;</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <br />
            <section id="services" className="services">
                <div className="container" data-aos="fade-up">
                    <div className="section-title text-center"></div>

                    <div className="row md-12">
                        <div className="col-lg-4 col-md-12" data-aos="zoom-in" data-aos-delay="100">
                            <div className="icon-box">
                                <div className=""></div>
                                <h4>Ore Beneficiation</h4>
                                <p>
                                    In the mining industry or extractive metallurgy, beneficiation is any process that improves the economic
                                    value of the ore by removing the gangue minerals, which results in a higher grade product and a waste
                                    stream (tailings).
                                    <br />
                                    <br />
                                    <br />
                                </p>
                            </div>
                        </div>
                        <br />
                        <br />

                        <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
                            <div className="icon-box">
                                <div className=""></div>
                                <h4>Leaching</h4>
                                <p>
                                    A process where ore is soluble and impurities are insoluble, widely used extractive metallurgy technique
                                    which converts metals into soluble salts in aqueous media. Leaching is easier to perform and much less
                                    harmful, because no gaseous pollution occurs.
                                    <br />
                                    <br />
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
                            <div className="icon-box">
                                <div className=""></div>
                                <h4>Refining</h4>
                                <p>
                                    Refining consists of purifying an impure metal. It is to be distinguished from other processes such as
                                    smelting and calcining in that those two involve a chemical change to the raw material, whereas in
                                    refining, the final material is usually identical chemically to the original one.
                                    <br />
                                    <br />
                                </p>
                            </div>
                        </div>
                    </div>

                    <br />
                    <div className="row md-12">
                        <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
                            <div className="icon-box">
                                <div className=""></div>
                                <h4>Tailings</h4>
                                <p>
                                    Tailings are the materials left over after the process of separating the valuable fraction from the
                                    uneconomic fraction of an ore. Tailings are distinct from overburden, which is the waste rock or other
                                    material that overlies an ore and is displaced during mining without being processed.
                                </p>
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default SpMining
