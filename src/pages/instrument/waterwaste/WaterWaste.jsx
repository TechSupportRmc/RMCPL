import React, { useEffect, useState } from 'react'
import Layout from '../../../component/layout/Layout'
import 'aos/dist/aos.css';
import AOS from 'aos';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import firebaseConfig from '../../firebase/firebaseConfig';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();


const WaterWaste = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [productData, setProductData] = useState([]);

    const handleSlideChange = (index) => {
        setActiveSlide(index);
    };

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });

        const fetchData = async () => {
            try {
                const querySnapshot = await db.collection('waterAndwaste').get();
                const data = querySnapshot.docs.map(doc => doc.data());
                setProductData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    return (
        <Layout>
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
                        <div className={`carousel-item ${activeSlide === 0 ? "active" : ""}`} style={{ backgroundImage: "url(/img/Carousel/instruments-header-1024x423.jpg)" }}>
                            <div className="carousel-container">
                                <div className="container">
                                    <div className="text" id='text'>
                                        <h2 className="animate__animated animate__fadeInDown">Water/Waste Water And Other Industries</h2>
                                        <p className="animate__animated animate__fadeInUp">Instruments and equipments offered by Rishabh provide
                                            solutions for Automation, Process Control, Research and Development and quality measurement to the
                                            Pulp and Paper industry as well as to Water, Waste Water and other industrial applications. Products
                                            include laboratory and Online Charge Analysers, Zeta Potential Analyzers, Laboratory Flocculators,
                                            Portable & Process viscometers, Dispersion Analyser, On-line Concentration / Density Monitor, and
                                            other water quality parameter monitoring systems.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br />
            {productData.map((section, index) => (
                <div className="container cta-100" key={index}>
                    <div className="container">
                        <div className="row blog">
                            <div className="col-md-12">
                                <div id={`blogCarousel-${index}`} className="carousel slide container-blog" data-ride="carousel">
                                    <div className="section-title text-center">
                                        <h1>{section.sectionTitle}</h1>
                                    </div>
                                    <br />
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <div className="row">
                                                {section.products.map((product, idx) => (
                                                    <div className="col-md-4" key={idx}>
                                                        <div className="item-box-blog">
                                                            <div className="item-box-blog-image">
                                                                <figure>
                                                                    <img alt={product.title} src={product.imageUrl} />
                                                                </figure>
                                                            </div>
                                                            <div className="item-box-blog-body">
                                                                <div className="item-box-blog-heading">
                                                                    <a href="#" tabIndex="0">
                                                                        <h5>{product.title}</h5>
                                                                    </a>
                                                                </div>
                                                                <br />
                                                                <a href={product.url} className="get-started-btn">View Products</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*.Carousel*/}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <br />
        </Layout>
    )
}

export default WaterWaste
