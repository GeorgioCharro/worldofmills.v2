import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import { LanguageProvider } from "./contexts/LanguageContext";
import Category from "./pages/Category";
import ContactForm from "./pages/ContactForm";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import Header3 from "./components/Header3";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetails from "./components/ServiceDetails";
import ProjectDetails from "./pages/ProjectDetails";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <LanguageProvider>
        <ScrollToTop />
        <Header3 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:machineCategory" element={<Category />} />
          <Route path="/contact-form" element={<ContactForm />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/profile" element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="contact" element={<Contact />} />
          <Route path="/qr" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services-details" element={<ServiceDetails />} />
          <Route path="/project-details" element={<ProjectDetails />} />
        </Routes>
        <ToastContainer />
        <Footer />
      </LanguageProvider>
    </Router>
  );
}

export default App;
