import React  from 'react';
import Layout from '../../component/layout/Layout'

const Services = () => {  
  return (
    <Layout>
        <section id="hero" style={{ backgroundColor: '#0763af' }}>
            <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-item active" style={{ backgroundImage: 'url(img/paper-768x532.jpg)' }}>
                    <div className="carousel-container">
                        <div className="container">
                            <div className="text">
                                <h2 className="animate__animated animate__fadeInDown" data-aos="fade-down">Services</h2>
                                <p className="animate__animated animate__fadeInUp"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="shop-detail-section section-padding" style={{ backgroundColor: '#cfe2ff' }}>
            <div className="container" style={{ backgroundColor: '#cfe2ff' }}>
                <div className="section-title text-center">
                    <h1 style={{ textTransform: 'capitalize' }}>Services</h1>
                    <br />
                </div>
                <div className="row" style={{ backgroundColor: 'white' }}>
                    <div className="col-lg-6 col-12 m-auto">
                        <div className="custom-block shop-detail-custom-block">
                            <h3 style={{ color: '#087eca' }}><strong>Wet End Surveys (Paper Mills)</strong></h3>
                            <p>
                                Determination of anionic trash (cationic charge demand) across the machine circuit.
                                Determination of zeta potential across the machine circuit. Enables better understanding
                                of the system and the effect of various additives on the wet end chemistry of papermaking.
                            </p>
                            <p>
                                This enables the mill to take suitable action to improve the operational efficiencies and
                                also make changes in the system to improve run ability, wet and dry strength properties
                                of paper and improve formation.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="shop-image-wrap">
                            <img src="img/paper-768x532.jpg" className="shop-image img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="shop-detail-section section-padding section-bg">
            <div className="container">
                <div className="row" style={{ backgroundColor: 'white' }}>
                    <div className="col-lg-6 col-12">
                        <div className="shop-image-wrap">
                            <img src="/img/manpower-outsourcing-768x508.jpg" className="shop-image img-fluid" alt="Outsourcing" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 m-auto">
                        <div className="content">
                            <h3 style={{ color: '#087eca' }}><strong>Outsourcing</strong></h3>
                            <p></p>
                        </div>
                        <div className="custom-block shop-detail-custom-block">
                            <p>
                                As services associated with human resources are a major focus area to drive down costs, India is becoming a major service provider to most of the Fortune 500 companies in the fields of IT, backoffice, call centres etc. Application of specialty chemicals for various metallurgical, water, waste water, textiles etc is service intensive as it not only requires indepth knowledge of the application but also the products. It is here that the concept of hiring expertise emerges; whether this service can be sourced from experienced, technically trained and equipped pool of personnel.
                            </p>
                            <p>
                                It is here that Rishabh provides an answer by providng technical experts on timebound and contractual basis.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
  )
}

export default Services
