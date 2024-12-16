import { useState } from "react";

import "./App.css";
import Layout from "./Components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import ProductsPage from "./Components/ProductsPage";
import AboutusPage from "./Components/AboutusPage";
import ContactusPage from "./Components/ContactusPage";
import BasketPage from "./Components/BasketPage";
import SingleItemPage from "./Components/SingleItempage";

function App() {
  const [basket, setBasket] = useState([]);
  const [singleItem, setSingleItem] = useState({});

  return (
    <>
      <BrowserRouter>
        <Layout basket={basket}>
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  basket={basket}
                  onSetBasket={setBasket}
                  onSetSingleItem={setSingleItem}
                />
              }
            />
            <Route
              path="/products"
              element={
                <ProductsPage
                  onSetSingleItem={setSingleItem}
                  basket={basket}
                  onSetBasket={setBasket}
                />
              }
            />
            <Route path="/aboutus" element={<AboutusPage />} />
            <Route path="/contactus" element={<ContactusPage />} />
            <Route
              path="/basket"
              element={<BasketPage basket={basket} onSetBasket={setBasket} />}
            />
            <Route
              path={`/products/${singleItem.id}`}
              element={
                <SingleItemPage
                  singleItem={singleItem}
                  basket={basket}
                  onSetBasket={setBasket}
                />
              }
            />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
