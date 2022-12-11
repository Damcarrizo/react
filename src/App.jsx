import "./App.css";
import ItemListContainer from "./components/itemlist/itemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./context/cartContext";
import CartView from "./components/CartView/CartView";

function App() {
  let title = <h1> Fornituras </h1>;

  return (
    <CartContextProvider>
      <BrowserRouter>
        <header>
            {title}
            <NavBar />
            <Routes>
              <Route
                path="/"
                element={<ItemListContainer greeting="Productos" />}
              />
              <Route path="/categoria/:id" element={<ItemListContainer />} />
              <Route path="/detail/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<CartView/>}/>
              <Route
                path="*"
                element={<h1>Error. Fijate de volver atras</h1>}
              />
            </Routes>
        </header>
      </BrowserRouter>
    </CartContextProvider>
  );
}
export default App;
