import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import Achievement from './Components/Achievement/Achievement';
import Program from './Components/Program/Program';
import Member from './Components/Member/Member';
import Dashboard from './Components/Dashboard/Dashboard';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div>
      
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/achievement" element={<Achievement />} />
        <Route path="/program" element={<Program />} />
        <Route path="/member" element={<Member />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </div>

  );
}

export default App;
