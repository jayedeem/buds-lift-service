import React from "react"

import { MiddleContainer, Row, Col } from "./MiddleSectionElements"

export default function MiddleSection() {
  return (
    <>
      <MiddleContainer>
        <Row>
          <Col>Something 1</Col>
          <Col>Something 2</Col>
          <Col>Something 3</Col>
          <Col>Something 4</Col>
        </Row>
        <Row>
          <Col>Something 1</Col>
          <Col>Something 2</Col>
          <Col>Something 3</Col>
          <Col>Something 4</Col>
        </Row>
      </MiddleContainer>
    </>
  )
}
