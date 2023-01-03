import { Navlink, NavlinkRight } from "./AuthMenu.styled";

export default function AuthMenu (){
return(
    <>
        <Navlink to='/contacts'>Contacts</Navlink>
        <NavlinkRight to='/userInfo'>UserInfo</NavlinkRight>
    </>)
}