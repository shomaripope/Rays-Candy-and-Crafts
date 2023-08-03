import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import CandyPage from './pages/CandyPage';
import CraftsPage from './pages/CraftsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CartPage from './pages/CartPage';
import NoPage from './pages/NoPage';
import SingleProductPage from "./pages/SingleProductPage";
import { ShopContextProvider } from "./context/shop-context";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ShopContextProvider>
        <Routes>
          <Route index element= {<HomePage />} />
          <Route path="/home" element= {<HomePage />} />
          <Route path="/candy" element= {<CandyPage />} />
          <Route path="/crafts" element= {<CraftsPage />} />
          <Route path="/about" element= {<AboutPage />} />
          <Route path="/contact" element= {<ContactPage />} />
          <Route path="/product/:id" element= {<SingleProductPage />} />
          <Route path="/cart" element= {<CartPage />} />
          <Route path="*" element= {<NoPage />} />
        </Routes>
        </ShopContextProvider>
      </BrowserRouter>

    </div>
  );
}

export default App;
