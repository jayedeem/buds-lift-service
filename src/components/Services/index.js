import React from "react"
import { Wrapper, Type, ServiceType, ServiceWrapper } from "./ServicesElements"

const h1Style = {
  color: "#fff",
  fontSize: "3.2rem",
}

export default function Services() {
  return (
    <Wrapper>
      <Type>
        <h1 style={h1Style}>SERVICES</h1>
      </Type>
      <ServiceWrapper>
        <ServiceType active>
          <h1>Repairs</h1>
        </ServiceType>
        <ServiceType>
          <h1>Maintenance</h1>
        </ServiceType>
      </ServiceWrapper>
    </Wrapper>
  )
}
