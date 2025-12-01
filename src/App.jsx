import "./index.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Login from "./pages/LoginPage/LoginPage.jsx";
import ForgotPassword from "./pages/LoginPage/ForgotPasswordPage.jsx";
import Register from "./pages/RegisterPage/RegisterPage.jsx";
import ForgotPasswordSuccess from "./components/login/ForgotPasswordSuccess.jsx";
import Pricing from "./pages/Payment/Pricing.jsx";
import FloatingToggleBox from "./components/FloatingToggleBox";

import PaymentSuccessPage from "./pages/Payment/PaymentSuccessPage.jsx";

import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import About from "./pages/About.jsx";
import Profile from "./pages/Profile.jsx";
import { useAppContext } from "./contexts/useAppContext.jsx";
import Checkout from "./pages/Checkout.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Receipts from "./pages/receipts.jsx";

const Layout = ({ children }) => {
  const location = useLocation();
  const { theme } = useAppContext();

  const hideLayoutPages = [
    "/login",
    "/Login",
    "/Register",
    "/ForgotPassword",
    "/ForgotPasswordSuccess",
  ];
  const hideLayout = hideLayoutPages.includes(location.pathname);

  return (
    <>
      {!hideLayout && <Navbar />}

      {<FloatingToggleBox />}

      <main className={`${theme === "dark" ? "bg-dark-gray" : ""}`}>
        {children}
        {!hideLayout && <Footer />}
      </main>
    </>
  );
};

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <Router>
      <Layout>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/ForgotPasswordSuccess"
            element={<ForgotPasswordSuccess />}
          />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/PaymentSuccessPage" element={<PaymentSuccessPage />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/receipts" element={<Receipts />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
