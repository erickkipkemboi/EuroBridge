import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Carousel } from '@/components/ui/carousel'
import Content1 from './components/Content1'
import Content2 from './components/Content2'

function page() {
  return (
    <div>
      <Navbar/>
      <Carousel/>
      <Content1/>
      <Content2/>
      <Footer/>
    </div>
  )
}

export default page
