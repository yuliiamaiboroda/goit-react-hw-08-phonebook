import { Navlink, Div } from "./AuthNavigation.styled";

export default function AuthNavigation(){
    return(
    <Div>
        <Navlink to='/login'>Log In</Navlink>
        <Navlink to='/registration'>Registration</Navlink>
    </Div>)
}