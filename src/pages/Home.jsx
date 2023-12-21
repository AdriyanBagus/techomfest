import React from 'react'
import Navbar from '../component/navbar/Navbar'
import Footer from '../component/footer/Footer'
import Prologe from '../component/prologe/Prologe'
import About from '../component/about/AboutUs'


const Home = () => {
    return (
      <div>
        <Navbar />
        <Prologe />
        <About />
        <Footer />
      </div>
    )
  }

export default Home