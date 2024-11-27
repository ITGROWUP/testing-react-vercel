import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Product from "./components/Product";
import ProdukKami from "./components/ProdukKami";
import Ekspor from "./components/Ekspor";
import Layanan from "./components/Layanan";
import Ecommerce from "./components/Ecommerce";
import Keunggulan from "./components/Keunggulan";
import AOS from "aos";
import "aos/dist/aos.css";
import FloatWa from "./components/FloatWa";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="font-body">
      <Navbar />
      <Home />
      <Product />
      <ProdukKami />
      <Ekspor />
      <Layanan />
      <Keunggulan />
      <Ecommerce />
      <FloatWa />
      <Footer />
    </div>
  );
}

export default App;
