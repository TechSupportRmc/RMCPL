import React, { useEffect } from 'react'
import Layout from '../../../../../../../component/layout/Layout';
import 'aos/dist/aos.css';
import AOS from 'aos';

const RishLyte3 = () => {
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
                                <li>RISHFLOC PAM cationic flocculants are recommended for the following liquid-solid separation processes:</li>
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
                            <li>See the Material Safety Data Sheet for complete safety, health and environmental data.</li>                        </ul>
                    </div>
                </div>
            </div>
            <br />
            <div className="table-responsive">
                <table className="table table-light table-bordered table-striped">
                    <thead className="thead table-dark" >
                        <tr>
                            <th scope="col">Product</th>
                            <th scope="col">RISHLYTE 8003</th>
                            <th scope="col">RISHLYTE 8005</th>
                            <th scope="col">RISHLYTE 8007</th>
                            <th>RISHLYTE 4010</th>
                            <th>RISHLYTE 4009</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" >Solid %</th>
                            <td>40</td>
                            <td>50</td>
                            <td>60</td>
                            <td>50</td>
                            <td>50</td>

                        </tr>
                        <tr>
                            <th scope="row">Viscosity cps</th>
                            <td>10-60</td>
                            <td>30-125</td>
                            <td>50-500</td>
                            <td>500-1100</td>
                            <td>500-1100</td>
                        </tr>
                        <tr>
                            <th scope="row">pH
                            </th>
                            <td>4.0±1.0</td>
                            <td>4.0±2.0</td>
                            <td>4.0±2.0</td>
                            <td>4.0±2.0</td>
                            <td>4.0±2.0</td>
                        </tr>
                        <tr>
                            <th>Application</th>
                            <td>Colour Removel</td>
                            <td>Colour Removel</td>
                            <td>Colour Removel</td>
                            <td>Colour Removel</td>

                            <td>Clour Removel</td>
                        </tr>

                    </tbody>
                </table>
            </div>
            <br />
        </Layout>
    )
}

export default RishLyte3
