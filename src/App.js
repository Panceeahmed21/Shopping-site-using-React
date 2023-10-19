import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/Nav/Nav.jsx";
import Product from "./Components/Products/Product";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import About from "./Components/About/About";
import Counter from "./Components/Counter/Counter";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="container py-5">
                <div className="row g-4">
                  <Product />
                </div>
              </div>
            </>
          }
        />

        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </Router>
  );
}

export default App;
