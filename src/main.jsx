import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header/header'
import Section from './Main/section'
import Footer from './Footer/footer'
import './style.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Section />
    <Footer />
  </React.StrictMode>,
)
