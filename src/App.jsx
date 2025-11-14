import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="">
      <Router>
        <Navbar />
        <main className="grow pt-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </Router>

      <footer className="">
        <Footer />
      </footer>
    </div>
  );
}

export default App;

//flex flex-col min-h-screen
