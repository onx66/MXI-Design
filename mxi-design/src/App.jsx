
import "./App.css";

import HomePage from "./components/HomePage/HomePage";
import { SearchProvider } from "./context/SearchContext";
import ProductsListPage from "./components/ProductsListPage/ProductsListPage";
import Radio from "./components/Radio/Radio";









export default function App() {

  return (
    <>
      <SearchProvider>
        <ProductsListPage />
      </SearchProvider>
    </>
  );
}
