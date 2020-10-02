import React, { useState } from "react"
import { Button } from "../buttonElements"
import "./hero.css"

export default function HeroSection() {
  return (
    <div className="hero-container">
      <h1>Fork Lift Specialist</h1>
      <p>
        Forklift services in Orange County, Inland Empire, and the greater Los
        Angeles area
      </p>
      <div className="hero-button">
        <Button primary fontBig big href="#middle">
          Learn More
        </Button>
      </div>
    </div>
  )
}
