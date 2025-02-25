import './App.css';
import { Routes, Route } from 'react-router-dom';
import Shop from './assets/Pages/Shop';
import ProductDetail from './assets/Pages/ProductDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Shop />} />
      <Route path="/product/:id/:title" element={<ProductDetail />} />
    </Routes>
  );
}

export default App;
