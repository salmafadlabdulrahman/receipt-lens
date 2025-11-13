import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Login from "./pages/LoginPage/LoginPage.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const Layout = ({ children }) => {
  const location = useLocation();
  const hideLayoutPages = ["/"];
  const hideLayout = hideLayoutPages.includes(location.pathname);

  return (
    <>
      {!hideLayout && <Navbar />}
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
          <Route path="/" element={<Login />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
