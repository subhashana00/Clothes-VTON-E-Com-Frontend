import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Collection from './pages/Collection';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Cart from './pages/Cart';
import DiscountBar from './components/DiscountBar'
import Login from './pages/Login';
import PlaceOrder from './pages/PlaceOrder';
import Orders from './pages/Order';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import { Toaster } from "@/components/ui/toaster";
import 'react-toastify/dist/ReactToastify.css';
import VTon from './pages/VTon';
import { CustomSpinner } from './components/ui/CustomSpinner';



const App = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <CustomSpinner />
      </div>
    );
  }

  return (
    <div className='px-0 sm:px-[1vw] md:px-[1vw] lg:px-[1vw] bg-black/2'>
      <Toaster />
      <DiscountBar/>
      <Navbar />
      <SearchBar />
      <AnimatePresence>
        <Routes location={location} key={location.key}>
          <Route path='/' element={
            <motion.div 
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -50 }} 
              transition={{ duration: 0.5 }}
            >
              <Home />
            </motion.div>
          } />
          <Route path='/collection' element={
            <motion.div 
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -50 }} 
              transition={{ duration: 0.5 }}
            >
              <Collection />
            </motion.div>
          } />
          <Route path='/about' element={
            <motion.div 
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -50 }} 
              transition={{ duration: 0.5 }}
            >
              <About />
            </motion.div>
          } />
          <Route path='/contact' element={
            <motion.div 
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -50 }} 
              transition={{ duration: 0.5 }}
            >
              <Contact />
            </motion.div>
          } />
          <Route path='/product/:productId' element={
            <motion.div 
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -50 }} 
              transition={{ duration: 0.5 }}
            >
              <Product />
            </motion.div>
          } />
          <Route path='/cart' element={
            <motion.div 
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -50 }} 
              transition={{ duration: 0.5 }}
            >
              <Cart />
            </motion.div>
          } />
          <Route path='/login' element={
            <motion.div 
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -50 }} 
              transition={{ duration: 0.5 }}
            >
              <Login />
            </motion.div>
          } />
          <Route path='/place-order' element={<PlaceOrder/>} />
          <Route path='/place-order ' element={
            <motion.div 
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -50 }} 
              transition={{ duration: 0.5 }}
            >
              <PlaceOrder />
            </motion.div>
          } />
          <Route path='/orders' element={
            <motion.div 
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -50 }} 
              transition={{ duration: 0.5 }}
            >
              
              <Orders />
            </motion.div>
          } />
          <Route path="/vton/:productId" element={
            <motion.div 
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -50 }} 
              transition={{ duration: 0.5 }}
            >
              <VTon />
            </motion.div>
          } />
        </Routes>
        
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
