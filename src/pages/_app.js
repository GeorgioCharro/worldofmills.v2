import '../index.css';
import '../assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../i18n'; // Your i18next config
import MainMenu3 from '../components/Header3/MainMenu3';
import { LanguageProvider } from '../contexts/LanguageContext';
import Footer from '../components/Footer';
export default function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <MainMenu3 />
      <Component {...pageProps} />
      <Footer />
    </LanguageProvider>
  );
}
