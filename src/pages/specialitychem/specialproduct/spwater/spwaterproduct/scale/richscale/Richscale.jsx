import React from 'react'
import Layout from '../../../../../../../component/layout/Layout'

const Richscale = () => {
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
                            <h2 className="text-white fw-bold display-2">RISHSCALE</h2>
                            <h6 className="text-white">ANTISCALANT</h6>
                            <p className="text-white">
                                RISHSCALE offers a range of products with low to High molecular weight antiscalants. These are used to optimize the anti-scale performance through the following mechanisms: - Solubility enhancement by threshold effect - Crystal modification - Dispersing activity.
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
                            <h5 class="mb-3">RISHZYME degrades organic & inorganic solids that cause obnoxious odors into odorless compounds.</h5>
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
            <table className="table table-striped table-bordered">
                <thead className="thead table-dark" >
                    <tr>
                        <th scope="col">Product</th>
                        <th scope="col">RISHSCALE 4110
                            ANTISCALANT</th>
                        <th scope="col">RISHSCALE 4120
                            ANTISCALANT</th>
                        <th scope="col">RISHSCALE 4130
                            ANTISCALANT</th>
                        <th>RISHSCALE 4122
                            ANTISCALANT</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Chemistry</th>
                        <td>Homopolymer</td>
                        <td>Copolymer</td>
                        <td>Terpolymer</td>
                        <td>Copolymer</td>


                    </tr>
                    <tr>
                        <th scope="row">Solid %</th>
                        <td>48</td>
                        <td>43</td>
                        <td>44</td>
                        <td>39</td>

                    </tr>
                    <tr>
                        <th scope="row">pH
                        </th>
                        <td>3.5±1</td>
                        <td>3.0±0.5</td>
                        <td>2.5±0.5</td>
                        <td>8.0±1</td>
                    </tr>
                    <tr>
                        <th>Application</th>
                        <td>Scale inhibitor for
                            Calcium Carbonates,
                            Calcium Sulphates &
                            Sparingly soluble salts</td>
                        <td>Scale inhibitor for
                            Calcium Carbonates,
                            Calcium Sulphates &
                            Zinc Phosphate</td>
                        <td>High performance
                            polymer for Calcium
                            Phosphate, Iron, Zinc &
                            Phosphate</td>
                        <td>Dispersing agent for
                            inorganic salts</td>
                    </tr>

            </tbody>
        </table>
        <br />
        </Layout >
    )
}

export default Richscale
