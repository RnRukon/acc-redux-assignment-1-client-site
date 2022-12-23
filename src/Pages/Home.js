import React from 'react'
import Header from './Components/Header'
import Footer from './Footer'
import NavigationBar from './NavigationBar'
import Products from './Components/Products/Products'


function Home() {


  return (
    <div className=' dark:bg-slate-800'>
      <NavigationBar />
      <Header />
      <Products />
       <Footer />
    </div>

  )
}

export default Home