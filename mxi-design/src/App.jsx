
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SearchProvider } from "./context/SearchContext";
import { ProductProvider } from "./context/ProductContext";
import { NewsProvider } from "./context/NewsContext";
import HomePage from "./components/HomePage/HomePage";
import ProductsListPage from "./components/ProductsListPage/ProductsListPage";
import ContactPage from "./components/ContactPage/ContactPage";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import AboutUsPage from "./components/AboutUsPage/AboutUsPage";
import NewsPage from "./components/NewsPage/NewsPage";
import NewsDetailPage from "./components/NewsDetailPage/NewsDetailPage";









export default function App() {

  return (
    <BrowserRouter>
      <SearchProvider>
        <ProductProvider>
          <NewsProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsListPage />} />
              <Route path="/products/:category" element={<ProductsListPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/about" element={<AboutUsPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/news/all" element={<NewsPage showAllEntries />} />
              <Route path="/news/:id" element={<NewsDetailPage />} />
              <Route path="/product-detail/:id" element={<ProductDetail />} />
            </Routes>
          </NewsProvider>
        </ProductProvider>
      </SearchProvider>
    </BrowserRouter>
  );
}
