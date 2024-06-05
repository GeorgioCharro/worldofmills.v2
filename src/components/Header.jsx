import React, { useState, useContext } from 'react';
import Logo from '../assets/Logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { LanguageContext } from '../contexts/LanguageContext';
import { t } from 'i18next';
import { Link } from 'react-router-dom';

function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { language, toggleLanguage } = useContext(LanguageContext);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleButtonClick = () => {
    toggleLanguage();
    toggleSidebar();
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:worldofmills1@gmail.com';
  };

  const handleContactUsClick = () => {
    window.location.href = 'https://wa.me/971526211664';
  };

  return (
    <div>
      <div className="flex justify-between items-center p-4 bg-white shadow-md">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-10 w-auto" />
          <span className="text-3xl font-bold text-black ml-2">
           <Link to={'/'}><p>WorldOfMills</p></Link> 
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-black cursor-pointer" onClick={toggleSidebar}>
            <MenuIcon />
          </div>
        </div>
      </div>
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleSidebar}></div>
      )}
      <div className={`fixed top-0 right-0 h-full bg-black text-white z-50 transform ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="flex justify-between items-center p-4">
          <h2 className="text-2xl font-bold">Menu</h2>
          <CloseIcon className="cursor-pointer" onClick={toggleSidebar} />
        </div>
        <ul className="p-4 space-y-4 font-semibold text-lg ml-4">
          <li><Link to={'/'}>{t('Home')}</Link></li>
          <li> <button onClick={handleContactUsClick}>{t('Contact Us')}</button></li>
          <li>{t('Catalogue')}</li>
          <li className='m-4 text-sm'><Link to={'/category/Thyme%20and%20Spices'}>{t('Thyme And Spices')}</Link></li>
          <li className='m-4 text-sm'><Link to={'/category/Nuts'}>{t('Nuts')}</Link></li>
          <li className='m-4 text-sm'><Link to={'/category/Feeder'}>{t('Animal Feed Production Lines')}</Link></li>
          <li className='m-4 text-sm'><Link to={'/category/Chocolate'}>{t('Chocolate Machines')}</Link></li>
          <li className='m-4 text-sm'><Link to={'/category/Dairy'}>{t('Dairy')}</Link></li>
          <li className='m-4 text-sm'><Link to={'/category/Filling'}>{t('Filtering Machines')}</Link></li>
          <li className='m-4 text-sm'><Link to={'/category/Others'}>{('Others')}</Link></li>

          
        </ul>
        <button onClick={handleButtonClick} className="text-lg font-bold ml-4">
          {language === 'en' ? 'Arabic' : 'English'}
        </button>
        <div className="p-4 space-y-4">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={handleEmailClick}>
            <EmailIcon />
            <p>worldofmills1@gmail.com</p>
          </div>
          <div className="flex items-center space-x-2">
            <PhoneIcon />
            <p>+971 52 621 1664</p>
          </div>
          <div className="flex justify-center">
            <Link className="bg-yellow-500 text-white font-bold p-4 rounded-lg mt-4" to={'/contact-form'} >
              {t('Get a Quote')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
