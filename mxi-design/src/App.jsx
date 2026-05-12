
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SearchProvider } from "./context/SearchContext";
import { ProductProvider } from "./context/ProductContext";
import HomePage from "./components/HomePage/HomePage";
import ProductsListPage from "./components/ProductsListPage/ProductsListPage";
import ContactPage from "./components/ContactPage/ContactPage";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import AboutUsPage from "./components/AboutUsPage/AboutUsPage";









export default function App() {

  return (
    <BrowserRouter>
      <SearchProvider>
        <ProductProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsListPage />} />
            <Route path="/products/:category" element={<ProductsListPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/product-detail/:id" element={<ProductDetail />} />
          </Routes>
        </ProductProvider>
      </SearchProvider>
    </BrowserRouter>
  );
}
