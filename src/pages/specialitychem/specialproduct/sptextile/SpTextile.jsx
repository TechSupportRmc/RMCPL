import React from 'react'
import Layout from '../../../../component/layout/Layout'
const SpTextile = () => {
    return (
        <Layout>
            <div className="bread">
                <ul className="collapsed">
                    <li><a href="/specialalitychem">Speciality Chemicals</a></li>
                    <li><a href="/">Home</a></li>
                </ul>
            </div>
            <section id="hero" style={{ backgroundColor: '#0763af' }}>
                <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-item active" style={{ backgroundImage: 'url(your-image-url-here)' }}>
                        <div className="carousel-container">
                            <div className="container">
                                <div className="text">
                                    <h2 className="animate__animated animate__fadeInDown">Textile</h2>
                                    <p className="animate__animated animate__fadeInUp">RMCPL is leading manufacturer of Polymer based textile processing specialty products & water treatment chemicals products. We have wide range of textile products for Dyeing, Fixation, Printing and Garment processing.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br />

            {/* table first */}
            <table className=" table table-responsive-sm table-bordered table-striped">
                <h6 className="text-center">RANGE FOR DYEING APPLICATION</h6>
                <thead className="table table-dark">
                    <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Application</th>
                        <th scope="col">Usage in Textiles Dyeing Process</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">RL 8086<br />
                            RF 9014</th>
                        <th>Washing Off Agent</th>
                        <td>For reactive dyed goods washing, having very good protective colloidal property, preventing
                            cross staining.</td>

                    </tr>
                    <tr>
                        <th scope="row">RL 8083</th>
                        <td>Washing off Agent</td>
                        <td>Dispersing agent preventing agglomerisation in the dyebath as well as in washing off process,
                            provides anti redeposition property.</td>

                    </tr>
                    <tr>
                        <th>RL 1640</th>
                        <td>Dyebath conditioner stable to high TDS</td>
                        <td>In the dyebath, when very high levels of TDS, providing bright light, pastel shades.</td>
                    </tr>




                </tbody>
            </table>
            <br />
            <br />

            {/* table second */}
            <table className=" table table-responsive-sm table-bordered table-striped">
                <h6 className="text-center">RANGE FOR SUSTAINABLE DYEING
                </h6>
                <thead className="table table-dark">
                    <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Application</th>
                        <th scope="col">Usage in Textiles Dyeing Process</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">RL 9098</th>
                        <td>Product For Salt Free Dyeing</td>
                        <td>Dyeing of reactive dyes without salt offering ecological advantages</td>
                    </tr>
                </tbody>
            </table>
            <br />
            <br />

            {/* table third */}
            <table class=" table table-responsive-sm table-bordered table-striped">
                <h6 class="text-center">RANGE FOR FIXATION</h6>
                <thead class="table table-dark">
                    <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Application</th>
                        <th scope="col">Usage in Textiles Dyeing Process</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">RL 8086<br />RF 9014
                        </th>
                        <td>Washing Off Agent</td>
                        <td>For reactive dyed goods washing, having very good protective colloidal property, preventing
                            cross staining.</td>
                    </tr>
                    <tr>
                        <th scope="row">RL 8083</th>
                        <td>Washing off Agent</td>
                        <td>Dispersing agent preventing agglomerisation in the dyebath as well as in washing off process,
                            provides anti redeposition property.</td>

                    </tr>
                    <tr>
                        <th scope="row">RL 1640</th>
                        <td>Dyebath conditioner stable to high TDS</td>
                        <td>In the dyebath, when very high levels of TDS, providing bright light, pastel shades.</td>

                    </tr>
                    <tr>
                        <th>RL 4544</th>
                        <td>Dye Fixing Agent</td>
                        <td>Non Formaldehyde Dyefixer providing good wash & rub fastness to reactive dyed materials.</td>

                    </tr>
                </tbody>
            </table>
            <br />
            <br />
            {/* table foruth */}
            <table className=" table table-responsive-sm table-bordered table-striped">
                <h6 className="text-center">RANGE FOR PRINTING</h6>
                <thead className="table table-dark">
                    <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Application</th>
                        <th scope="col">Usage in Textiles Dyeing Process</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">RL 4701</th>
                        <td>Thickener</td>
                        <td>For reactive printing, Replacing conventional Sodium alginate. Provides soft printing feel and
                            bright, sharp print. Dosage 2.5-3.0%</td>
                    </tr>
                    <tr>
                        <th scope="row">RL 4702</th>
                        <td>Thickener</td>
                        <td>For Aqueous pigment printing method. Very good Electrolyte stability and hence minimum
                            viscosity reduction on addition of pigment and other auxil-iaries to stock. Dosage-1.25-1.5%</td>

                    </tr>
                </tbody>
            </table>
            <br />
            <br />
            {/* table fiveth */}
            <table className=" table table-responsive-sm table-bordered table-striped">
                <h6 className="text-center">RANGE FOR GARMENT PROCESSING- SPECIAL APPLICATION</h6>
                <thead className="table table-dark">
                    <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Application</th>
                        <th scope="col">Usage in Textiles Dyeing Process</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">RL 4610<br/>
                            RL 4611</th>
                        <td>Tanti Creasing Agent</td>
                        <td>Crease Inhibitor Improves runnability of the fabric and garment during Pre-Treatment and dyeing.</td>
                    </tr>
                    <tr>
                        <th scope="row">RL 4628</th>
                        <td>Anti-Back Staining Agent</td>
                        <td>High performance anti back staining property during processing on denim as well as nondenim garments.</td>

                    </tr>
                </tbody>
            </table>
        </Layout >
    )
}

export default SpTextile
