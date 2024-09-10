import React, { useState, useEffect } from 'react';
import Layout from '../../component/layout/Layout';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import AOS from 'aos';
import './BulkDrug.css';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import firebaseConfig from '../firebase/firebaseConfig';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

const BulkDrug = () => {
  const [bulkDrugsData, setBulkDrugsData] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  useEffect(() => {
    const fetchBulkDrugsData = async () => {
      try {
        const querySnapshot = await db.collection('bulkDrugs').orderBy('bulkID').get();
        const data = querySnapshot.docs.map(doc => doc.data());
        setBulkDrugsData(data);
      } catch (error) {
        console.error('Error fetching bulk drugs data:', error);
      }
    };

    fetchBulkDrugsData();
  }, []);

  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };

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
            <div className={`carousel-item ${activeSlide === 0 ? "active" : ""}`} style={{ backgroundImage: "url(/img/bulk-drugs-sec-1024x488.jpg)" }}>
              <div className="carousel-container">
                <div className="container">
                  <div className="text" id='text'>
                    <h2 className="animate__animated animate__fadeInDown" data-aos="fade-down">Bulk Drugs</h2>
                    <p className="animate__animated animate__fadeInUp" id='phrama' data-aos="fade-up">Pharmaceuticals</p>
                    <p className="animate__animated animate__fadeInUp" data-aos="fade-up">RMC has a wide range of products that encompasses chemicals for various applications in industries like Pharmaceutical, Sugar, Textile, Paper, Metallurgy, Oil & Gas, Mining, etc.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="why-us" className="why-us section-bg" style={{ backgroundColor: '#ffffff' }}>
        <div className="container-fluid" data-aos="fade-up">
          <section className="featured-product section-padding">
            <div className="container">
              <div className="row">
                <div className="section-title text-center">
                  <h1 style={{ textTransform: 'capitalize' }}>Bulk Drugs</h1>
                  <br />
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
  );
};

export default BulkDrug;
