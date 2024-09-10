import React, { useEffect, useState, useRef } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import firebaseConfig from '../firebase/firebaseConfig';
import Layout from '../../component/layout/Layout';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Swal from 'sweetalert2';
import "./Career.css";


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();


const Career = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const handleSlideChange = (index) => {
        setActiveSlide(index);
    };

    useEffect(() => {
        AOS.init();
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        subject: '',
        jobExperience: '',
        resumeFile: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "resumeFile") {
            setFormData({
                ...formData,
                resumeFile: files[0]
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Show loading spinner
        Swal.fire({
            title: 'Sending application...',
            didOpen: () => {
                Swal.showLoading();
            },
            allowOutsideClick: false
        });

        const formDataToSend = new FormData();
        Object.keys(formData).forEach(key => {
            formDataToSend.append(key, formData[key]);
        });

        try {
            const response = await fetch('https://rishabh-metals.onrender.com/careerform', {
                method: 'POST',
                body: formDataToSend
            });

            if (response.ok) {
                Swal.fire({
                    icon: 'success',
                    title: 'Application submitted successfully!',
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                    willClose: () => {
                        setFormData({
                            name: '',
                            mobile: '',
                            email: '',
                            subject: '',
                            jobExperience: '',
                            resumeFile: null,
                        });
                    }
                });
            } else {
                const errorText = await response.text();
                console.error('Error submitting application:', errorText);
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: `Error submitting application: ${errorText}`,
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true
                });
            }
        } catch (error) {
            console.error('Error:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Error submitting application',
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true
            });
        }
    };

    const [products, setProducts] = useState([]);
    const contactRef = useRef(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const snapshot = await db.collection('vacancy').get();
                const productsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setProducts(productsData);
            } catch (error) {
                console.error('Error fetching products: ', error);
            }
        };

        fetchProducts();
    }, []);

    const scrollToForm = () => {
        if (contactRef.current) {
            contactRef.current.scrollIntoView({ behavior: 'smooth' });
        }
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
                        <div className={`carousel-item ${activeSlide === 0 ? "active" : ""}`} style={{ backgroundImage: "url(/Carousel/about-us4.jpeg)" }}>
                            <div className="carousel-container">
                                <div className="container">
                                    <div className="text" id='text'>
                                        <h2 className="animate__animated animate__fadeInDown" data-aos="fade-down">Career Opportunity</h2>
                                        <h3 className="animate__animated animate__fadeInTop" data-aos="fade-up" style={{ color: 'white' }}>
                                            Are you interested in growing your career with us?
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="contact1" className="contact section-bg" style={{ backgroundColor: '#ffffff' }}>
                <div className="container" data-aos="fade-up">
                    <div className="section-title text-center">
                        <h1>Career Opportunity</h1>
                        <div className="container">
                            <h6 className="row mr-5">
                                We’re searching worldwide for experienced leaders and passionate emerging professionals
                                in many disciplines—from science and engineering to sales to accounting & finance to information technology.
                            </h6>
                        </div>
                    </div>
                </div>
            </section>
            <section id="contact1" className="contact section-bg" style={{ backgroundColor: '#e8f2fe', height: '400px' }}>
                <div className="container" data-aos="fade-up">
                    <div className="row">
                        <div className="section-title text-center">
                            <h1 className="text-center" id="career-text">Application Process</h1>
                        </div>
                        <div className="col">
                            <div className="row">
                                <div className="row" id="career-row">
                                    <div className="col">
                                        <div className="info-box mt-4">
                                            <a href="">
                                                <i className="fa-solid fa-magnifying-glass"></i>
                                            </a>
                                            <p>Use our careers section to find a job that fits your experience</p>
                                        </div>
                                    </div>
                                    <div className="arrow">
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </div>
                                    <div className="col">
                                        <div className="info-box mt-4">
                                            <i className="fa-regular fa-note-sticky"></i>
                                            <p>Apply through our careers section and a recruiter will reach you</p>
                                        </div>
                                    </div>
                                    <div className="arrow">
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </div>
                                    <div className="col">
                                        <div className="info-box mt-4">
                                            <i className="fa-solid fa-book"></i>
                                            <p>Interview takes place either virtually or in person</p>
                                        </div>
                                    </div>
                                    <div className="arrow">
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </div>
                                    <div className="col">
                                        <div className="info-box mt-4">
                                            <i className="fa-solid fa-book"></i>
                                            <p>Become a part of the RMC family</p>
                                            <br />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact1" className="contact section-bg" style={{ backgroundColor: '#ffffff' }}>
                <div className="container" data-aos="fade-up">
                    <div className="section-title text-center pt-5">
                        <h1>Latest Jobs Openings</h1>
                        <div className="container">
                            <h6 className="text-center" id='subheading'>
                                Look for job posted that match your skill and interest in your career.
                            </h6>
                        </div>
                    </div>
                    <div id='products' className="col-lg-9 mx-auto">
                        <div className="row mx-auto">
                            {products.map((product, index) => (
                                <div className="card mx-auto mb-3" style={{ width: '18rem' }} key={product.id}>
                                    <div className="card-body1">
                                        <h3 className="card-title" style={{ fontSize: '18px', fontWeight: 'bold', marginTop: '0.5rem' }}>
                                            {product.title}
                                        </h3>
                                        <p className="card-text" style={{ textAlign: 'left', marginBottom: '1rem' }}>Position : {product.position}</p>
                                        <p className="card-text" style={{ textAlign: 'left', marginBottom: '1rem' }}>Experience : {product.experience}</p>
                                        <p className="card-text" style={{ textAlign: 'left', marginBottom: '1rem' }}>Qualification : {product.qualification}</p>
                                        <p className="card-text" style={{ textAlign: 'left', marginBottom: '1rem' }}>Note : {product.note}</p>
                                    </div>
                                    <div className="card-footer p-0 no-gutters">
                                        <div className="row no-gutters item-center">
                                            <a onClick={scrollToForm} className="get-started-btn text-center" id='apply'>Apply Now</a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section id="contact" className="contact section-bg" style={{ backgroundColor: '#e8f2fe' }} ref={contactRef}> 
                <div className="container" data-aos="fade-up">
                    <div className="row">
                        <div className="section-title text-center">
                            <div className="container">
                                <h1>Resume Submission</h1>
                                <h5 className="text-center">
                                    Please fill the form and submit your resume for suitable job position in our company.
                                </h5>
                            </div>
                        </div>
                        <div className="col-lg-6 mx-auto pb-5">
                            <form onSubmit={handleSubmit} className="emailform" name="careerform">
                                <div className="row">
                                    <div className="form-group mt-3">
                                        <label>Name<span className="text-danger">*</span></label>
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            id="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group mt-3">
                                        <label>Email Address<span className="text-danger">*</span></label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            id="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group mt-3">
                                        <label>Mobile No.<span className="text-danger">*</span></label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="mobile"
                                            id="mobileNo"
                                            value={formData.mobile}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group mt-3">
                                        <label>Job Applied for<span className="text-danger">*</span></label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="subject"
                                            id="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group mt-3">
                                        <label>Upload Resume/CV <span className="text-danger">*</span> <small>(PDF, Word)</small></label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            id="resumeFile"
                                            name="resumeFile"
                                            accept=".pdf,.doc,.docx,.txt"
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group mt-3">
                                        <label>Job Details & Experience<span className="text-danger"></span></label>
                                        <input
                                            type="text"
                                            className="form-control1"
                                            name="jobExperience"
                                            id="detailDesc"
                                            value={formData.jobExperience}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="text-center mt-5">
                                        <button type="submit" name="submit" className="button">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default Career;
