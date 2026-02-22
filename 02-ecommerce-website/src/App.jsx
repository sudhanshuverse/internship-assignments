import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Collection from "./pages/Collection";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductDetails from "./pages/ProductDetails";

const App = () => {
  return (
    <>
      {/* HEADER */}
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Collection" element={<Collection />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        {/* IMPORTANT ROUTE */}
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>

      {/* FOOTER */}
      <Footer />
    </>
  )
}


export default App;