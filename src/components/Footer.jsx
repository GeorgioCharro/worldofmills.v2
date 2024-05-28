import { Facebook, Twitter, Instagram, YouTube, Phone, Email, LocationOn, Send } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-black text-white p-10 mt-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <h2 className="text-xl font-bold">{t('about_us')}</h2>
          <p>
            {t('footer_about_text')}
          </p>
          <div className="flex space-x-4">
            <Facebook className="cursor-pointer" />
            <Twitter className="cursor-pointer" />
            <Instagram className="cursor-pointer" />
            <YouTube className="cursor-pointer" />
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font-bold">{t('newsletter')}</h2>
          <p>{t('newsletter_text')}</p>
          <div className="flex">
            <input
              type="email"
              placeholder={t('enter_email')}
              className="w-full p-2 rounded-l bg-gray-800 text-white border-none focus:outline-none"
            />
            <button className="bg-yellow-500 text-black p-2 rounded-r">
              <Send />
            </button>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font-bold">{t('get_in_touch')}</h2>
          <div className="flex items-center space-x-2">
            <Phone className="bg-yellow-500 p-2 rounded-full text-black" />
            <p>908 9098 987 98</p>
          </div>
          <div className="flex items-center space-x-2">
            <Email className="bg-yellow-500 p-2 rounded-full text-black" />
            <p>info@webmail.com</p>
          </div>
          <div className="flex items-center space-x-2">
            <LocationOn className="bg-yellow-500 p-2 rounded-full text-black" />
            <p>123 Street Name, City, Country</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-10">
        <p>© {t('copyright')} <span className="font-bold text-yellow-500">WorldOfMills</span> {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}

export default Footer;
