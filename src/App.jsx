import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
function App() {

  return (
   <>
     
      <Header/>

        <main className='border-2 border-dotted mb-5 mt-5'>
          <section className="secao">section1</section>
          <section className="secao">section2</section>
          <section className="secao">section3</section>
        </main>

        <Footer/>
     
   </>
  )
}

export default App
