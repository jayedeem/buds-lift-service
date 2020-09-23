import React from "react"
import "./layout.css"
import Navbar from "./Navbar"
import HeroSection from "./HeroSection"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <main>{children}</main>
    </>
  )
}

export default Layout
