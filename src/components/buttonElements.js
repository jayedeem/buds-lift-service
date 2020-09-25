import styled from "styled-components"

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? "#fff" : "#0F19E5")};
  white-space: no-wrap;
  padding: ${({ big }) => (big ? "16px 64px" : "10px 20px")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  font-family: "Nunito", sans-serif;

  &:hover {
    transition: all 0.3 ease-out;
    background: ${({ primary }) => (primary ? "#0F19E5" : "#fff")};
  }
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`
