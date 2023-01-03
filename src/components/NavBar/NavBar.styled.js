import styled from "styled-components";
import { NavLink } from 'react-router-dom';


export const Header = styled.header`
padding: 20px;
box-shadow: 0px 2px 6px #231F20;
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
