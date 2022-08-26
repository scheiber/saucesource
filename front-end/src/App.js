import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import About from "./pages/About";
import Home from "./pages/Home";
import New from "./pages/New";
import Show from "./pages/Show";
// import Edit from "./pages/Edit";
import Error from "./pages/Error";

function App() {
  return (
    <div className="App">
      <NavBar />
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sauces" element={<Index />} />
        <Route path="/sauces/new" element={<New />} />
        <Route path="/sauces/:id" element={<Show />} />
        {/* <Route path="/sauces/:index/edit" element={<Edit />} /> */}
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
