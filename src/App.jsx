import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import SpecialDish from "./components/SpecialDish";
import Menue from "./components/Menue";
import Testimonials from "./components/Testimonials";
import Reservations from "./components/Reservations";
import Features from "./components/Features";
import Event from "./components/Event";
import Footer from "./components/Footer";
import Registration from "./components/Registration";
import Login from "./components/login";
import CustomerHome from "./components/customer/CustomerHome";
import AdminDashboard from "./components/staff/AdminDashboard";
import StaffDashboard from "./components/staff/StaffDashboard";

const noLayoutPaths = [
  "/register",
  "/login",
  "/customer/home",
  "/admin/dashboard",
  "/staff/dashboard",
];

function App() {
  const location = useLocation();
  const [showLayout, setShowLayout] = useState(true);

  useEffect(() => {
    setShowLayout(!noLayoutPaths.includes(location.pathname));
  }, [location]);

  return (
    <>
      {showLayout && (
        <>
          <TopBar />
          <Header />
        </>
      )}

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route
          path="/services"
          element={
            <>
              <Services />
              <Event />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/menue"
          element={
            <>
              <Menue />
              <Testimonials />
            </>
          }
        />
        <Route
          path="/reservations"
          element={
            <>
              <Reservations />

              {showLayout && <Footer />}
            </>
          }
        />
        <Route path="/special-dish" element={<SpecialDish />} />
        <Route path="/features" element={<Features />} />

        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/customer/home" element={<CustomerHome />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/staff/dashboard" element={<StaffDashboard />} />
      </Routes>
    </>
  );
}

export default App;
