import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Navbar from './Pages/Home/Components/Navbar';
import Footer from './Pages/Home/Components/Footer';
import Admin from './Pages/Dashboard/Admin/Admin';
import User from './Pages/Dashboard/user/user';
import NewEntry from './Pages/Dashboard/Admin/NewEntry';
import ViewEntry from './Pages/Dashboard/Admin/ViewEntry';
import SearchEntry from './Pages/Dashboard/Admin/SearchEntry';
import RequestAccess from './Pages/Dashboard/Admin/RequestAccess';
import UserLogs from './Pages/Dashboard/user/UserLogs';
import Experiences from './Pages/Experiences/Experiences';
import AuthorisedRequests from './Pages/Dashboard/user/AuthorisedRequests';
import PendingRequests from './Pages/Dashboard/user/PendingRequests';



function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar></Navbar>

          <Routes>
            <Route path="/dashboard/admin" element={<Admin></Admin>}></Route>
            <Route path="/dashboard/admin/newentry" element={<NewEntry></NewEntry>}></Route>
            <Route path="/dashboard/admin/viewentry" element={<ViewEntry></ViewEntry>}></Route>
            <Route path="/dashboard/admin/searchentry" element={<SearchEntry></SearchEntry>}></Route>
            <Route path="/dashboard/admin/requestaccess" element={<RequestAccess></RequestAccess>}></Route>
            <Route path="/dashboard/user" element={<User></User>}></Route>
            <Route path="/dashboard/user/logs" element={<UserLogs></UserLogs>}></Route>
            <Route path="/dashboard/user/pending" element={<AuthorisedRequests></AuthorisedRequests>}></Route>
            <Route path="/dashboard/user/authorised" element={<PendingRequests></PendingRequests>}></Route>
            {/* <Route path="/dashboard/user" element={<User></User>}></Route> */}
          </Routes>


        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          {/* <Route path="/events" element={<Events></Events>}></Route>
          <Route path="/gallery" element={<Gallery></Gallery>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route> */}
          <Route path="/Experiences" element={<Experiences></Experiences>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>

    </div>
  );
}

export default App;
