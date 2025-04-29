import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import Products from "./pages/Product/Products.jsx";
import ProductPage from "./pages/Product/ProductPage.jsx";

function App() {
  return <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />}>
        <Route path="product-name" element={<ProductPage />} />
      </Route>
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </Router>;
}

export default App;
