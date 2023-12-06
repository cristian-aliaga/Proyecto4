import React from 'react'
import { MainCarousel } from '../components/MainCarousel'
import { Cards } from '../components/Cards'
import '../styles/styles.css'

export const Home = () => {
  return (
    <>
      <div className="divContainer">
        <MainCarousel />
      </div>
      <div className="divContainer">
        <Cards />
      </div>
    </>
  )
}