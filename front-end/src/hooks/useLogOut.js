import axios from "../api/axios";
import useAuth from "./useAuth";

const UseLogOut = () => {
    const { setAuth } = useAuth();

    const logout = async () => {
        setAuth({});
        localStorage.removeItem("loggedIn");
        localStorage.removeItem("username");
        try {
            const response = await axios('/logout', {
                withCredentials: true
            });
        } catch (err) {
            console.error(err);
        }
    }

    return logout;
}

export default UseLogOut