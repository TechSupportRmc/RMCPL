import React, { useEffect } from 'react'
import Layout from '../../../../component/layout/Layout'
import 'aos/dist/aos.css';
import AOS from 'aos';

const Ceramic = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <Layout>
            <div className="bread">
                <ul className="collapsed">
                    <li><a href="/specialalitychem">Speciality Chemicals</a></li>
                    <li><a href="/">Home</a></li>
                </ul>
            </div>
            <section id="hero" className="position-relative overflow-hidden" style={{ backgroundColor: '#0763af' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 mb-5 mb-md-0">
                            <h2 className="text-white fw-bold display-2">Ceramics</h2>
                            {/* <h6 className="text-white">FLOCCULANTS</h6> */}
                            <p className="text-white">
                            A ceramic is an inorganic, non-metallic, solid material comprising metal, non-metal or metalloid atoms primarily held in ionic and covalent bonds.Some elements, such as carbon or silicon, may be considered ceramics.
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
            <br />
            <section id="services" className="services">
      <div className="container" data-aos="fade-up">
        <div className="row md-12">
          <div className="col-lg-6 col-md-12" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon-box">
              <div className=""></div>
              <h4>Clay Dispersant</h4>
              <p>
                Dispersing agent are used in the mix (sand, stone, cement and water) to lower the use of water and still keeping the same slump (flow) property. This makes the concrete stronger and more impervious to water penetration.
              </p>
              <br />
              <a href="/claydisperant" className="get-started-btn">View Products</a>
            </div>
          </div>
          <br /><br /><br /><br />

          <div className="col-lg-6 col-md-12" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-box">
              <div className=""></div>
              <h4>Binder</h4>
              <p>
                Binders are substances that improve the mechanical strength of ceramic bodies so they can pass through production steps, before firing, without breakage. There are a wide variety of binders used in traditional ceramics, including natural products.
                <br /><br />
              </p>
              <br />
              <br />
              {/* <a href="/clay-binder" className="get-started-btn">View Products</a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
        </Layout>
    )
}

export default Ceramic
