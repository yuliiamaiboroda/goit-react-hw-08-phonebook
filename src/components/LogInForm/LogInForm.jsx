import { useDispatch } from "react-redux";
import authOperations from "redux/auth/auth-operations";
import { Container, Form , Label, Input , Button} from "./LoginForm.styled";

export default function LoginForm(){
    const dispatch = useDispatch();

    const handleSubmit = event =>{
        event.preventDefault();
        const userEmail = event.currentTarget.elements.userEmail.value;
        const userPassword = event.currentTarget.elements.userPassword.value;
        dispatch(authOperations.login({
            "email": userEmail,
            "password": userPassword,
        }));
        event.currentTarget.reset();
    }

    return(
        <Container>
        <Form onSubmit={handleSubmit}>
            <Label>
                Enter your email
                <Input type="email"
                required
                name="userEmail"/>
            </Label>
            <Label>
                Enter your password 
                <Input type="password"
                required
                name="userPassword"/>
            </Label>
            <Button type="submit">Log in</Button>
        </Form>
        </Container>
    )
}