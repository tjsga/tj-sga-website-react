import React from "react"
import Hero from "../components/Hero"

import InitiativeList from "../components/InitiativeList"
import Mission from "../components/Mission"

const IndexPage = () => {
  return <>
    {/* Hero image */}
    <Hero></Hero>

    {/* Initiatives section */}
    <InitiativeList />

    {/* Mission */}
    <Mission />

    {/* News articles section */}
    <section className="container mx-auto px-8 my-8">
      
    </section>
  </>
}

export default IndexPage
