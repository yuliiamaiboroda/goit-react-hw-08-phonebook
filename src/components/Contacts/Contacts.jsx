import { useEffect, createRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    CSSTransition,
  } from 'react-transition-group';
import { getAllContacts } from "redux/contacts/contacts-operations";
import { selectContacts } from "redux/contacts/contacts-selectors";
import { selectFilterValue } from "redux/filter/filter-selectors";
import Filter from "components/Filter/Filter";
import Notification from "components/Notification/Notification";
import ContactItem from "components/ContactItem/ContactItem";
import {Ul, Li } from "./Contacts.styled"
import "./contactAnimation.css"
export default function Contacts () {

const dispatch = useDispatch();
useEffect(()=>{ dispatch(getAllContacts()) }, [dispatch]);
const contacsList = useSelector(selectContacts);
const filterByName = useSelector(selectFilterValue);

const filterContacts = ()=>{
    if(filterByName){return contacsList.filter(el=>el.name.toLowerCase().includes(filterByName)).map(el=>({...el,nodeRef: createRef(null),
    }))}
    else{return contacsList.map(el=>({...el,nodeRef: createRef(null),
    }))}
}


    return(<>  
     {(!contacsList||contacsList.length===0)?
        <Notification message="There is no contact yet"/>:(  <>  
      <Filter />
      <Ul component="ul">  
                {filterContacts().map(el=>(
                    <CSSTransition key={el.id} 
                    timeout={500}
                    classNames="item"
                    unmountOnExit
                    nodeRef={el.nodeRef}
                >
                    <Li key={el.id} ref={el.nodeRef}> 
                       <ContactItem item={el}/>
                    </Li>
                    </CSSTransition>
                ))}
            </Ul>
        </>)}
            
        </>
        )

    
};
