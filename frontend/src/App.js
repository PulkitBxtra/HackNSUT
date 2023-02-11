import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Navbar from './Pages/Home/Components/Navbar';
import Footer from './Pages/Home/Components/Footer';


function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          {/* <Route path="/events" element={<Events></Events>}></Route>
          <Route path="/gallery" element={<Gallery></Gallery>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route> */}
          {/* <Route path="/dash" element={<Dash></Dash>}></Route> */}
        </Routes>
      </BrowserRouter>

      <Footer></Footer>
    </div>
  );
}

export default App;
