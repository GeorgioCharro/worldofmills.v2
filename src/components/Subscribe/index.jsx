import React, { useState } from 'react';
import { FaComments } from 'react-icons/fa';
import { collection, addDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { db } from '../../firebase.config';
import bg from '../../assets/img/subscribe_bg.jpg';
import img from '../../assets/img/subscribe_left_bg.jpg';
import { useTranslation } from 'react-i18next'; // Import useTranslation

function Subscribe() {
    const { t } = useTranslation(); // Access translation function
    const [email, setEmail] = useState('');

    const onChangeHandler = (e) => setEmail(e.target.value);

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        try {
            await addDoc(collection(db, 'newsletter'), { email });
            toast.success(t('subscription_success')); // Display success message
            setEmail(''); // Clear the input field
        } catch (error) {
            console.error('Error adding document: ', error);
            toast.error(t('subscription_failure')); // Display failure message
        }
    };

    return (
        <section
            className="subscribe-box-wrapper text-white bg-overlay section-padding bg-cover"
            style={{ backgroundImage: `url(${bg})` }}
        >
            <div
                className="subscribe_left_bg d-none d-xl-block bg-cover"
                style={{ backgroundImage: `url(${img})` }}
            />
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-12 xl:ml-auto">
                        <div className="cta-contents flex flex-col items-center xl:items-start text-center xl:text-left space-y-6">
                            <div
                                className="icon bg-yellow-400 rounded-full"
                                style={{
                                    width: '80px',
                                    height: '80px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <FaComments style={{ fontSize: '40px', color: 'black' }} />
                            </div>

                            <h1 className="text-3xl font-bold">{t('subscribe_heading')}</h1>
                            <p className="text-lg">{t('subscribe_desc')}</p>

                            <div className="subscribe-form w-full">
                                <form
                                    onSubmit={onSubmitHandler}
                                    className="flex w-full items-stretch"
                                >
                                    <input
                                        value={email}
                                        onChange={onChangeHandler}
                                        type="email"
                                        placeholder={t('enter_email_placeholder')}
                                        required
                                        className="p-3 flex-1 rounded-l-md border text-white border-gray-300 text-black"
                                    />
                                    <button
                                        className="submit-btn bg-blue-600 text-white px-6 rounded-r-md hover:bg-blue-700 transition duration-300"
                                        type="submit"
                                    >
                                        {t('subscribe_button')}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Subscribe;
