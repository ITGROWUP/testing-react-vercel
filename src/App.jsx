import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Product from "./components/Product";
import ProdukKami from "./components/ProdukKami";
import Ekspor from "./components/Ekspor";

function App() {
  return (
    <div className="font-body">
      <Navbar/>
      <Home/>
      <Product/>
      <ProdukKami />
      <Ekspor />
      <Footer/>
    </div>
  );
}

export default App;
