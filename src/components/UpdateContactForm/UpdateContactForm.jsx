import { Notify } from "notiflix";
import { useDispatch } from "react-redux";
import { updateContact } from "redux/contacts/contacts-operations";
import { Button, Form, Input, Label , Div, ButtonClose, Backdrop, P, Span} from "./UpdateContact.styled";


export default function UpdateContactForm({selectedContact, closeUpdateForm}){
    const dispatch = useDispatch();

    const handleSubmit = event =>{
        event.preventDefault();
        const name = event.currentTarget.elements.name.value.trim();
        const number = event.currentTarget.elements.number.value.trim();
        if(name ===""&&number ===""){
            Notify.warning("Please enter name or number to update the contact");
            return;
        }
       if(name ===""){
        dispatch(updateContact({...selectedContact, number}));
        closeUpdateForm();
        return;
       }
       if(number ===""){
        dispatch(updateContact({...selectedContact, name}));
        closeUpdateForm();
        return;
       }
        dispatch(updateContact({...selectedContact, name, number}));
        
        closeUpdateForm()
    }

    const handleClickOnBackdrop = e =>{
        if(e.currentTarget===e.target){
            closeUpdateForm()
         }
    }
    return(
        <Backdrop  onClick={handleClickOnBackdrop}>
        <Div>
            <ButtonClose type="button" onClick={closeUpdateForm}>X</ButtonClose>
            <P>Old name : <Span>{selectedContact.name}</Span></P>
            <P>Old number: <Span>{selectedContact.number}</Span></P>
        <Form onSubmit={handleSubmit}>
            <Label>
                Enter new name
                    <Input
                    type="text"
                    name="name"
                    placeholder="Name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    autoComplete="on"
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
                    />
                </Label> 
                <Button type="submit" >Update the contact</Button>
        </Form>
        </Div>
        </Backdrop>
    )
}