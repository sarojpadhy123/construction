import React from 'react'
import Banner from '../../components/Banner'
import Categories from '../../components/Categories'
import Specialisation from './Specialisation'
import Testimonials from './Testimonials'
import OurServices from './OurServices'
import Experience from '../../components/Experience'
import Team from '../../components/Team'
import Services from './services/Services'
import About from './about/About'
import Caraousal from '../../components/Caraousal'
import Sponsor from './Sponsor'
import Faq from '../Faq'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Categories/>
      <Specialisation/>
      {/* <Caraousal/> */}
      <Testimonials/>
      <OurServices/>
      <Services/>
      <About/>
      <Experience/>
      {/* <Team/> */}
      <Sponsor/>
      {/* <Faq/> */}
    </div>
  )
}

export default Home