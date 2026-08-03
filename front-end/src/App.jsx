import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import About from "./pages/About";
import Home from "./pages/Home";
import New from "./pages/New";
import Show from "./pages/Show";
import Edit from "./pages/Edit";
import Error from "./pages/Error";

function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("saucesource-theme") || "dark"
  );

  useEffect(() => {
    document.body.classList.toggle("light", theme === "light");
    localStorage.setItem("saucesource-theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <div className="App">
      <a className="skip-to-content" href="#main-content">Skip to main content</a>
      <NavBar theme={theme} toggleTheme={toggleTheme} />
      <br />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sauces" element={<Index />} />
          <Route path="/sauces/new" element={<New />} />
          <Route path="/sauces/:id" element={<Show />} />
          <Route path="/sauces/:index/edit" element={<Edit />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
