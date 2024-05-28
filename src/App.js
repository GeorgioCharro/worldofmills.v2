import Header from "./components/Header";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from "./components/Footer";
import { LanguageProvider } from "./contexts/LanguageContext";
import Category from "./pages/Category";
import ContactForm from "./pages/ContactForm";

function App() {
  return (
    <Router>
      <LanguageProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:machineCategory" element={<Category />} />
          <Route path="/contact-form" element={<ContactForm />} />
        </Routes>
        <Footer />
      </LanguageProvider>
    </Router>
  );
}

export default App;
