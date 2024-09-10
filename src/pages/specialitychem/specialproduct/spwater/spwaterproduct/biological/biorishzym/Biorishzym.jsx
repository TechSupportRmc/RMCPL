import React from 'react'
import Layout from '../../../../../../../component/layout/Layout'

const Biorishzym = () => {
    const headingStyle = { color: '#3498db' };
    return (
        <Layout>
            <div className="bread">
                <ul className="collapsed">
                    <li><a href="/">Home</a></li>
                    <li><a href="/specialalitychem">Speciality Chemicals</a></li>
                    <li><a href="/spwater">Water & Waste Water</a></li>
                </ul>
            </div>
            <section id="hero" className="position-relative overflow-hidden" style={{ backgroundColor: '#0763af' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 mb-5 mb-md-0">
                            <h2 className="text-white fw-bold display-2">RISHZYME</h2>
                            <h6 className="text-white">Enzymes</h6>
                            <p className="text-white">
                                RISHZYME is a specially formulated blend of micro organisms, macro/ micro nutrients exclusively
                                containing facultative bacteria which can grow over a wide temperature range of 5°C to 55°C. It is a
                                bioremedial solution for wastewater treatments of chemical effluent treatments.
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
                            <h3 style={headingStyle}>Principals</h3>
                            <h5 className="mb-3">RISHZYME degrades organic & inorganic solids that cause obnoxious odors into odorless compounds</h5>
                            <ul>
                                <li>Fats to glycerol & fatty acids.</li>
                                <li>Cellulose to starch & sugars</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-6 col-12 m-auto">
                        <div className="custom-block shop-detail-custom-block">
                            <h3 style={headingStyle}>Advantages</h3>
                            <ul>
                                <li>Easily soluble in water.</li>
                                <li>Economical to use — effective at low dosages.</li>
                                <li>Perform well over a wide pH range.</li>
                            </ul>
                        </div>
                        <h3 style={headingStyle}>Health and Safety</h3>
                        <ul>
                            <li>See the Material Safety Data Sheet for complete safety, health and environmental data.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <br />
            <table class="table table-striped table-bordered">
                <thead class="thead table-dark" >
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
            <br />

        </Layout >
    )
}

export default Biorishzym
