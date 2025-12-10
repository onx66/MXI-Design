
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Products from "./assets/components/Products/Products";
import Header from "./assets/components/Header/Header";
import Footer from "./assets/components/Footer/Footer";
import Home from "./assets/components/Home/Home";








export default function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}
