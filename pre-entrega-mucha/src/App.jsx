import React from "react";
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart } from "./components/Cart/Cart";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer
                greeting={"Tienda de Instrumentos Musicales"}
              />
            }
          />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
