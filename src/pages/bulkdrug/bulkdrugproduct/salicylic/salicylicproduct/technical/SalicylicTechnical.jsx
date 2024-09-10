import React from 'react'
import Layout from '../../../../../../component/layout/Layout'

const SalicylicTechnical = () => {
    return (
        <Layout>
            <div className="bread">
                <ul className="collapsed">
                    <li><a href="/bulk-drug">Bulk Drug</a></li>
                    <li><a href="/salicylic">Salicylic Acid</a></li>
                </ul>
            </div>
            <main id="main">
                <div className="container">
                    <div className="section-title  text-center">
                        <h1>Salicylic Acid – Technical Grade</h1>
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
                                            <th scope="col">Description</th>
                                            <th scope="col">Colourless crystalline powder.</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">Odour</th>

                                            <td>Almost Odourless.</td>

                                        </tr>
                                        <tr>
                                            <th scope="row">Appearance of Solution/Clarity & Colour of Solution</th>

                                            <td>Passes test as per B.P./I.P</td>

                                        </tr>
                                        <tr>
                                            <th scope="row">Heavy Metals</th>

                                            <td>20 ppm (max.)</td>

                                        </tr>
                                        <tr>
                                            <th>Sulphated Ash/Residue on Ignition</th>

                                            <td>0.1% w/w (I.P./B.P.Limit) / 0.05%w/w (U.S.P. Limit)</td>
                                        </tr>
                                        <tr>
                                            <th>Chloride</th>
                                            <td>125 ppm (max.) I.P./100 ppm (max.) B.P.</td>
                                        </tr>
                                        <tr>
                                            <th>0.02% (max.) I.P./140 ppm U.S.P.</th>

                                            <td>0.02% (max.) I.P./140 ppm U.S.P.</td>
                                        </tr>
                                        <tr>
                                            <th>Related Substance</th>
                                            <td>Complies with U.S.P. test.</td>
                                        </tr>
                                        <tr>
                                            <th>Iron</th>
                                            <td>2 ppm (max.) I.P.</td>
                                        </tr>
                                        <tr>
                                            <th>Readily Carbonisable Substance	</th>
                                            <td>Passes test</td>
                                        </tr>
                                        <tr>
                                            <th>Assay</th>
                                            <td>99.0% to 100.5% I.P./B.P., 99.5% to 101% U.S.P. of C7H6O3 with reference to substance dried over Silica Gel for three hours.</td>
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
                                    <img src="/img/Methyl-Salicylate/Salicylic-Acid.svg" className="responsive" alt="Methyl Salicylate" />
                                </p>
                                <div className="section-title text-center">
                                    <h3 style={{ color: '#0763af' }}>C7H6O3</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default SalicylicTechnical
