
import Header from "./components/Header";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from "./components/Footer";
import { LanguageProvider } from "./contexts/LanguageContext";
import  Category  from "./pages/Category";
function App() {
  return (<>
  <LanguageProvider> 
  <Header/>
  <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:machineCategory" element={<Category />} />
      </Routes>
    </Router>
  <Footer />
  </LanguageProvider>
  </>
   
  );
}

export default App;
