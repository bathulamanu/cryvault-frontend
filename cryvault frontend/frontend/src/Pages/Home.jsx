import React from 'react'
import Banner from '../Components/Home/Banner'
import WhyBank from '../Components/Home/WhyBank'
import WhyPreserve from '../Components/Home/WhyPreserve'
import WhyShould from '../Components/Home/WhyShould'
import HowItWorks from '../Components/Home/HowItWorks'
import BookAppointment from '../Components/Home/BookAppointment'

const Home = () => {
  return (
    <div >
      <Banner/>
      <WhyBank/>
      <WhyPreserve/>
      <WhyShould />
      <HowItWorks/>
      <BookAppointment />
    </div>
  )
}

export default Home
