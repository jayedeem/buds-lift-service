import React from "react"
import BudLogo from "../../images/budonLift.jpg"
import {
  Wrapper,
  Description,
  ServiceType,
  ServiceWrapper,
  TextWrapper,
  Heading,
  ToolBox,
  Tools,
} from "./MiddleSectionElements"
import "./middle.css"
import { FaToolbox } from "react-icons/fa"
import { BsTools } from "react-icons/bs"

export default function MiddleSection() {
  return (
    <Wrapper>
      <TextWrapper>
        <span id="middle">Established 2019</span>
        <h1>YOUR SOURCE FOR REPAIRS &#38; SERVICES </h1>
        <Description>
          When your business relies on forklifts to keep inventory moving, you
          understand the importance of capable and reliable equipment. At Bud's
          Lift Repair, we have everything covered, whether you are looking to
          replace a part or keep your existing units well maintained with
          specialized service and repair.
        </Description>
      </TextWrapper>
      <ServiceWrapper>
        <ServiceType>
          <Tools />
          <h1>SERVICE</h1>
          <p>
            Preventive maintenance &#38; scheduled service to keep your
            forklifts running smooth.
          </p>
        </ServiceType>

        <ServiceType>
          <ToolBox />
          <h1>REPAIR</h1>
          <p>
            Master Technican provides repairs at your location for the lowest
            possible rates
          </p>
        </ServiceType>
      </ServiceWrapper>
    </Wrapper>
  )
}
