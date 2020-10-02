import React from "react"
import "./layout.css"
import Navbar from "./Navbar"
import Footer from "./FooterSection"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
