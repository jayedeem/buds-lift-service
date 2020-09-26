import styled from "styled-components"

export const MiddleContainer = styled.div`
  background-color: #fff;
  height: 50vh;
  width: 100%;
  margin: 15px;

  @media screen and (max-width: 960px) {
    height: 100vh;
  }
`
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
`
