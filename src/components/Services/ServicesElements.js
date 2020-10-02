import styled from "styled-components"
import forkLift from "../../images/forklift.jpg"
export const Wrapper = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${forkLift}) no-repeat center center/cover fixed;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;

  object-fit: contain;
  margin-top: -80px;
  h1 {
    color: #fff;
  }
`

export const Results = styled.div`
  display: flex;
  top: 500px;
  height: 400px;
  margin-top: 180px;
  width: 100%;
`
