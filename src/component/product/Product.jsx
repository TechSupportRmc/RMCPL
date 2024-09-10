import React, { useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import "./Product.css"

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import firebaseConfig from '../../pages/firebase/firebaseConfig';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

const Product = () => {

    const [producthome, setProductHome] = useState([]);

    useEffect(() => {
        const fetchProductAbout = async () => {
            try {
                const snapshot = await db.collection('homeproducts').get();
                const fetchedSlides = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setProductHome(fetchedSlides);
            } catch (error) {
                console.error('Error fetching slides: ', error);
            }
        };

        fetchProductAbout();
    }, []);

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <section id="pricing" className="pricing">
            <div className="container" data-aos="fade-up">
                <div className="row align-items-center">
                    {producthome.map((product, index) => (
                        <div className="col-lg-4" key={product.id}>
                            <div className="box" data-aos="zoom-in" data-aos-delay="100">
                                <a href={product.link} className="get-started-btn" style={{ width: '100%', fontSize: '150%' }}>{product.title}</a>
                                <p style={{ textAlign: 'left' }}>
                                    {product.description}
                                </p>
                                <a href={product.link} className="get-started-btn">View Products</a>
                                <div className="price-img">
                                    <img src={product.image} alt={product.title} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Product;
