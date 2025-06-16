import './App.css';
import Navbar from './assets/Components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Shop from './assets/Pages/Shop';
import ProductDetail from './assets/Pages/ProductDetail';
import Cart from './assets/Pages/Cart';
import Homepage from './assets/Pages/HomePage';
import Footer from './assets/Components/Footer';
import ScrollToTop from './assets/Components/ScrollToTop';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop/>
   
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id/:title" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      
      <Footer />
      <Toaster 
        position="top-center"
        toastOptions={{
          success: {
            style: {
              background: '#4ade80', // green
              color: 'white',
            },
          },
          error: {
            style: {
              background: '#f87171', // red
              color: 'white',
            },
          },
        }}
      />
    </>
  );
}

export default App;
