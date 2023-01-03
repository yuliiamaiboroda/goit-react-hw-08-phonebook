import { useDispatch } from "react-redux";
import authOperations from "redux/auth/auth-operations";
import { Container, Form , Label, Input , Button} from "./RegistrationForm.styled";


export default function RegistrationForm(){
    const dispatch = useDispatch();

    const handleSubmit = event =>{
        event.preventDefault();
        const userName = event.currentTarget.elements.userName.value;
        const userEmail = event.currentTarget.elements.userEmail.value;
        const userPassword = event.currentTarget.elements.userPassword.value;
        dispatch(authOperations.register({
            "name":userName, 
            "email":userEmail,
            "password": userPassword,
        }));
        event.currentTarget.reset();
    }

    return(
        <Container>
        <Form onSubmit={handleSubmit}>
             <Label>
                Enter your name
                <Input type="text"
                required
                name="userName"
                autoComplete="off"/>
            </Label>
            <Label>
                Enter your email
                <Input type="email"
                required
                name="userEmail"
                autoComplete="off"/>
            </Label>
            <Label>
                Enter your password 
                <Input type="password"
                required
                name="userPassword"
                autoComplete="off"/>
            </Label>
            <Button type="submit">Registration</Button>
        </Form>
        </Container>)
}