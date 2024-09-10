import React, { useEffect } from 'react'
import Layout from '../../../../../../../component/layout/Layout'
import 'aos/dist/aos.css';
import AOS from 'aos';

const RishLyte2 = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <Layout>
            <div className="bread">
                <ul className="collapsed">
                    <li><a href="/spwater">Water & Waste Water</a></li>
                    <li><a href="/clarification">Clarification Dewarting</a></li>
                </ul>
            </div>
            <section id="hero" className="position-relative overflow-hidden" style={{ backgroundColor: '#0763af' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 mb-5 mb-md-0">
                            <h2 className="text-white fw-bold display-2">RISHLYTE</h2>
                            <h6 className="text-white">FLOCCULANTS</h6>
                            <p className="text-white">
                                The RISHLYTE series of polyamines are liquid cationic polymers of differing molecular weights, which work effectively as primary coagulants and charge neutralization agents.
                            </p>
                        </div>
                        <div className="col-md offset-md-1 pt-5" style={{ backgroundColor: '#fff', borderRadius: '15px' }}>
                            <h3 className="mg-auto p-3">Fill in the form to get more information on Rishlyte.</h3>
                            <form action="" method="post" enctype="multipart/form-data" className="email-form">
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        className="form-control border-.5"
                                        id="sender"
                                        aria-describedby="textHelp"
                                        name="sender"
                                        placeholder="Full Name"
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="form-control border-1.5"
                                        id="pnum"
                                        aria-describedby="textHelp"
                                        name="pnum"
                                        placeholder="Phone No."
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="email"
                                        className="form-control border-1.5"
                                        id="from"
                                        name="from"
                                        placeholder="Email "
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        className="form-control border-1.5"
                                        id="message"
                                        name="message"
                                        placeholder="Message"
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary mb-2">
                                    Send Email
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <br />
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className="custom-block shop-detail-custom-block">
                            <h3 style={{ color: '#3498db' }}>Principals</h3>
                            <ul>
                                <li>Polymine can be used as coagulant in water treatment (drinking and waste water)</li>
                                <li>Also used as a colour precipitant in Sugar process.</li>
                                <li>Used in dyeing and finishing auxiliaries as advanced formaldehyde-free color-fixing agent.</li>
                                <li>Used in paper making, coating and as antistatic agent, as AKD Sizing Promoter and as retention and drainage agent.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-6 col-12 m-auto">
                        <div className="custom-block shop-detail-custom-block">
                            <h3 style={{ color: '#3498db' }}>Advantages</h3>
                            <ul>
                                <li>Help reduce or eliminate use of inorganic coagulants in water treatment.</li>
                                <li>Economical to use — effective at low dosages.</li>
                                <li>Perform well over a wide pH range.</li>
                                <li>Dry product minimizes storage requirement.</li>
                            </ul>
                        </div>
                        <h3 style={{ color: '#3498db' }}>Health and Safety</h3>
                        <ul>
                            <li>See the Material Safety Data Sheet for complete safety, health and environmental data.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <br />
            <div className="table-responsive">
                <table className="table table-striped table-bordered">
                    <thead NaclassName="thead table-dark">
                        <tr>
                            <th scope="col">Product</th>
                            <th scope="col">RISHLYTE
                                8026</th>
                            <th scope="col">RISHLYTE
                                8018</th>
                            <th scope="col">RISHLYTE
                                8022</th>
                            <th>RISHLYTE
                                9822</th>
                            <th>RISHLYTE
                                9822</th>
                            <th>RISHLYTE
                                8022 PWG</th>
                            <th>RISHLYTE
                                8028 PWG</th>
                        </tr>

                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Solid %</th>
                            <td>20</td>
                            <td>35</td>
                            <td>50</td>
                            <td>50</td>
                            <td>65</td>
                            <td>50</td>
                            <td>50</td>
                        </tr>
                        <tr>
                            <th scope="row">Viscosity cps</th>
                            <td>150-450</td>
                            <td>800-2000</td>
                            <td>400-1000</td>
                            <td>4000-10000</td>
                            <td>7000-12000</td>
                            <td>400-1000</td>
                            <td>4000-10000</td>
                        </tr>
                        <tr>
                            <th scope="row">pH
                            </th>
                            <td>5±2</td>
                            <td>5±2</td>
                            <td>5±2</td>
                            <td>5±2</td>
                            <td>5±2</td>
                            <td>5±2</td>
                            <td>5±2</td>

                        </tr>
                        <tr>
                            <th>Application</th>
                            <td>Water
                                Treatment /
                                ETP</td>
                            <td>Water
                                Treatment /
                                ETP</td>
                            <td>Water
                                Treatment /
                                ETP</td>
                            <td>Water
                                Treatment /
                                ETP</td>
                                <td>Sugar &
                            Paper</td>
                        <td>NSF
                            certified</td>
                        <td>NSF
                            certified</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <br />
        </Layout >
    )
}

export default RishLyte2
