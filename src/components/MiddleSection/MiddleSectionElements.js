import styled from "styled-components"
import { BsTools } from "react-icons/bs"
import { FaToolbox } from "react-icons/fa"

export const Wrapper = styled.div`
  /* height: 50vh; */
  width: 100%;
  display: flex;
  padding: 50px 50px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #65666c;
  color: #fff;

  @media screen and (max-width: 960px) {
    /* height: 70vh; */
    flex-direction: column;
  }
`
export const Description = styled.p`
  font-size: 20px;
  padding: 10px;
  width: 90%;
  line-height: 2rem;
  font-family: "Open Sans";
  text-align: center;
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-family: "Open Sans";
    @media screen and (max-width: 682px) {
      font-size: 30px;
      text-align: center;
    }
    @media screen and (max-width: 540px) {
      font-size: 27px;
      text-align: center;
    }
  }

  span {
    font-family: "Open Sans";
    font-size: 20px;
    margin-bottom: 2px;
  }
`

export const Image = styled.img`
  width: auto;
  height: 50%;
  margin: 100px;
  box-shadow: 5px 10px 18px #000;
  @media screen and (max-width: 960px) {
  }
`
export const ServiceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  p {
    text-align: center;
  }
`

export const ServiceType = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 50px;
  align-items: center;
  font-family: "Open Sans";
  p {
    font-size: 20px;
    width: 200px;
    /* font-weight: bold; */
    font-family: "Open Sans";
  }

  h1 {
    font-size: 24px;
    /* font-weight: bold; */
    font-family: "Open Sans";
  }
  @media screen and (max-width: 682px) {
    font-size: 24px;
    /* text-align: center; */
  }
  @media screen and (max-width: 540px) {
    font-size: 18px;
    /* text-align: center; */
  }
`

export const ToolBox = styled(FaToolbox)`
  font-size: 50px;
  margin-bottom: 3px;
  color: #f1ed11;
`
export const Tools = styled(BsTools)`
  font-size: 50px;
  margin-bottom: 3px;
  color: #f1ed11;
`
