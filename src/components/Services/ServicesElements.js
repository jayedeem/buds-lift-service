import styled from "styled-components"
import forkLift from "../../images/forklift.jpg"

export const Wrapper = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${forkLift}) no-repeat center center/cover fixed;
  height: 100vh;
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  object-fit: contain;
  margin-top: -80px;
`

export const Type = styled.div`
  display: flex;
  position: sticky;

  height: 300px;
  margin-top: 150px;
  width: 100%;
  align-items: center;
  justify-content: center;
`

export const ServiceType = styled.div`
  background: ${({ active }) => (active ? "#F0AA45" : "#F9E3C3")};
  height: 40rem;
  width: 30rem;

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  /* border: 0.2px solid #000; */
  margin: 10px;
  padding: 2px 16px;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    transition: 0.4s;
  }
  @media screen and (max-width: 960px) {
    padding: 1.2rem;
  }
`

export const ServiceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: space-evenly;
  background: #d9cbb6;
  padding: 10px;
  margin: 50px;
  @media screen and (max-width: 960px) {
    flex-direction: column;
    height: 800px;
    margin: 0;
  }
`
