import React from 'react'
import Layout from '../../../../component/layout/Layout'

const Aspirin = () => {
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
                        <h1>Aspirin</h1>
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
                                            <th scope="col">Transparent, colorless crystals</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">Purity</th>
                                            <td>:</td>
                                            <td>Minimum 99.5%</td>

                                        </tr>
                                        <tr>
                                            <th scope="row">Refractive Index</th>
                                            <td>:</td>
                                            <td>1.500 to 1.503</td>

                                        </tr>
                                        <tr>
                                            <th scope="row">Specific Gravity</th>
                                            <td>:</td>
                                            <td>1.40</td>

                                        </tr>
                                        <tr>
                                            <th>Acidity</th>
                                            <td>:</td>
                                            <td>0.2 mgKOH/g maximum</td>
                                        </tr>
                                        <tr>
                                            <th>Uses</th>
                                            <td>:</td>
                                            <td>Its used for aches and pains for headaches, period pains, toothache, the pain of bruises and other injuries, and after dental treatment.</td>
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
                                    <img src="/img/Methyl-Salicylate/aspirin.svg" className="responsive" alt="Methyl Salicylate" />
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

export default Aspirin
