/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase.config'; // Firestore instance
import { toast } from 'react-toastify'; // Toast notifications
import FormInput from './FormInput';
import { useTranslation } from 'react-i18next'; // Import useTranslation

function ContactForm({ title, heading }) {
    const { t } = useTranslation(); // Access translation function

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
            await addDoc(collection(db, 'quotation'), formData);
            toast.success(t('toast_success')); // Success message
            setFormData({ fullname: '', email: '', phone: '', subject: '', message: '' });
        } catch (error) {
            console.error('Error adding document: ', error);
            toast.error(t('toast_error')); // Error message
        }
    };

    return (
        <section className="contact-form-wrapper section-padding pt-0">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center mb-20">
                        <span>{t('contact_form_title')}</span>
                        <h1>{t('contact_form_heading')}</h1>
                    </div>

                    <div className="col-12 col-lg-12">
                        <div className="contact-form">
                            <form onSubmit={onSubmitHandler} className="row contact-form">
                                <FormInput
                                    type="text"
                                    labelFor="fullname"
                                    label={t('contact_form_fullname_label')}
                                    placeholder={t('contact_form_fullname_placeholder')}
                                    id="fullname"
                                    value={formData.fullname}
                                    onChange={onChangeHandler}
                                />
                                <FormInput
                                    type="email"
                                    labelFor="email"
                                    label={t('contact_form_email_label')}
                                    placeholder={t('contact_form_email_placeholder')}
                                    id="email"
                                    value={formData.email}
                                    onChange={onChangeHandler}
                                />
                                <FormInput
                                    type="text"
                                    labelFor="phone"
                                    label={t('contact_form_phone_label')}
                                    placeholder={t('contact_form_phone_placeholder')}
                                    id="phone"
                                    value={formData.phone}
                                    onChange={onChangeHandler}
                                />
                                <FormInput
                                    type="text"
                                    labelFor="subject"
                                    label={t('contact_form_subject_label')}
                                    placeholder={t('contact_form_subject_placeholder')}
                                    id="subject"
                                    value={formData.subject}
                                    onChange={onChangeHandler}
                                />

                                <div className="col-md-12 col-12">
                                    <div className="single-personal-info">
                                        <label htmlFor="message">
                                            {t('contact_form_message_label')}
                                        </label>
                                        <textarea
                                            id="message"
                                            placeholder={t('contact_form_message_placeholder')}
                                            value={formData.message}
                                            onChange={onChangeHandler}
                                        />
                                    </div>
                                </div>

                                <div className="col-md-12 col-12 text-center">
                                    <input
                                        className="submit-btn"
                                        type="submit"
                                        value={t('submit_btn_text')}
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
