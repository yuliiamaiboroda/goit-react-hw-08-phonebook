import styled from "styled-components";
import { NavLink } from 'react-router-dom';

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
@media (max-width: 768px) {
  font-size: 20px;
  }
`
export const NavlinkRight = styled(NavLink)`
margin-left: auto;
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
@media (max-width: 768px) {
  font-size: 20px;
  }
`