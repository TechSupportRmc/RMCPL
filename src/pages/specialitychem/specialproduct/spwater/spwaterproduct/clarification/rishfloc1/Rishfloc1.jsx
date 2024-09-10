import React, { useEffect } from 'react'
import Layout from '../../../../../../../component/layout/Layout'
import 'aos/dist/aos.css';
import AOS from 'aos';

const Rishfloc1 = () => {

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
                                RISHFLOC CPAM is highly effective cationic flocculant series with varying molecular weight and charges. It conditions solids for dewatering operations and aids water clarification processes in various industries. It shows exceptional performance in liquid-solid separations in a wide range of conditions.
                            </p>
                        </div>
                        <div className="col-md offset-md-1 pt-5 pb-3" style={{ backgroundColor: '#fff', borderRadius: '15px' }}>
                            <h3 className="mg-auto p-3">Fill in the form to get more information on Rishfloc.</h3>
                            <form onSubmit="" className="email-form">
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="sender" name="sender" placeholder="Full Name" required />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="pnum" name="pnum" placeholder="Phone No." required />
                                </div>
                                <div className="mb-3">
                                    <input type="email" className="form-control" id="from" name="from" placeholder="Email" required />
                                </div>
                                <div className="mb-3">
                                    <input className="form-control" id="message" name="message" placeholder="Message" required />
                                </div>
                                <button type="submit" className="btn btn-primary" style={{ color: '#fff' }}>
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
                            <h5 className="mb-3">RISHFLOC PAM cationic flocculants are recommended for the following liquid-solid separation processes:</h5>
                            <ul>
                                <li>Belt press filter, vacuum filter, centrifuge, air floatation, screw press dewatering—increased production rate, cake solids.</li>
                                <li>Filtration.</li>
                                <li>Water clarification.</li>
                                <li>Sludge Thickening—improved compaction, settling, drainage and effluent quality.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-6 col-12 m-auto">
                        <div className="custom-block shop-detail-custom-block">
                            <h3 style={{ color: '#3498db' }}>Advantages</h3>
                            <ul>
                                <li>Easily soluble in water.</li>
                                <li>Economical to use—effective at low dosages.</li>
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
            <div className="table-responsive">
                <table className="table  table-striped ">
                    <thead className="thead table-dark table-bordered">
                        <tr>
                            <th scope="col">Product</th>
                            <th scope="col">RISHFLOC 8220</th>
                            <th scope="col">RISHFLOC 8225</th>
                            <th scope="col">RISHFLOC 8240</th>
                            <th>RISHFLOC 8260</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Charge</th>
                            <td>Low</td>
                            <td>Low - Medium</td>
                            <td>Medium - High</td>
                            <td>Very High</td>
                        </tr>
                        <tr>
                            <th scope="row">Viscosity
                                (of 0.5% solution) cps</th>
                            <td>1500 - 2000</td>
                            <td>2000 - 3000</td>
                            <td>3000 - 4000</td>
                            <td>3000 - 4000</td>
                        </tr>
                        <tr>
                            <th scope="row">pH
                                (of 0.5% solution)</th>
                            <td>4.0±1.0</td>
                            <td>4.0±1.0</td>
                            <td>4.0±1.0</td>
                            <td>4.0±1.0</td>
                        </tr>
                        <tr>
                            <th>Application</th>
                            <td>ETP & STP Dewatering
                                <td>ETP & STP Dewatering</td>
                                <td>ETP & STP Dewatering</td>
                                <td>ETP & STP Dewatering</td>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>

        </Layout>
    )
}

export default Rishfloc1
