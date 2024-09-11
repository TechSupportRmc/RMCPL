import React, { useEffect, useState } from 'react';
import "./Footer.css";
import 'boxicons/css/boxicons.min.css';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import firebaseConfig from '../../pages/firebase/firebaseConfig';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

const Footer = () => {
  const [socialLinks, setSocialLinks] = useState({});

  useEffect(() => {
    // Fetch data from Firestore from a specific document
    const fetchSocialLinks = async () => {
      try {
        const doc = await db.collection('detailsocialmedia').doc('oI5N8NB1EzWsV7Xm45uW').get();
        if (doc.exists) {
          setSocialLinks(doc.data());
        } else {
          console.error('No such document!');
        }
      } catch (error) {
        console.error('Error fetching social media links:', error);
      }
    };

    fetchSocialLinks();
  }, []);

  return (
    <footer id="footer" className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="footer-info">
                <h3>Rishabh Metals &amp; Chemicals</h3>
                <p className="pb-3"><em>Started in 1984, Rishabh Metals &amp; Chemicals Pvt Ltd is a diverse company manufacturing a range of specialty chemicals, bulk drugs, instruments and equipments for specialized applications in various industry segments.</em></p>
                <div className="social-links mt-3">
                  <a href={socialLinks.twitter} target="_blank" className="twitter"><i className="fa-brands fa-twitter"></i></a>
                  <a href={socialLinks.facebook} target="_blank" className="facebook"><i className="fa-brands fa-facebook"></i></a>
                  <a href={socialLinks.instagram} target="_blank" className="instagram"><i className="fa-brands fa-instagram"></i></a>
                  <a href={socialLinks.youtube} target="_blank" className="youtube"><i className="fa-brands fa-youtube"></i></a>
                  <a href={socialLinks.linkedin} target="_blank" className="linkedin"><i className="fa-brands fa-linkedin"></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <a href="/services">Service Account</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="/legalnotice">Legal Notice</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="/Privacy-policy">Privacy Policy</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="/Disclaimer">Disclaimer</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Sitemap</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 footer-links">
              <h4>About Rishabh</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <a href="/about">About Us</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#testimonials">News &amp; Media</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="/careers">Careers</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Products</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <a href="/bulk-drug">Bulk Drugs</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="/speciality-chemicals">Speciality Chemicals</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="/paper">Instruments</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Contact</h4>
              <p>
                <strong>Phone :</strong><br />{socialLinks.phone}<br />
                <strong>Email :</strong>{socialLinks.email}<br />
              </p>
            </div>
          </div>
          <div className="container">
            <div className="copyright">
              &copy; Copyright <strong><span>Rishabh Metals &amp; Chemicals</span></strong>. All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
