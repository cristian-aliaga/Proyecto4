import React from 'react'
import { MainCarousel } from '../components/MainCarousel'
import { Cards } from '../components/Cards'
import '../styles/styles.css'
import { Footer } from '../components/Footer'

export const Home = () => {
  return (
    <>
    <div className="divContainer">
    <MainCarousel/>
    </div>
    
    <div className="divContainer">
    <Cards/>
    </div>
    <div>
      <Footer/>
    </div>
    </>
  )
}