import { useContext, useDebugValue } from "react";
import contactsContext from "../context/contactsProvider";

const useCurrentUser = () => {
    const { currentUser } = useContext(contactsContext);
    return useContext(contactsContext);
}

export default useCurrentUser;