import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Layout from '../../../../component/layout/Layout'
import 'aos/dist/aos.css';
import AOS from 'aos';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import firebaseConfig from '../../../firebase/firebaseConfig';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();


const Methyl = () => {

    const [bulkDrugsData, setBulkDrugsData] = useState([]);

    useEffect(() => {
        const fetchBulkDrugsData = async () => {
            try {
                const querySnapshot = await db.collection('MethylbulkDrugs').get();
                const data = querySnapshot.docs.map(doc => doc.data());
                setBulkDrugsData(data);
            } catch (error) {
                console.error('Error fetching bulk drugs data:', error);
            }
        };

        fetchBulkDrugsData();
    }, []);


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
                    <li><a href="/bulk-drug">Bulk Drug</a></li>
                    <li><a href="/methyl">Methyl Salicylate</a></li>
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
                        <div className={`carousel-item ${activeSlide === 0 ? "active" : ""}`} style={{ backgroundImage: "url(/img/bulk-drugs-sec-1024x488.jpg)" }}>
                            <div className="carousel-container">
                                <div className="container">

                                    <div className="text" id='text'>
                                        <h2 className="animate__animated animate__fadeInDown">Methyl Salicylate</h2>
                                        {/* <p className="animate__animated animate__fadeInUp" id='phrama'>Bulk Drugs</p> */}
                                        <p className="animate__animated animate__fadeInUp">Colourless Aromatic Liquid having a stong, persistent and characteristic Odour. It is used as a flavouring agent in toothpastes, toothpowders, food products, mouthwashes, oral care products, etc.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="why-us" className="why-us section-bg">
                <div className="container-fluid" data-aos="fade-up">
                    <section className="featured-product section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="section-title text-center">
                                    <h1 style={{ textTransform: 'capitalize' }}>Methyl Salicylate</h1>
                                </div>

                                {bulkDrugsData.map((drug, index) => (
                                    <div key={index} className="col-lg-4 col-12 mb-3">
                                        <div className="product-thumb">
                                            <img
                                                src={drug.image}
                                                style={{ backgroundColor: '#ffffff' }}
                                                className="img-fluid product-image"
                                                alt={drug.title}
                                            />
                                            <div className="product-info">
                                                <div>
                                                    <h5 className="product-title mb-0">
                                                        <Link to={drug.link} className="product-title-link">{drug.title}</Link>
                                                    </h5>
                                                    <br />
                                                    <Link to={drug.link} className="get-started-btn">View Products</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </Layout>
    )
}

export default Methyl
