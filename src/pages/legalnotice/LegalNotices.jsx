import React, { useState, useEffect } from 'react'
import Layout from '../../component/layout/Layout'
import '../specialitychem/SpecChem.css'
import 'aos/dist/aos.css';
import AOS from 'aos';


const LegalNotices = () => {
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
            <section id="hero" style={{ backgroundColor: '#0763af' }}>
                <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-item active" style={{ backgroundImage: 'url(your-image-url-here)' }}>
                        <div className="carousel-container">
                            <div className="container">
                                <div className="text">
                                    <h2 className="animate__animated animate__fadeInDown" data-aos="fade-down">Legal Notice</h2>
                                    <p class="animate__animated animate__fadeInUp" data-aos="fade-up">This Leagal Notice will represent the mutual understanding between the RMCPL and the general public. We will get back to your requirements once you have email us to sales@rmc.in.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container ">
                <div className="row align-items-center py-5">
                    <p className="">RMCPL does not wish to receive confidential information from you through this web site and will consequently treat information submitted by you as public.</p>
                    <p>RMCPL reserves the right in its sole discretion to monitor, review and use all communications and other use of its Internet, together with information relating to such communications and use, such as identification of sources and recipients of information, usage frequency and content of transmissions.</p>
                    <p>Registration and other information entered or uploaded by you or left by your browser software when you are accessing the Internet will be treated confidential within RMCPL and used solely for the purpose of doing business with you.</p>
                    <p>If you wish to communicate with us about this privacy statement or about your data on our systems, please send an email to: sales@rmc.in</p>
                </div>
            </div>
        </Layout>
    )
}

export default LegalNotices
