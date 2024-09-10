import React from 'react'
import Layout from '../../../../../../../component/layout/Layout'

const RichFoam = () => {
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
                            <h2 className="text-white fw-bold display-2">RISHFOAM</h2>
                            <h6 className="text-white">DEFOAMERS</h6>
                            <p className="text-white">
                                RISHFOAM defoamers prevent generation of foams and causes existing foams to rapidly collapse. RISHFOAM series of defoamers are either Silicon based, non-silicones based or Fatty acid based. Silicones’ low surface tension and interfacial properties, combined with their lack of foam-stabilization properties cause the foam wall to thin and collapse. Fatty acid based defoamers are a composition of a polyether surfactant and a polyhydric alcohol fatty acid ester. RISHFOAM defoamers with different solid content can be used in a wide range of industries.
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
                            {/* <h5 class="mb-3">RISHZYME degrades organic & inorganic solids that cause obnoxious odors into odorless compounds.</h5> */}
                            <ul>
                                <li>Rishfoam range mainly used in effluent treatment plants.</li>
                                <li>Can be used in chemical manufacturing, pulp and paper, textile, oil & gas, fertilizers and various other applications.</li>
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
            <table className="table table-striped table-bordered">
                <thead className="thead table-dark" >
                    <tr>
                        <th scope="col">Product</th>
                        <th scope="col">RISHFOAM
                            9700</th>
                        <th scope="col">RISHFOAM
                            9720</th>
                        <th scope="col">RISHFOAM
                            8400</th>
                        <th>RISHFOAM
                            8411</th>
                        <th>RISHFOAM
                            5915</th>
                        <th>RISHFOAM
                            5916</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Solid %</th>
                        <td>Silicon</td>
                        <td>Silocon</td>
                        <td>Non-Silicon</td>
                        <td>Silicon</td>
                        <td>Fatty Acid</td>
                        <td>Fatty Acids</td>

                    </tr>
                    <tr>
                        <th scope="row">Viscosity cps</th>
                        <td>10</td>
                        <td>20</td>
                        <td>30</td>
                        <td>20</td>
                        <td>30</td>
                        <td>40</td>
                    </tr>
                    <tr>
                        <th scope="row">pH
                        </th>
                        <td>6.0 - 8.0</td>
                        <td>6.0 - 8.0</td>
                        <td>7.0 - 8.0</td>
                        <td>8.0 - 9.5</td>
                        <td>5.0 - 9.0</td>
                        <td>5.0 - 9.0</td>
                    </tr>
                    <tr>
                        <th>Application</th>
                        <td>ETP</td>
                        <td>ETP</td>
                        <td>Paper</td>
                        <td>Paper</td>
                        <td>Paper</td>
                        <td>Paper</td>
                    </tr>

                </tbody>
            </table>
            <br />
        </Layout>
    )
}

export default RichFoam
