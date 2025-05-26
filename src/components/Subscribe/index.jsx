import React, { useState } from 'react';
import { FaComments } from 'react-icons/fa';
import { collection, addDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { db } from '../../firebase.config';
import bg from '../../assets/img/subscribe_bg.jpg';
import img from '../../assets/img/subscribe_left_bg.jpg';
import { useTranslation } from 'react-i18next';

function Subscribe() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');

  const onChangeHandler = (e) => setEmail(e.target.value);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'newsletter'), { email });
      toast.success(t('subscription_success'));
      setEmail('');
    } catch (error) {
      console.error('Error adding document: ', error);
      toast.error(t('subscription_failure'));
    }
  };

  return (
    <section
      className="text-white py-5 position-relative"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Optional Left Side Background */}
      <div
        className="d-none d-xl-block position-absolute top-0 start-0 h-100 w-50"
        style={{
          backgroundImage: `url(${img.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="container position-relative">
        <div className="row justify-content-end">
          <div className="col-12 col-xl-7">
            <div className="text-center text-xl-start d-flex flex-column align-items-center align-items-xl-start gap-4">

              <div
                className="rounded-circle"
                style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: '#facc15',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <FaComments style={{ fontSize: '40px', color: 'black' }} />
              </div>

              <h1 className="h3 fw-bold">{t('subscribe_heading')}</h1>
              <p className="fs-5">{t('subscribe_desc')}</p>

              <form
                onSubmit={onSubmitHandler}
                className="d-flex w-100 flex-column flex-sm-row"
              >
                <input
                  type="email"
                  value={email}
                  onChange={onChangeHandler}
                  placeholder={t('enter_email_placeholder')}
                  required
                  className="form-control me-sm-2 mb-2 mb-sm-0"
                />
                <button
                  type="submit"
                  className="btn btn-primary px-4"
                  style={{ backgroundColor: '#facc15', color: 'black', fontWeight: 'bold' }}
                >
                  {t('subscribe_button')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
