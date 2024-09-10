import React from 'react'
import Layout from '../../../../component/layout/Layout'

const Salicylamide = () => {
    return (
        <Layout>
            <div className="bread">
                <ul className="collapsed">
                    <li><a href="/">Home</a></li>
                    <li><a href="/bulk-drug">Bulk Drug</a></li>
                </ul>
            </div>
            <main id="main">
                <div className="container">
                    <div className="section-title  text-center">
                        <h1>Salicylamide</h1>
                    </div>
                </div>
            </main>
            <section id="portfolio-details" className="portfolio-details">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-8">
                            <div className="portfolio-details-slider swiper" style={{ backgroundColor: 'white' }}>
                                {/* <Swiper pagination={{ clickable: true }} className="swiper-wrapper align-items-center">
                                    <SwiperSlide>
                                    </SwiperSlide>
                                    <SwiperSlide> */}
                                <table className="table table-bordered">
                                    <thead className="table">
                                        <tr>
                                            <th scope="col">Chemical Name</th>
                                            <th scope="col">O-Hydroxy Benzamide</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">Technical Information</th>
                                            <td>White or slightly pink crystalline powder. Bitter in taste, sensation of warmth on tongue, forms water soluble Sodium Salt at 9pH.</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Description</th>
                                            <td>A colourless crystalline powder</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Odour</th>
                                            <td>Almost Odourless.</td>
                                        </tr>
                                        <tr>
                                            <th>Melting Range</th>
                                            <td>139oC – 142oC.</td>
                                        </tr>
                                        <tr>
                                            <th>Solubility</th>
                                            <td>Soluble in hot water, chloroform and ether.pH of saturated aqueous solution at 25oC is 5.0.Solubility in water at 30oC is 0.2% at 47oC is 0.8%; Solubility in Glycerol at 5oC is 2.0%; at 39oC is 5%; at 60oC is 10%. Solubility in Propylene Glycol at 5oC is 10%.</td>
                                        </tr>
                                        <tr>
                                            <th>Infra red absorption</th>
                                            <td>Passes test.</td>
                                        </tr>
                                        <tr>
                                            <th>Ultraviolet absorption</th>
                                            <td>Passes test.</td>
                                        </tr>
                                        <tr>
                                            <th>Water</th>
                                            <td>0.5% (max).</td>
                                        </tr>
                                        <tr>
                                            <th>Residue on ignition</th>
                                            <td>0.05% w/w (max) N.F.XIII/0.1% w/w/U.S.P.</td>
                                        </tr>
                                        <tr>
                                            <th>Chromatographic Purity</th>
                                            <td>Complies with U.S.P. test.</td>
                                        </tr>
                                        <tr>
                                            <th>Heavy Metals</th>
                                            <td>Complies with U.S.P. test.</td>
                                        </tr>
                                    </tbody>
                                </table>
                                {/* </SwiperSlide>
                                </Swiper> */}
                                <div className="swiper-pagination"></div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="portfolio-info" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
                                <p>
                                    <img src="/img/Methyl-Salicylate/Salicylamide.svg" className="responsive" alt="Methyl Salicylate" />
                                </p>
                                <div className="section-title text-center">
                                    <h3 style={{ color: '#0763af' }}>C7H7NO2</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Salicylamide
