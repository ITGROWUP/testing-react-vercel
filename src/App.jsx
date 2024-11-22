import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Product from "./components/Product";

function App() {
  return (
    <div className="font-nexa">
      <Navbar/>
      <Home/>
      <Product/>
      <Footer/>
    </div>
  );
}

export default App;
