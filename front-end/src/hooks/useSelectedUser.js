import { useContext, useDebugValue } from "react";
import SelectContext from "../context/selectedUserProvider";

const useSelecteUser = () => {
    const { selectedUser } = useContext(SelectContext);
    return useContext(SelectContext);
}

export default useSelecteUser;