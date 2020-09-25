import React from "react"
import { Button } from "../buttonElements"
import "./hero.css"

export default function HeroSection() {
  return (
    <div className="hero-container">
      <h1>Repairs and Services</h1>
      <p>
        Forklift service for repair in Orange County, Inland Empire, and the
        greater Los Angeles area
      </p>
      <div className="hero-button">
        <Button primary fontBig big>
          Learn More
        </Button>
      </div>
    </div>
  )
}
