import { useSelector } from "react-redux";
import { selectIsLoading } from "redux/contacts/contacts-selectors";
import { override } from "constantes/constantes";
import { RingLoader } from "react-spinners";
import Section from "components/Section/Section";
import Phonebook from "components/Phonebook/Phonebook";
import Contacts from "components/Contacts/Contacts";

export default function ContactPage (){
    const isLoading = useSelector(selectIsLoading);
    return(
    <>
        <Section title="Phonebook">
        <Phonebook/>
        </Section>
        {isLoading&& 
            <RingLoader
            color="#C0B1EC"
            cssOverride={override}
            />}
        <Section title="Contacts">
            <Contacts />
        </Section>
    </>
    )}