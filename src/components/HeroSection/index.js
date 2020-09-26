import React from "react"
import { Button } from "../buttonElements"
import "./hero.css"

export default function HeroSection() {
  const container = document.getElementsByClassName("hero-container")
  const navbar = document.getElementsByClassName(
    "headerElements__NavMenu-cfhEod bfjtCV"
  )

  window.onclick = function (e) {
    if (e.target == container) {
      navbar.style.display = "none"
    }
  }

  return (
    <div className="hero-container">
      <h1>Fork Lift Specialist</h1>
      <p>
        Forklift services in Orange County, Inland Empire, and the greater Los
        Angeles area
      </p>
      <div className="hero-button">
        <Button primary fontBig big>
          Learn More
        </Button>
      </div>
    </div>
  )
}
