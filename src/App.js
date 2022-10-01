import './App.css';
import { BrowserRouter , Route, Routes } from "react-router-dom";
import Signin from './components/Signin'
import Signup from './components/Signup'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import Sidebar  from './components/Sidebar';
import Landing from './components/Landing'
import LandingHeader from './components/LandingHeader'
import Doctor from './components/Doctor'
function App() {
  return (
    <BrowserRouter>
    <Routes>

      <Route path ="/signin" element={<Signin/>} />
      <Route path ="/signup" element={<Signup/>} />
      <Route path ="/" element={<Landing/>} />
      <Route path ="/dashboard" element={<Dashboard/>} />
      <Route path ="/sidebar" element={<Sidebar/>} />
      <Route path ="/doctor" element={<Doctor/>} />
    </Routes>
        </BrowserRouter>

  );

}

export default App;
