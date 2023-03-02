import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Home from './component/Home';
import Footer from './component/Footer';
import Contact from './component/Contact'
import Service from './component/Service';
import './style/App.scss'
import './style/Header.scss'
import './style/Home.scss'
import './style/Footer.scss'
import './style/Contact.scss'
import './style/Service.scss'
import './style/MediaQuery.scss'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/Service' element={<Service />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
