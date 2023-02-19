import React from 'react'
import { Nav } from './Nav'
import { TopSection } from './TopSection'
import { SecondSection } from './SecondSection'
import { WhatWeOffer } from './WhatWeOffer'
import { TopDestinations } from './TopDestinations'
import { PopularDestination } from './PopularDestination'
import { ClientFeedback } from './ClientFeedback'
import { FrequentlyAsked } from './FrequentlyAsked'
import { Assessment } from './Assessment'
import { Footer } from './Footer'


function LandingPage() {
  return (
    <>
      <Nav />
      <TopSection />
      <SecondSection />
      <WhatWeOffer />
      <TopDestinations />
      <PopularDestination />
      <ClientFeedback />
      <FrequentlyAsked />
      <Assessment />
      <Footer />
    </>
  )
}

export default LandingPage