import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About';
import Blogs from './Pages/Blogs';
import Footer from './Components/Footer/Footer';
import BuildYourHouse from './Pages/BuildYourHouse'
import VendorRegistration from './Pages/VendorRegistration'
import VendorLogin from './Pages/VendorLogin';
import PreLoader from './Components/PreLoader/PreLoader';
import { useEffect, useState } from 'react';


function App() {
  const [loading, setLoading] =useState(true);

  useEffect(()=>{
    const timer=setTimeout(()=>{
      setLoading(false);

    },4000);
    return ()=> clearTimeout(timer);
  },[]);

  return (
    
    <div className='app'>
      <BrowserRouter>
      {loading ? (<PreLoader/>):(
        <>
      <Navbar/>
      <Routes>
        <Route path="/build-your-house" Component={BuildYourHouse}/>
        <Route path="/vendor-registration" Component={VendorRegistration}/>
        <Route path="/vendor-login" element={<VendorLogin />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
      </>
      )}
      </BrowserRouter>
      
    </div>
  );
}

export default App;
