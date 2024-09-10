import React, { useEffect, useRef, useState } from 'react';
import './Hero.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import firebaseConfig from '../../pages/firebase/firebaseConfig';

// Initialize Firebase app
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

const Hero = () => {
  const carouselRef = useRef(null);
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    AOS.init();

    const handleSlideEvent = () => {
      AOS.refresh();
    };

    const carouselElement = carouselRef.current;
    if (carouselElement) {
      carouselElement.addEventListener('slide.bs.carousel', handleSlideEvent);
      carouselElement.addEventListener('slid.bs.carousel', handleSlideEvent);
    }

    return () => {
      if (carouselElement) {
        carouselElement.removeEventListener('slide.bs.carousel', handleSlideEvent);
        carouselElement.removeEventListener('slid.bs.carousel', handleSlideEvent);
      }
    };
  }, []);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const snapshot = await db.collection('heroslides')
          .orderBy('slide_id')
          .get();

        const fetchedSlides = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setSlides(fetchedSlides);
      } catch (error) {
        console.error('Error fetching slides: ', error);
      }
    };

    fetchSlides();
  }, []);

  const staticButtons = [
    {
      buttonText: 'Read More',
      buttonLink: '/specialalitychem',
    },
    {
      buttonText: 'Read More',
      buttonLink: '/bulk-drug',
    },
    {
      buttonText: 'Explore',
      buttonLink: '/paper-products',
    },
    {
      buttonText: '', // No button for the fourth slide
      buttonLink: '',
    },
  ];

  return (
    <section id="hero">
      <div
        id="heroCarousel"
        ref={carouselRef}
        data-bs-interval="5000"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <ol className="carousel-indicators">
          {slides.map((slide, index) => (
            <li
              key={slide.id}
              data-bs-target="#heroCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
            ></li>
          ))}
        </ol>

        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="carousel-container">
                <div className="container">
                  <h2 className="animate__animated animate__fadeInDown" data-aos="fade-down">
                    {slide.title}
                  </h2>
                  <p className="animate__animated animate__fadeInUp" data-aos="fade-up">
                    {slide.subtitle}
                  </p>
                  {staticButtons[index] && staticButtons[index].buttonText && (
                    <a
                      href={staticButtons[index].buttonLink}
                      className="btn-get-started animate__animated animate__fadeInUp scrollto"
                    >
                      {staticButtons[index].buttonText}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon bx bx-chevron-left" aria-hidden="true"></span>
        </a>
        <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon bx bx-chevron-right" aria-hidden="true"></span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
