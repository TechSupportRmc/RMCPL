import React, {useState, useEffect} from 'react'
import Layout from '../../../../../../component/layout/Layout'
import 'aos/dist/aos.css';
import AOS from 'aos';

const FoamControl = () => {
    
    const [activeSlide, setActiveSlide] = useState(0);

    const handleSlideChange = (index) => {
        setActiveSlide(index);
    };

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
                    <li><a href="/spwater">Water & Waste Water</a></li>
                </ul>
            </div>
            <section id="hero">
                <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-interval="5000" data-bs-ride="carousel">
                    <ol className="carousel-indicators" id="hero-carousel-indicators">
                        <li
                            data-bs-target="#heroCarousel"
                            data-bs-slide-to="0"
                            className={activeSlide === 0 ? "active" : ""}
                            onClick={() => handleSlideChange(0)}
                        ></li>
                    </ol>
                    <div className="carousel-inner" role="listbox">
                        <div className={`carousel-item ${activeSlide === 0 ? "active" : ""}`} style={{ backgroundImage: "url(/img/waste-water-cover-768x576.jpg)" }}>
                            <div className="carousel-container">
                                <div className="container">
                                    <div className="text" id='text'>
                                        <h2 className="animate__animated animate__fadeInDown">Foam Control</h2>
                                        <p className="animate__animated animate__fadeInUp">Foam can be a problem in many water treatment applications as well as in various production processes. On-site testing is an important tool for analyzing our customers’ needs and recommending the best products for their systems.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br />
            <section id="services" className="services">
                <div className="container" data-aos="fade-up">
                    <div className="section-title text-center"></div>
                    <div className="row md-12">
                        <div className="col-lg-4 col-md-12" data-aos="zoom-in" data-aos-delay="100">
                            <div className="icon-box">
                                <div className=""></div>
                                <div className="secton-title">
                                    <h4>RISHFOAM</h4>
                                </div>
                                <br />
                                <p>
                                RISHFOAM defoamers prevent generation of foams and causes existing foams to rapidly collapse. RISHFOAM series of defoamers are either Silicon based, non-silicones based or Fatty acid based. Silicones’ low surface tension and interfacial properties, combined with their lack of foam-stabilization properties cause the foam wall to thin and collapse. Fatty acid based defoamers are a composition of a polyether surfactant and a polyhydric alcohol fatty acid ester. RISHFOAM defoamers with different solid content can be used in a wide range of industries.
                                    <br />
                                    <br />
                                </p>
                                <a href="/richfoam" className="get-started-btn">View Products</a>
                            </div>
                        </div>
                        <br />
                        <br />
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default FoamControl
