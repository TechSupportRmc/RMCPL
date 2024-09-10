import React, { useState, useEffect } from 'react'
import Layout from '../../component/layout/Layout'
import 'aos/dist/aos.css';
import AOS from 'aos';

const PrivacyPolicy = () => {

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
                                    <h2 className="animate__animated animate__fadeInDown" data-aos="fade-down">Privacy Policy</h2>
                                    <p class="animate__animated animate__fadeInUp" data-aos="fade-up">Our Privacy Policy contains the information to our rights and our client’s information through this site. Under no circumstances shall our client’s infomation will be compromised.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container ">
                <div className="row align-items-center py-5">
                    <p class="">Rishabh Metals & Chemicals Pvt. Ltd. (RMCPL) & RISHABH logo are trademarks of Rishabh Metals & Chemicals Pvt. Ltd. All Rights Reserved. Retransmission, reproduction or distribution without express written permission of Rishabh Metals & Chemicals Pvt. Ltd. is prohibited.
                    </p>
                    <p>This web site contains proprietary notices and copyrighted images and information and trade marks or trade names. No license to reproduce such images and information or use such trade marks and trade names or the RISHABH logo is hereby granted under any such intellectual property right.</p>
                    <h3 style={{ color: '#087eca' }}>Product Use and Recommendations</h3>
                    <p>All recommendations for handling, storage or use of products, whether given in writing, orally, or to be implied from the results of tests are based on the state of Rishabh’s knowledge at the time such recommendations are made. Notwithstanding any such recommendations, you as the user of such products must make your own determination and satisfy yourself that the products supplied by RMCPL and the information and recommendations given by RMCPL are (I) suitable for your intended process or purpose, (II) are in compliance with environmental, health and safety regulations, and (III) will not infringe any third party’s intellectual property rights.</p>
                    <h3 style={{ color: '#087eca' }}>Right to Change</h3>
                    <p>Information provided on this web site may be inaccurate or contain typographical errors and RMCPL reserves the right to change or correct any information at any time without notice.</p>
                    <h3 style={{ color: '#087eca' }}>Hyperlinks to Third Party Sites</h3>
                    <p>RMCPL makes no representations whatsoever about any other web site which you may access through links from this one. Such third party information is independent from our own. A link to another web site does not mean that RMCPL endorses or accepts any responsibility for the content or the use of such other web site.</p>
                    <h3 style={{ color: '#087eca' }}>Limitation of Liability for Damages</h3>
                    <p>In no event will RMCPL be liable to any party for direct, indirect, incidental, special, punitive or other consequential damages resulting from any use of this web site or of the information made available on it, or on any other web site accessible through a link or hyper-link, including, but not limited to, any loss of business, loss of profits, loss of data, or loss of use.</p>
                    <h3 style={{ color: '#087eca' }}>Parent Company Information</h3>
                    <p>M/s Rishabh Metals & Chemicals Pvt. Ltd. (RMCPL) is registered in the Commercial Register of Mumbai, India with registered number 111101284 and whose registered office is at 4th Floor Eros Theatre Building, J. T. Road, Mumbai 400020.</p>
                </div>
            </div>
        </Layout>
    )
}

export default PrivacyPolicy
