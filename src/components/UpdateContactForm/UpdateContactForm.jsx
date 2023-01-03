import { useDispatch } from "react-redux";
import { updateContact } from "redux/contacts/contacts-operations";
import { Button, Form, Input, Label , Div, ButtonClose} from "./UpdateContact.styled";


export default function UpdateContactForm({selectedContact, closeUpdateForm}){
    const dispatch = useDispatch();

    const handleSubmit = event =>{
        event.preventDefault();
        const name = event.currentTarget.elements.name.value;
        const number = event.currentTarget.elements.number.value;
        dispatch(updateContact({...selectedContact, name, number}));
        event.currentTarget.reset();
        closeUpdateForm()
    }

    return(
        <Div>
            <ButtonClose type="button" onClick={closeUpdateForm}>X</ButtonClose>
        <Form onSubmit={handleSubmit}>
            <Label>
                Enter new name
                    <Input
                    type="text"
                    name="name"
                    placeholder="Name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    />
                </Label> 
                <Label>
                Enter new number
                    <Input
                    type="tel"
                    name="number"
                    placeholder="Telephone"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    />
                </Label> 
                <Button type="submit" >Update the contact</Button>
        </Form>
        </Div>
    )
}