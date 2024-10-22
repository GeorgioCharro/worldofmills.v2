/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase.config'; // Import Firestore instance
import { toast } from 'react-toastify'; // Toast notifications (optional)
import FormInput from './FormInput';

function ContactForm({ title, heading }) {
    // STATES
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    // HANDLER FUNCTIONS
    const onChangeHandler = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [id]: value }));
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        try {
            // Save data to Firebase "quotation" collection
            await addDoc(collection(db, 'quotation'), formData);
            toast.success('Your quote request was submitted successfully!');
            setFormData({ fullname: '', email: '', phone: '', subject: '', message: '' });
        } catch (error) {
            console.error('Error adding document: ', error);
            toast.error('Failed to submit the quote. Please try again.');
        }
    };

    return (
        <section className="contact-form-wrapper section-padding pt-0">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center mb-20">
                        <span>{title}</span>
                        <h1>{heading}</h1>
                    </div>

                    <div className="col-12 col-lg-12">
                        <div className="contact-form">
                            <form onSubmit={onSubmitHandler} className="row contact-form">
                                <FormInput
                                    type="text"
                                    labelFor="fullname"
                                    label="Full Name"
                                    placeholder="Enter Name"
                                    id="fullname"
                                    value={formData.fullname}
                                    onChange={onChangeHandler}
                                />
                                <FormInput
                                    type="email"
                                    labelFor="email"
                                    label="Email Address"
                                    placeholder="Enter Email Address"
                                    id="email"
                                    value={formData.email}
                                    onChange={onChangeHandler}
                                />
                                <FormInput
                                    type="text"
                                    labelFor="phone"
                                    label="Phone Number"
                                    placeholder="Enter Number"
                                    id="phone"
                                    value={formData.phone}
                                    onChange={onChangeHandler}
                                />
                                <FormInput
                                    type="text"
                                    labelFor="subject"
                                    label="Subject"
                                    placeholder="Enter Subject"
                                    id="subject"
                                    value={formData.subject}
                                    onChange={onChangeHandler}
                                />

                                <div className="col-md-12 col-12">
                                    <div className="single-personal-info">
                                        <label htmlFor="message">Enter Message</label>
                                        <textarea
                                            id="message"
                                            placeholder="Enter message"
                                            value={formData.message}
                                            onChange={onChangeHandler}
                                        />
                                    </div>
                                </div>

                                <div className="col-md-12 col-12 text-center">
                                    <input
                                        className="submit-btn"
                                        type="submit"
                                        value="Get A Quote"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactForm;
