import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import "./Map.css"

const Map = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
        });
      }, []);
    
      return (
        <section id="map" className="map" style={{ backgroundColor: '#ffffff' }}>
          <div className="container" data-aos="fade-up">
            <div className="section-title text-center">
              <h1>World Wide Export</h1>
            </div>
            <video 
              src="/RMCPL - Map.mp4" 
              className="responsive" 
              muted
              autoPlay
              loop
              preload="auto"
              alt="World Map for Import Export"
            />
            <div className="swiper-pagination"></div>
          </div>
        </section>
      );
}

export default Map;
