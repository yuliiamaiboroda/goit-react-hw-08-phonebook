import { useDispatch, useSelector } from "react-redux";
import authOperations from "redux/auth/auth-operations";
import { selectUser } from "redux/auth/auth-selectors";
import { Container, P, Span, Button } from "./UserInfo.styled";

export default function UserInfo (){
    const dispatch =useDispatch();
    const user = useSelector(selectUser);

    const handleClick = ()=>{
        dispatch(authOperations.logout());
    }

    return(
        <Container>
            <P>Hello , <Span>{user.name}</Span> !</P>
            <P>Your email is <Span>{user.email}</Span></P>
            <Button type="button" onClick={handleClick}>Logout</Button>
        </Container>
    )
}