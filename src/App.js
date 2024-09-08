import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Landingpage from './Pages/Landingpage';
import Qns from './Pages/Qns';



function App() {
  // js code need to enter here
  return (
    // jsx code need to enter here
<> {/* Empty tag  jsx expression Every element inside return must be in a single parent element */}
 {/*  jsx expression Every element inside return must be in a single parent element */}
      
      <Routes>
        <Route path='/' element={<Landingpage/>} />
        <Route path='/home' element={<Home/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Login register/>} /> {/* Conditional  Rendering Step1*/}
        <Route path="/login" element={<Login />} />
        <Route path="/qns" element={<Qns />} />
      
        {/* <Route path="/" element={<Reglog />} /> */}
      </Routes>
     
  
</>
  );
}

export default App;
