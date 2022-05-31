import { createContext, useState } from "react";

const contactsContext = createContext([]);

export const ContactsProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState([]);
    return (
        <contactsContext.Provider value={[currentUser, setCurrentUser]}>
            {children}
        </contactsContext.Provider>
    )
}

export default contactsContext;