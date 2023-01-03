import {  useDispatch, useSelector } from "react-redux";
import { Label, Input, Button , Form, Div} from "./Phonebook.styled";
import { createNewContact } from "redux/contacts/contacts-operations";
import { selectContacts } from "redux/contacts/contacts-selectors";
import { Notify } from 'notiflix/build/notiflix-notify-aio';


export default function Phonebook (){
const dispatch = useDispatch();
const items = useSelector(selectContacts);

const handleSubmit = event =>{ 
        event.preventDefault();
        const name = event.currentTarget.elements.name.value;
        const number = event.currentTarget.elements.number.value;
        const isNameInArr = items.find(el=>el.name.toLowerCase()===name.toLowerCase());
        if(isNameInArr){
            Notify.failure(`${name} is already in contact`);
            event.currentTarget.reset();
            return;
        }
        dispatch(createNewContact({name, number}));
        event.currentTarget.reset();
      }

return (<Div>
        <Form onSubmit={handleSubmit}> 
            <Label>
                Name
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
                Number
                    <Input
                    type="tel"
                    name="number"
                    placeholder="Telephone"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    />
                </Label> 
                <Button type="submit" >Add to contact</Button>
        </Form>
    </Div>)
     
    }
