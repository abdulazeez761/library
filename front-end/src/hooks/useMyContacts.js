import { useContext } from "react";
import contactsContext from "../context/myContacts";

const useMyContacts = () => {
    const { myContacts } = useContext(contactsContext);
    return useContext(contactsContext);
}

export default useMyContacts;