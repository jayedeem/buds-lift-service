import styled from "styled-components"
import { GoGear } from "react-icons/go"
import { Link } from "gatsby"

export const Nav = styled.nav`
  background: ${({ active }) =>
    active
      ? "#000"
      : "linear-gradient(to bottom, rbga(255,255,255,0.9) 0%, rgba(255,255,255,9) 100%)"};
  height: 80px;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 1;

  @media screen and (max-width: 960px) {
    background: ${({ click }) => (click ? "#000" : "transparent")};
    transition: 0.8s all ease;
  }
`
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  z-index: 1;
  max-width: 1900px;
`
export const NavBrandLogo = styled(Link)`
  color: #fff;
  font-weight: bold;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;

  @media screen and (max-width: 960px) {
    margin-left: 0px;
    font-size: 1.3rem;
  }
`
export const NavIcon = styled(GoGear)`
  margin: 0 0.5rem 0 2rem;
  color: #fff;
`

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: flex-end;
  list-style: none;
  margin-right: 12px;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 45vh;
    position: absolute;
    top: ${({ click }) => (click ? "100%" : "-1000px")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #000;
  }
`
export const NavItem = styled.li`
  height: 80px;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`
export const NavLinks = styled(Link)`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 1rem 2.5rem;
  height: 100%;

  &:hover {
    color: #ff4040;
    background: #e1e1e1;
    transition: all 0.3s ease;
    border-bottom: 0.5px solid #ff4040;
    transform: scale(1.1);
  }

  @media screen and (max-width: 960px) {
    font-size: 20px;
    color: #fff;
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    &:hover {
      color: #ff4040;
      background: #e1e1e1;
      transition: all 0.3s ease;
      border-bottom: 0.5px solid #ff4040;
      transform: scale(1);
    }
  }
`
