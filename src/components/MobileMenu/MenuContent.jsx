import React from 'react';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

const MenuContent = () => {
    const { t } = useTranslation();

    return (
        <div className="mobile-menu-bottom">
            <ul className="space-y-4 ml-8 text-white">
                <li className="bottom-item flex items-center space-x-3">
                    <AiOutlineMail className="icon text-lg" />
                    <span>{t('email_address', { email: 'worldofmills0@gmail.com' })}</span>
                </li>
                <li className="bottom-item flex items-center space-x-3">
                    <AiOutlinePhone className="icon text-lg" />
                    <span>{t('phone_number', { phone: '+971 52 621 1664' })}</span>
                </li>
            </ul>
            <div className="bottom-btn mx-auto w-max">
                <Link to="/contact" className="d-btn theme-btn d-block text-white">
                    {t('contact_us')}
                </Link>
            </div>
        </div>
    );
};

export default MenuContent;
