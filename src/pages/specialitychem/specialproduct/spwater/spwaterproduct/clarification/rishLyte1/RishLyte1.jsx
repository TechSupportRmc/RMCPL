import React, { useEffect } from 'react'
import Layout from '../../../../../../../component/layout/Layout'
import 'aos/dist/aos.css';
import AOS from 'aos';

const RishLyte1 = () => {
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
                            <h6 className="text-white">COAGULANTS</h6>
                            <p className="text-white">
                                The RISHLYTE series of specialty Blends are liquid cationic polymers of differing molecular weights, which work effectively as primary coagulants and charge neutralization agents in liquid-solid separation process in a wide variety of industries. These are customised blends of organic and inorganic coagulants targeted at specific conditions in water treatment.
                            </p>
                        </div>
                        <div className="col-md offset-md-1 pt-5" style={{ backgroundColor: '#fff', borderRadius: '15px' }}>
                            <h3 className="mg-auto p-3">Fill in the form to get more information on Rishlyte.</h3>
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
                                <li>BLENDS can be used for colour removal and flocculation in water treatment.</li>
                                <li>Blends can be used as de-oiling polymer electrolyte (DOPE) in the petrochemical industries and refineries.</li>
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
                <table className="table table-xl table-bordered table-striped ">
                    <thead className="thead table-dark">
                        <tr>
                            <th scope="col">Product</th>
                            <th scope="col">RISHLYTE 9231</th>
                            <th scope="col">RISHLYTE 9234</th>
                            <th scope="col">RISHLYTE 9236</th>
                            <th>RISHLYTE 9237</th>
                            <th>RISHLYTE 4331</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Solid %</th>
                            <td>44±2</td>
                            <td>33±2</td>
                            <td>36±2</td>
                            <td>29±2</td>
                            <td>50±2</td>

                        </tr>
                        <tr>
                            <th scope="row">Viscosity cps</th>
                            <td>40 - 200</td>
                            <td>100 - 5000</td>
                            <td>150 - 550</td>
                            <td>25 - 150</td>
                            <td>100 - 400</td>
                        </tr>
                        <tr>
                            <th scope="row">pH
                            </th>
                            <td>2.0±1.0</td>
                            <td>3.0±2.0</td>
                            <td>3.0±2.0</td>
                            <td>3.0±2.0</td>
                            <td>3.0±2.0</td>
                        </tr>
                        <tr>
                            <th>Application</th>
                            <td>ETP &
                                swimming pool</td>
                            <td>ETP &
                                swimming pool</td>
                            <td>ETP &
                                swimming pool</td>
                            <td>ETP &
                                swimming pool</td>
                        </tr>

                    </tbody>
                </table>
            </div>
            <br />
        </Layout >
    )
}

export default RishLyte1
