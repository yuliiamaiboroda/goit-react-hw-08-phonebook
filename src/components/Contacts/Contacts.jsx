import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllContacts } from "redux/contacts/contacts-operations";
import { selectContacts } from "redux/contacts/contacts-selectors";
import { selectFilterValue } from "redux/filter/filter-selectors";
import Filter from "components/Filter/Filter";
import Notification from "components/Notification/Notification";
import ContactItem from "components/ContactItem/ContactItem";
import {Ul, Li } from "./Contacts.styled"

export default function Contacts () {

const dispatch = useDispatch();
useEffect(()=>{ dispatch(getAllContacts()) }, [dispatch]);
const contacsList = useSelector(selectContacts);
const filterByName = useSelector(selectFilterValue);

const filterContacts = ()=>{
    if(filterByName){return contacsList.filter(el=>el.name.toLowerCase().includes(filterByName))}
    else{return contacsList}
}


    return(<>  
     {(!contacsList||contacsList.length===0)?
        <Notification message="There is no contact yet"/>:(  <>  
      <Filter />
            <Ul>
                {filterContacts().map(el=>(
                    <Li key={el.id}>
                       <ContactItem item={el}/>
                    </Li>
                ))}
            </Ul>
        </>)}
            
        </>
        )

    
};
