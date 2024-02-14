import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Courses, Course, Cart } from "./pages/index";
import { PopupProvider } from "./context/popup_context";
import { CartProvider } from "./context/cart_context";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import SearchBarMobileProvider from "./context/search_bar_mobile_context";

function App() {
  return (
    <BrowserRouter>
      <PopupProvider>
        <CartProvider>
          <SearchBarMobileProvider>
            <ScrollToTop />
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/courses/:category/" element={<Courses />} />
              <Route
                path="/courses/:category/:subcategory"
                element={<Courses />}
              />
              <Route path="/courses/search" element={<Courses />} />
              <Route path="/course/:id" element={<Course />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
            <Footer />
          </SearchBarMobileProvider>
        </CartProvider>
      </PopupProvider>
    </BrowserRouter>
  );
}

export default App;
