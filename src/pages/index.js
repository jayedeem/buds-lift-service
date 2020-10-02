import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/HeroSection"
import MiddleSection from "../components/MiddleSection"
import Navbar from "../components/Navbar"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection />
    <MiddleSection />
  </Layout>
)

export default IndexPage
