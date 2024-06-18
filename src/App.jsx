import React, { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import QuickView from './components/QuickView'
import ProductDetail from './components/ProductDetail'
import Loading from './components/Loading'
import NotFoundPage from './components/NotFoundPage'
import Head from './components/Head'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])
  if (loading) {
    return <Loading />
  }
  return (
    <>
      <Head />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} >
          <Route path='Quickview' element={<QuickView />} />
        </Route>
        <Route path='/productdetail' element={<ProductDetail />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
