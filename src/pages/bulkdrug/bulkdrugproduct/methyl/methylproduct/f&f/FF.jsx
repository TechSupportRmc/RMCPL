import React from 'react'
import Layout from '../../../../../../component/layout/Layout'

const FF = () => {
  return (
    <Layout>
      <div className="bread">
        <ul className="collapsed">
          <li><a href="/bulk-drug">Bulk Drug</a></li>
          <li><a href="/methyl">Methyl Salicylate</a></li>
        </ul>
      </div>
      <main id="main">
        <div className="container">
          <div className="section-title  text-center">
            <h1>Methyl Salicylate – F&F Grade</h1>
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
                      <th scope="col">Colourless Aromatic Liquid having a strong, persistent and characteristic Odour.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Purity (Content of Methyl Salicylate)</th>
                      <td>Minimum 99.0%</td>
                    </tr>
                    <tr>
                      <th scope="row">Impurities</th>
                      <td>Extremely low heavy metals and phenol.</td>
                    </tr>
                    <tr>
                      <th scope="row">Solubility</th>
                      <td>Complete and clear (1:7 ml of 70% Ethanol)</td>
                    </tr>
                    <tr>
                      <th>Specific Gravity</th>
                      <td>1.180 to 1.185</td>
                    </tr>
                    <tr>
                      <th>Acidity</th>
                      <td>0.5 mgKOH/g maximum</td>
                    </tr>
                    <tr>
                      <th>Uses</th>
                      <td>As a flavouring agent in toothpastes, toothpowders, food products, mouthwashes, oral care products.</td>
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
                  <img src="/img/Methyl-Salicylate/Methyl-Salicylate.svg" className="responsive" alt="Methyl Salicylate" />
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

export default FF
