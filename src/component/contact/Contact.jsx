import React, { useState, useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import "./Contact.css";
import Swal from 'sweetalert2';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import firebaseConfig from '../../pages/firebase/firebaseConfig';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();


const Contact = () => {

    const [contactdata, setContactData] = useState({});

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });


        const fetchSocialLinks = async () => {
            try {
                const doc = await db.collection('detailsocialmedia').doc('cDpriKDKP9nfeASLOmB1').get();
                if (doc.exists) {
                    setContactData(doc.data());
                } else {
                    console.error('No such document!');
                }
            } catch (error) {
                console.error('Error fetching social media links:', error);
            }
        };

        fetchSocialLinks();

    }, []);



    // State for form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        companyname: '',
        countryname: '',
        productrequirements: '',
        areaofinterest: 'Area of interest',
        yourrequirements: '',
        subject: '' // Added subject field
    });

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    // Handle form submission
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
            const response = await fetch('https://rishabh-metals.onrender.com/send-email', {
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
                    email: '',
                    companyname: '',
                    countryname: '',
                    productrequirements: '',
                    areaofinterest: 'Area of interest',
                    yourrequirements: '',
                    subject: '' // Reset subject field
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


    return (
        <section id="contact" className="contact section-bg" style={{ backgroundColor: '#e8f2fe' }}>
            <div className="container" data-aos="fade-up">
                <div className="section-title text-center">
                    <h1>Contact Us</h1>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="info-box mt-4">
                                    <i className="fa-solid fa-envelope"></i>
                                    <h3>Email Us</h3>
                                    <p>{contactdata.email}</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="info-box mt-4">
                                    <i className="fa-solid fa-phone-volume"></i>
                                    <h3>Call Us</h3>
                                    <p>Phone No: {contactdata.phone}</p>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="info-box mt-4" style={{ height: '204px' }}>
                                    <i className="fa-solid fa-location-dot"></i>
                                    <h3>Mumbai</h3>
                                    <p>{contactdata.mumbaiaddress}</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="info-box mt-4">
                                    <i className="fa-solid fa-location-dot"></i>
                                    <h3>Jalgaon</h3>
                                    <p>{contactdata.jalgaonaddress}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <form onSubmit={handleSubmit} className="emailform" style={{ backgroundColor: '#fff' }} name="homepagecontact">
                            <div className="form-group mt-3">
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group mt-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group mt-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="companyname"
                                    placeholder="Company name"
                                    value={formData.companyname}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group mt-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="countryname"
                                    placeholder="Country Name"
                                    value={formData.countryname}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group mt-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="productrequirements"
                                    placeholder="Which Product are you interested in?"
                                    value={formData.productrequirements}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group mt-3">
                                <select
                                    name="areaofinterest"
                                    className="form-control"
                                    style={{ fontSize: '14.5px' }}
                                    value={formData.areaofinterest}
                                    onChange={handleChange}
                                >
                                    <option value="Area of interest">Area of interest</option>
                                    <option value="Paper">Paper</option>
                                    <option value="Environment">Environment</option>
                                    <option value="Bulk Drugs">Bulk Drugs</option>
                                    <option value="Instruments">Instruments</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div className="form-group mt-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="yourrequirements"
                                    placeholder="Your Requirements"
                                    value={formData.yourrequirements}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group mt-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="subject"
                                    placeholder="Subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <br />
                            <div className="text-center">
                                <button type="submit" name="btnsubmit" className="button">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
