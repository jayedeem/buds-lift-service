import styled from "styled-components"
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa"
import { ImYelp } from "react-icons/im"

import { Link } from "gatsby"

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100px;
  background-color: #000;
  color: white;
  span {
    margin-right: 7px;
    font-family: "Open Sans";
  }
`

export const IconLinks = styled(Link)`
  font-weight: bold;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
`
export const FaceBookIcon = styled(FaFacebookSquare)`
  margin: 0 0.5rem 0 1rem;
  color: #4267b2;
  font-size: 30px;
`
export const InstagramIcon = styled(FaInstagramSquare)`
  margin: 0 0.5rem 0 1rem;
  background: radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );
  font-size: 30px;
  fill: #000;
`
export const YelpIcon = styled(ImYelp)`
  margin: 0 0.5rem 0 1rem;
  color: #d32323;
  font-size: 30px;
`
