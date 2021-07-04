import React from 'react'
import Header from '../components/header'
import Nav from '../components/Nav'
import Submenu from '../components/Submenu'
import Banner from '../components/Banner'
import Khadamat1 from '../components/Khadamat1'
import Magh from '../components/Magh'
import Koli from '../components/Koli'
import FoundItems from '../components/FoundItems'
import Nemoone from '../components/Nemoone'
import Mag from '../components/Mag'
import Footer from '../components/Footer'
const Home = () => {
    return (
        <div>
           <Header/>
      <Nav/> 
      <Submenu/> 
      <Banner/>
      <Khadamat1/>
      <Magh/>
      <Koli/>
      <FoundItems/>
      <Nemoone/>
      <Mag/>
      <Footer/>
        </div>
    )
}

export default Home
