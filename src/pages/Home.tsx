import React from 'react'
import Hero from './home/components/Hero'
import Vision from './home/components/Vision'
import Programs from './home/components/Programs'
import Impact from './home/components/Impact'
import CallToAction from './home/components/CallToAction'

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Vision />
      <Programs />
      <Impact />
      <CallToAction />
    </div>
  )
}

export default Home