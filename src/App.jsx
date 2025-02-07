import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home";
import QuickView from "./components/QuickView";
import ProductDetail from "./components/ProductDetail";
import Loading from "./components/Loading";
import NotFoundPage from "./components/NotFoundPage";
import ScrollTop from "./components/ScrollTop";
import User from "./components/userProfile/User";
import Cart from "./components/Cart";
import Pendant from "./components/ProductCategory/Pendant";
import Ring from "./components/ProductCategory/Ring";
import Necklace from "./components/ProductCategory/Necklace";
import Earrings from "./components/ProductCategory/Earrings";
import SignIn from "./components/Authentication/SignIn";
import Register from "./components/Authentication/Register";
import APIContextProvider from "./context/APIContextProvider";
import Signup from "./components/Authentication/Signup";

function App() {
  const [loading, setLoading] = useState(true);
  const isAuthenticated = !!localStorage.getItem("token");

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <BrowserRouter>
      <APIContextProvider>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/QuickView" element={<QuickView />} />
          {isAuthenticated ? (
            // Redirect to home if user is authenticated
            <Route path="*" element={<Navigate to="/" />} />
          ) : (
            <>
              <Route path="/signin" element={<SignIn />} />
              {/* <Route path="/register" element={<Register />} /> */}
              <Route path="/register" element={<Signup />} />
            </>
          )}
          {/* Other routes */}
          <Route path="/userProfile" element={<User />} />
          <Route path="/cartlist" element={<Cart />} />

          {/* Product Category Routes */}
          <Route path="/Pendants" element={<Pendant />} />
          <Route path="/Ring" element={<Ring />} />
          <Route path="/Necklace" element={<Necklace />} />
          <Route path="/Earrings" element={<Earrings />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </APIContextProvider>
    </BrowserRouter>
  );
}

export default App;
