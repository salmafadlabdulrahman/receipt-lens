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

import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const Layout = ({ children }) => {
  const location = useLocation();

  const hideLayoutPages = ["/login", "/Register", "/ForgotPassword"];
  const hideLayout = hideLayoutPages.includes(location.pathname);

  return (
    <>
      {!hideLayout && (
        <>
          <Navbar />
        </>
      )}
      <main>{children}</main>
      {!hideLayout && <Footer />}
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
