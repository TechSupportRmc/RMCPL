import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import "./NewUpdate.css"


import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import firebaseConfig from '../../pages/firebase/firebaseConfig';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();


const NewUpdate = () => {

  const [updates, setUpdates] = useState([]);
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
    });

    // Fetch data from Firestore ordered by 'iod'
    const fetchUpdates = async () => {
      try {
        const snapshot = await firebase.firestore().collection('newsupdate')
          .orderBy('newID') // Specify the field to order by
          .get();

        const updatesData = snapshot.docs.map(doc => ({
          ...doc.data(),
          date: formatDate(doc.data().date), // Format the date here
        }));
        setUpdates(updatesData);
      } catch (error) {
        console.error('Error fetching updates:', error);
      }
    };

    fetchUpdates();
  }, []);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

    
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      };
    
      return (
        <section id="testimonials" className="testimonials section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title text-center">
            <h1>News & Updates</h1>
          </div>
  
          <div className="testimonials-slider" data-aos="fade-up" data-aos-delay="100">
            <Slider {...settings}>
              {updates.map((update, index) => (
                <div key={index} className="testimonial-wrap">
                  <div className="testimonial-item">
                    <p style={{ fontWeight: 'bold' }}>{update.title}</p>
                    <p>{update.date}</p>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      {update.description}
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
      );
}

export default NewUpdate
