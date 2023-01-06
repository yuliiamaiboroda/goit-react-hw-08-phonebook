import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "redux/auth/auth-selectors";
import AuthMenu from "components/AuthMenu/AuthMenu";
import AuthNavigation from "components/AuthNavigation/AuthNavigation";
import { Header , Navlink, Nav, Container} from "./NavBar.styled";

export default function NavBar(){
const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <Header>
            <Container>
            <Nav>
                <Navlink to='/'>Home</Navlink>
                {isLoggedIn?<AuthMenu/>:<AuthNavigation/>}
            </Nav>
            </Container>
        </Header>
    )
}