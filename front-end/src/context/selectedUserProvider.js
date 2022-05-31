import { createContext, useState } from "react";

const SelectContext = createContext({});

export const SelectedUserProvider = ({ children }) => {
    const [selectedUser, setSelectedUser] = useState({});
    return (
        <SelectContext.Provider value={{ selectedUser, setSelectedUser }}>
            {children}
        </SelectContext.Provider>
    )
}

export default SelectContext;