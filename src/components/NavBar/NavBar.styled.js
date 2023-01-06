import styled from "styled-components";
import { NavLink } from 'react-router-dom';


export const Header = styled.header`
padding: 20px;
box-shadow: 0px 3px 10px #f95d9b;
background-color: #F1F2F2;
@media (max-width: 768px) {
  padding: 10px;
  }
`

export const Navlink = styled(NavLink)`
color: black;
padding: 10px;
font-size: 30px;
text-decoration: none;
font-family: 'Abel', sans-serif;
font-weight: 500;
&.active{
color: #f95d9b;
}
&:hover:not(.active),
:focus-visible:not(.active){
color: #f95d9b;
}
`

export const Nav = styled.nav`
display: flex;
gap: 15px;
align-items: baseline;
`
export const Container = styled.div`
  // Mobile
  max-width: 480px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  // Tablet
  @media (min-width: 768px) {
    max-width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }
  // Desktop
  @media  (min-width: 1280px) {
    max-width: 1280px;
    padding-left: 32px;
    padding-right: 32px;
  }`