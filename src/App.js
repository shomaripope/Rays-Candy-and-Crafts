import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from './components/Header';
// import Hero from './components/Hero';
// import ReviewSection from './components/ReviewSection';
// import FeatuedCandy from './components/FeatuedCandy';
// import FeaturedCrafts from './components/FeaturedCrafts';
// import Footer from './components/Footer';

import HomePage from './pages/HomePage'
import CandyPage from './pages/CandyPage'
import CraftsPage from './pages/CraftsPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import NoPage from './pages/NoPage'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element= {<HomePage />} />
          <Route path="/home" element= {<HomePage />} />
          <Route path="/candy" element= {<CandyPage />} />
          <Route path="/crafts" element= {<CraftsPage />} />
          <Route path="/about" element= {<AboutPage />} />
          <Route path="/contact" element= {<ContactPage />} />
          <Route path="*" element= {<ContactPage />} />
        </Routes>
      </BrowserRouter>
      {/* <Header />
      <Hero />
      <ReviewSection />
      <FeatuedCandy />
      <FeaturedCrafts />
      <Footer /> */}

    </div>
  );
}

export default App;
