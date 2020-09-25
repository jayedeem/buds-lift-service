import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import HeroSection from "../components/HeroSection"
import MiddleSection from "../components/MiddleSection"
import Footer from "../components/FooterSection"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection />
    <MiddleSection />
    <Footer />
  </Layout>
)

export default IndexPage
