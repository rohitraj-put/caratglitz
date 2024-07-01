import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import QuickView from './components/QuickView';
import ProductDetail from './components/ProductDetail';
import Loading from './components/Loading';
import NotFoundPage from './components/NotFoundPage';
import Contact from './components/Contact';
import ScrollTop from './components/ScrollTop';
import User from './components/userProfile/User';
import Cart from './components/Cart';
import Pendant from './components/ProductCategory/Pendant';
import Ring from './components/ProductCategory/Ring';
import Necklace from './components/ProductCategory/Necklace';
import Earrings from './components/ProductCategory/Earrings';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <BrowserRouter>
      <ScrollTop />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/QuickView" element={<QuickView />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/userProfile" element={<User />} />
        <Route path="/cartlist" element={<Cart />} />

        {/* Product Category Routes */}
        <Route path='/Pendant' element={<Pendant />} />
        <Route path='/Ring' element={<Ring />} />
        <Route path='/Necklace' element={<Necklace />} />
        <Route path='/Earrings' element={<Earrings />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
