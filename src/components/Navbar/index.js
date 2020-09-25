import React, { useState, useEffect } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { IconContext } from "react-icons/lib"
import {
  Nav,
  NavbarContainer,
  NavBrandLogo,
  MobileIcon,
  NavIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./headerElements"

function Navbar() {
  const [click, setClick] = useState(false)
  const [scroll, setScroll] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  const handleClick = () => setClick(!click)

  useEffect(() => {
    changeNav()
    window.addEventListener("scroll", changeNav)
  }, [])

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav active={scroll} click={click}>
          <NavbarContainer>
            <NavBrandLogo active={scroll} to="/">
              <NavIcon />
              Bud's Lift Repair
            </NavBrandLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/">Home</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="#">Services</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="#">About</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="#">Contact Us</NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
