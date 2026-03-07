
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SearchProvider } from "./context/SearchContext";
import HomePage from "./components/HomePage/HomePage";
import ProductsListPage from "./components/ProductsListPage/ProductsListPage";
import ContactPage from "./components/ContactPage/ContactPage";
import ProductDetail from "./components/ProductDetail/ProductDetail";









export default function App() {

  return (
    <BrowserRouter>
      <SearchProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsListPage />} />
          <Route path="/products/:category" element={<ProductsListPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/product-detail/:id" element={<ProductDetail />} />
        </Routes>
      </SearchProvider>
    </BrowserRouter>
  );
}
