import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
import Footer from '../../components/Footer/Footer'

const Home = () => {

  const [category, setCategory] = useState("All");

  return (
    <div>

      <div id="home">
        <Header />
      </div>

      <div id="explore-menu">
        <ExploreMenu category={category} setCategory={setCategory} />
      </div>

      <div id="food-display">
        <FoodDisplay category={category} />
      </div>

      <div id="app-download">
        <AppDownload />
      </div>

      

    </div>
  )
}

export default Home