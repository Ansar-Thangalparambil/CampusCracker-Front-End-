import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Dashboard from './Pages/Dashboard';
import Footer from './components/Footer';
import Landingpage from './Pages/Landingpage';



function App() {
  // js code need to enter here
  return (
    // jsx code need to enter here
<> {/* Empty tag  jsx expression Every element inside return must be in a single parent element */}
 {/*  jsx expression Every element inside return must be in a single parent element */}
      
      <Routes>
        <Route path='/' element={<Landingpage/>} />
        <Route path='/home' element={<Home/>} />
        {/* <Route path="/" element={<Reglog />} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer/>
</>
  );
}

export default App;
