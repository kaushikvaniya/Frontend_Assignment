import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Contactus from "./Components/Contactus";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Contactlist from "./Components/Contactlist";
import Spacialcontact from "./Components/Spacialcontact";
function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contactus">Contactus</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contactus" element={<Contactus />}>
          <Route path="contactlist" element={<Contactlist />}></Route>
          <Route path=":contactid" element={<Spacialcontact />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
