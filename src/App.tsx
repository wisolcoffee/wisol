import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./components/About";
import Product from "./components/Product";
import Home from "./components/Home";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App m-auto w-[1260px]">
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Layout children={<Home />} />} />
            <Route
              path="/product"
              element={<Layout children={<Product />} />}
            />
            <Route
              path="/contact"
              element={<Layout children={<Contact />} />}
            />
            <Route path="/about" element={<Layout children={<About />} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
