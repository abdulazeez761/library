import { createContext, useState } from "react";

const contactsContext = createContext({});

export const MyContactsProvider = ({ children }) => {
    const [myContacts, setNewContact] = useState({});
    return (
        <contactsContext.Provider value={{ myContacts, setNewContact }}>
            {children}
        </contactsContext.Provider>
    )
}

export default contactsContext;