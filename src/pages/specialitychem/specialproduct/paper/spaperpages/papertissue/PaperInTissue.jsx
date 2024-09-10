import React, { useState, useEffect } from 'react'
import Layout from '../../../../../../component/layout/Layout'
import 'aos/dist/aos.css';
import AOS from 'aos'


const PaperInTissue = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    const [activeSlide, setActiveSlide] = useState(0);

    const handleSlideChange = (index) => {
        setActiveSlide(index);
    };

    return (
        <Layout>
            <div className="bread">
                <ul className="collapsed">
                    <li><a href="/specialalitychem">Speciality Chemicals</a></li>
                    <li><a href="/spaper">Paper & Pulp</a></li>
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
                        <div className={`carousel-item ${activeSlide === 0 ? "active" : ""}`} style={{ backgroundImage: "url(/Carousel/industries-application.svg)" }}>
                            <div className="carousel-container">
                                <div className="container">
                                    <div className="text" id='text'>
                                        <h2 className="animate__animated animate__fadeInDown">Tissue</h2>
                                        <p className="animate__animated animate__fadeInUp">Tissue paper is produced on a paper machine that has a single large steam heated drying cylinder fitted with a hot air hood. The yankee cylinder is sprayed with adhesives to make the paper stick.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="services" className="services">
                <div className="container" data-aos="fade-up">
                    <div className="row md-12">
                        <div className="col-lg-4 col-md-12" data-aos="zoom-in" data-aos-delay="100">
                            <div className="icon-box">
                                <div className=""></div>
                                <h4>Coating Adhesive</h4>
                                <p>
                                    The processes are not so obvious to the end-user but contribute immensely to the overall quality of the product on how easily the paper releases, how well the paperboard core stays in tack, and how well the roll keeps its shape.
                                </p>
                                <br /><br />
                                {/* <a href="/clarification" className="get-started-btn">View Products</a> */}
                            </div>
                        </div>
                        <br /><br />

                        <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
                            <div className="icon-box">
                                <div className=""></div>
                                <h4>Release Aids</h4>
                                <p>
                                    Release Aid works as a defoaming agent in pulp washing system. It is a water based defoamer and can be easily diluted on line and offline. It helps in improving the productivity of wash plant. It has been specially formulated to take care of downstream problems of pitch etc.
                                </p>
                                <br />
                                {/* <a href="/biological" className="get-started-btn">View Products</a> */}
                            </div>
                        </div>
                        <br /><br />

                        <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
                            <div className="icon-box">
                                <div className=""></div>
                                <h4>Tissue Softeners</h4>
                                <p>
                                    Tissue softness is enabled by selection of proper pulp, improvement of beating process or addition of chemical agents during papermaking. Among these methods, addition of chemical agents is the most common way to improve the softness of tissues.
                                </p>
                                <br />
                                {/* <a href="/scale" className="get-started-btn">View Products</a> */}
                            </div>
                        </div>
                        <br /><br />
                    </div>
                    <br />
                    <div className="row md-12">
                        <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
                            <div className="icon-box">
                                <div className=""></div>
                                <h4>Wet Strength Resins</h4>
                                <p>
                                    The wet strength of paper and paperboard is a measure of how well the web of fibers holding the paper together can resist a force of rupture when the paper is wet. Wet strength is routinely expressed as the ratio of wet to dry tensile force at break.
                                </p>
                                <br />
                                {/* <a href="/scale" className="get-started-btn">View Products</a> */}
                            </div>
                        </div>
                        <br /><br />
                        <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
                            <div className="icon-box">
                                <div className=""></div>
                                <h4>Edge Control</h4>
                                <p>
                                These agents are commonly used in the process of imparting fine and uniform ridges in household paper products such as tissue / toilet paper. They help smooth the surface of paper that gives the paper a more pleasant and comfortable feel.
                                </p>
                                <br />
                                {/* <a href="/scale" className="get-started-btn">View Products</a> */}
                            </div>
                        </div>
                        <br /><br />
                        <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
                            <div className="icon-box">
                                <div className=""></div>
                                <h4>WSR Enhancers</h4>
                                <p>
                                Water-Soluble Resins are used as thickeners, binders, and association compounds in paints, coatings, paint removers, cements, and concrete. Water-Soluble Resins provide aqueous thickening to provide proper body and application properties.
                                </p>
                                
                                {/* <a href="/scale" className="get-started-btn">View Products</a> */}
                            </div>
                        </div>
                        <br /><br />
                    </div>
                    <br />
                    <div className="row md-12">
                        <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
                            <div className="icon-box">
                                <div className=""></div>
                                <h4>Refining Enzymes</h4>
                                <p>
                                Reduction in refining energy. Reduction in Refining time or Amperage leading to a reduction in electrical costs. Helps to reduce build-up of fines in forming and press fabrics, increasing fabric life. Improvement in wastewater quality.
                                </p>
                                <br /><br />
                                {/* <a href="/scale" className="get-started-btn">View Products</a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default PaperInTissue
