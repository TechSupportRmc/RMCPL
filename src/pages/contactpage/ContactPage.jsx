import React, { useState, useEffect } from 'react';
import Layout from "../../component/layout/Layout";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Swal from 'sweetalert2';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import firebaseConfig from '../firebase/firebaseConfig';
import "./ContactPage.css";

// Initialize Firebase only if not already initialized
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        cname: '',
        country: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Show loading message
        Swal.fire({
            title: 'Sending message...',
            didOpen: () => {
                Swal.showLoading();
            },
            allowOutsideClick: false
        });

        try {
            const response = await fetch('https://rishabh-metals.onrender.com/send-email-main-contactform', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                // If message sent successfully
                Swal.fire({
                    icon: 'success',
                    title: 'Message sent successfully!',
                    showConfirmButton: false,
                    timer: 2000
                });

                // Reset form after successful submission
                setFormData({
                    name: '',
                    mobile: '',
                    email: '',
                    cname: '',
                    country: '',
                    subject: '',
                    message: ''
                });
            } else {
                // If there was an error sending the message
                Swal.fire({
                    icon: 'error',
                    title: 'Error sending message',
                    text: 'Please try again.',
                    showConfirmButton: false,
                    timer: 2000
                });
            }
        } catch (error) {
            console.error('Error:', error);
            // If there was a network error or any other unexpected error
            Swal.fire({
                icon: 'error',
                title: 'Error sending message',
                text: 'Please try again later.',
                showConfirmButton: false,
                timer: 2000
            });
        }
    };

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
                        <div className={`carousel-item ${activeSlide === 0 ? "active" : ""}`} style={{ backgroundImage: "url(/img/map1.webp)" }}>
                            <div className="carousel-container">
                                <div className="container">
                                    <div className="text" id='text'>
                                        <h2 className="animate__animated animate__fadeInDown" data-aos="fade-down">Contact & Sales</h2>
                                        <p className="animate__animated animate__fadeInUp" data-aos="fade-up">Products manufactured by Rishabh are exported regularly
                                            to various countries in Europe, Americas, Africa, Middle East and Asia. If you would like to receive
                                            our products write to us at our mail address or use our contact form to contact us and we’ll help you
                                            in any way we can help Thank you.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* contact form */}
            <section id="contact" className="contact section-bg" style={{ backgroundColor: '#e8f2fe' }}>
                <div className="container" data-aos="fade-up">
                    <div className="section-title text-center">
                        <h1 style={{ textTransform: 'capitalize' }}>Contact Us</h1>
                        <h3 className='sechead'>Please fill in and submit the form below and we’ll get back to you in one working day.</h3>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 pt-5 pb-5">
                            <form onSubmit={handleSubmit} className="emailform" name="contactform">
                                <div className="form-group mt-2">
                                    <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control" id="name" placeholder='Full Name' required />
                                </div>
                                <div className="form-group mt-2">
                                    <input type="number" className="form-control" name="mobile" value={formData.mobile} onChange={handleChange} id="mobile" placeholder='Phone Number' required />
                                </div>
                                <div className="form-group mt-2">
                                    <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} id="email" placeholder='Email' required />
                                </div>
                                <div className="form-group mt-2">
                                    <input type="text" className="form-control" id="cname" name="cname" value={formData.cname} onChange={handleChange} placeholder="Company name" />
                                </div>
                                <div className="form-group mt-2">
                                    <input type="text" className="form-control" id="country" name="country" value={formData.country} onChange={handleChange} placeholder="Country" />
                                </div>
                                <div className="form-group mt-2">
                                    <input type="text" className="form-control" id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" />
                                </div>
                                <div className="form-group mt-2">
                                    <input className="form-control" id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Message" />
                                </div>
                                <input type="submit" className="text-center mt-3 button" name="submit" id="submit" />
                            </form>
                        </div>
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col">
                                    <div className="info mt-4">
                                        <iframe
                                            width="100%"
                                            height="480"
                                            frameBorder="0"
                                            scrolling="no"
                                            marginHeight="0"
                                            marginWidth="0"
                                            id="gmap_canvas"
                                            src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Mumbai%20Address:%204th%20Floor,%20Eros%20Theatre%20Building,%20J.%20Tata%20Road,%20Church%20Gate,%20Mumbai%20400%20020%20mumbai+(Rishabh%20Metals%20&amp;%20Chemicals)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                                            title="Google Map"
                                        >
                                        </iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default ContactPage;
