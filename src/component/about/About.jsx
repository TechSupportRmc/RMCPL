import React, { useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import './About.css';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import firebaseConfig from '../../pages/firebase/firebaseConfig';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

const About = () => {
  const [abouthome, setAboutHome] = useState([]);

  useEffect(() => {
    const fetchHomeAbout = async () => {
      try {
        const snapshot = await db.collection('homepageabout').get();
        const fetchedSlides = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setAboutHome(fetchedSlides);
      } catch (error) {
        console.error('Error fetching slides: ', error);
      }
    };

    fetchHomeAbout();
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section id="why-us" className="why-us section-bg">
      <div className="container-fluid" data-aos="fade-up">
        <div className="row">
          {abouthome.map((slide, index) => (
            <React.Fragment key={index}>
              <div
                className="col-lg-5 align-items-stretch video-box"
                style={{ backgroundImage: `url(${slide.image})` }}
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <a
                  href="https://youtu.be/zdLEMXvBv2g"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="venobox play-btn mb-4"
                  data-vbtype="video"
                  data-autoplay="true"
                ></a>
              </div>

              <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch">
                <div className="content">
                  <h3>
                    {slide.titlehalf} <br /> <strong>{slide.title}</strong>
                  </h3>
                  {/* <p></p> */}
                </div>

                <div className="accordion-list">
                  <ul>
                    <li>
                      <p>
                      {slide.subtitle}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
