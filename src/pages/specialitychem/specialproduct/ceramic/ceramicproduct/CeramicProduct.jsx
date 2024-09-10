import React, {useEffect} from 'react'
import Layout from '../../../../../component/layout/Layout'
import 'aos/dist/aos.css';
import AOS from 'aos';

const CeramicProduct = () => {
    
  useEffect(() => {
    AOS.init({
        duration: 1000,
    });
}, []);

    return (
        <Layout>
            <div className="bread">
                <ul className="collapsed">
                    <li><a href="/">Home</a></li>
                    <li><a href="/specialalitychem">Speciality Chemicals</a></li>
                    <li><a href="/spceramic">Ceramic</a></li>
                </ul>
            </div>
            <section id="hero" className="position-relative overflow-hidden" style={{ backgroundColor: '#0763af' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 mb-5 mb-md-0">
                            <h2 className="text-white fw-bold display-2">Clay Dispersant</h2>
                            <h6 className="text-white">ANTISCALANT</h6>
                            <p className="text-white">
                                RISHSCALE offers a range of products with low to High molecular weight antiscalants. These are used to optimize the anti-scale performance through the following mechanisms: - Solubility enhancement by threshold effect - Crystal modification - Dispersing activity.Dispersing agent are used in the mix (sand, stone, cement and water) to lower the use of water and still keeping the same slump (flow) property. This makes the concrete stronger and more impervious to water penetration.
                            </p>
                        </div>
                        <div className="col-md offset-md-1 pt-5 pb-3" style={{ backgroundColor: '#fff', borderRadius: '15px' }}>
                            <h3 className="mg-auto p-3">Fill in the form to get more information on Rishfloc.</h3>
                            <form onSubmit="" className="email-form">
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="sender" name="sender" placeholder="Full Name" required />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="pnum" name="pnum" placeholder="Phone No." required />
                                </div>
                                <div className="mb-3">
                                    <input type="email" className="form-control" id="from" name="from" placeholder="Email" required />
                                </div>
                                <div className="mb-3">
                                    <input className="form-control" id="message" name="message" placeholder="Message" required />
                                </div>
                                <button type="submit" className="btn btn-primary" style={{ color: '#fff' }}>
                                    Send Email
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <br /> <section id="services" className="services">
                <div className="container" data-aos="fade-up">
                    <div className="section-title text-center">
                        {/* Add any section title or subtitle here if needed */}
                    </div>
                    <div className="row md-12">
                        <div className="col-lg-4 col-md-12" data-aos="zoom-in" data-aos-delay="100">
                            <div className="icon-box">
                                <div className=""></div>
                                <h4>RISHSPERSE<br /></h4>
                                <p>
                                    Rishsperse series of special dispersants designed to deflocculate clay & clay based minerals & keep it in suspension. Rishsperse effectively replaces the commonly used silicates & phosphates in terms of lower dosage to achieve high slip density & reduction in undesirable Alkali in the system.
                                    <br /><br /><br />
                                </p>
                            </div>
                        </div>
                        <br /><br />
                    </div>
                </div>
            </section>
            <br />
        </Layout>
    )
}

export default CeramicProduct
