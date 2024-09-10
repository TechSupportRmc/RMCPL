import React, { useEffect } from 'react'
import Layout from '../../../../../../../component/layout/Layout'
import 'aos/dist/aos.css';
import AOS from 'aos';

const Rishfloc2 = () => {

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
                            <h2 className="text-white fw-bold display-2">RISHFLOC</h2>
                            <h6 className="text-white">FLOCCULANTS</h6>
                            <p className="text-white">
                                RISHFLOC CPAM is a highly effective cationic flocculant series with varying molecular weight and charges. It conditions solids for dewatering operations and aids water clarification processes in various industries. It shows exceptional performance in liquid-solid separations in a wide range of conditions.
                            </p>
                        </div>
                        <div className="col-md offset-md-1 pt-5" style={{ backgroundColor: '#fff', borderRadius: '15px' }}>
                            <h3 className="mg-auto p-3">Fill in the form to get more information on Rishfloc.</h3>
                            <form className="email-form">
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        className="form-control border-.5"
                                        id="sender"
                                        name="sender"
                                        placeholder="Full Name"
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="form-control border-1.5"
                                        id="pnum"
                                        name="pnum"
                                        placeholder="Phone No."
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <input
                                        type="email"
                                        className="form-control border-1.5"
                                        id="from"
                                        name="from"
                                        placeholder="Email"
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <input
                                        className="form-control border-1.5"
                                        id="message"
                                        name="message"
                                        placeholder="Message"
                                        required
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary mb-2">Send Email</button>
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
                            <h5 className="mb-3">
                                RISHFLOC PAM cationic flocculants are recommended for the following liquid-solid separation processes:
                            </h5>
                            <ul>
                                <li>
                                    Mechanical dewatering—treating inorganic sludges for increased throughput, solids recovery, and good effluent quality.
                                </li>
                                <li>
                                    Gravity settling—improves floc formation for faster settling rates, increased sludge compaction, and improved water quality.
                                </li>
                                <li>
                                    Water clarification—improves influent, process and effluent water quality by reducing suspended solids and turbidity.
                                </li>
                                <li>
                                    Dissolved air floatation—result in clearer underflows and greater throughput.
                                </li>
                                <li>
                                    Filtration—improves filtered water quality and plant throughput.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-6 col-12 m-auto">
                        <div className="custom-block shop-detail-custom-block">
                            <h3 style={{ color: '#3498db' }}>Advantages</h3>
                            <ul>
                                <li>Easily soluble in water.</li>
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
                    <thead className="thead table-dark">
                        <tr>
                            <th scope="col">Product</th>
                            <th scope="col">RISHFLOC 8100</th>
                            <th scope="col">RISHFLOC 8130</th>
                            <th scope="col">RISHFLOC 8160</th>
                            <th>RISHFLOC 8180</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Charge</th>
                            <td>Non Ionic</td>
                            <td>Low</td>
                            <td>Medium</td>
                            <td>High</td>

                        </tr>
                        <tr>
                            <th scope="row">Viscosity
                                (of 0.5% solution) cps</th>
                            <td>60 - 100</td>
                            <td>2000 - 2500</td>
                            <td>3000 - 4000</td>
                            <td>5000 - 8000</td>
                        </tr>
                        <tr>
                            <th scope="row">pH
                                (of 0.5% solution)</th>
                            <td>7.5±1.0</td>
                            <td>7.5±1.0</td>
                            <td>7.5±1.0</td>
                            <td>7.5±1.0</td>
                        </tr>
                        <tr>
                            <th>Application</th>
                            <td>Mining &
                                Water Treatment</td>
                            <td>Mining &
                                Water Treatment</td>
                            <td>Mining &
                                Water Treatment</td>
                            <td>Water</td>
                        </tr>

                    </tbody>
                </table>
            </div>
            <br />
        </Layout >
    )
}

export default Rishfloc2
