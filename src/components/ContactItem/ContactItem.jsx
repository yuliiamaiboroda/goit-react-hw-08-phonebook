import { Button , Div} from "components/Contacts/Contacts.styled"
import { useDispatch } from "react-redux";
import PropTypes from 'prop-types';
import { deleteContact } from "redux/contacts/contacts-operations";
import { useState } from "react";
import UpdateContactForm from "components/UpdateContactForm/UpdateContactForm";

export default function ContactItem ({item}){
    const [selectedContact, setSelectedContact] = useState(null);
    const dispatch = useDispatch();
   
    const handleDelete = () =>{
        dispatch(deleteContact(item.id));
    };

    const handleOpenUpdateForm =()=>{
        setSelectedContact(item);
    };

    const closeUpdateForm =()=>{
        setSelectedContact(null);
    };

   return ( <>
   {item.name}: {item.number}
    <Div >
    <Button type="button"  onClick={handleDelete}>Delete</Button>
    <Button type="button" onClick={handleOpenUpdateForm} >Update contact</Button>
    </Div>
    {selectedContact
    && <UpdateContactForm selectedContact={selectedContact} closeUpdateForm={closeUpdateForm}/>}
</>) 
}


ContactItem.propTypes={
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        number:PropTypes.string.isRequired,
    }).isRequired
}