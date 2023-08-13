import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
// Import your components
import Navbar from "./components/Navbar";
import HouseRentals from "./pages/E-com/Products";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Reg from "./pages/Regsiter";
import Item from "./pages/E-com/Item";
import Footer from "./components/Footer";
import Checkout from "./pages/E-com/Checkout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Notfound from "./components/Notfound";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <div className="fixed flex-1 w-full z-10">
          <Navbar />
        </div>

        <Routes>
          <Route path="*" element={<Notfound />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Reg />} />
          <Route path="/product" element={<HouseRentals />} />
          <Route path="/product/:id" element={<Item />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/checkout/:cost" element={<Checkout />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
