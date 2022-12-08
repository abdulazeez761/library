import useAuth from "../hooks/useAuth";
import socket from "../hooks/socket";
import { useState, useEffect } from "react";
import Chat from "../components/Chat";
import { SelectedUserProvider } from '../context/selectedUserProvider';
import { ContactsProvider } from "../context/contactsProvider";
import Contacts from "../components/Contacts";
import { MyContactsProvider } from "../context/myContacts";
import useSelecteUser from '../hooks/useSelectedUser';
import toast, { Toaster } from "react-hot-toast";

const ChatPage = () => {
    const [username, setUsername] = useState("");
    const [connected, setConnected] = useState(false);
    const { auth } = useAuth()



    const accsesToken = auth.accessToken
    if (!accsesToken) return;
    let accessToken = auth.accessToken
    socket.auth = { accessToken };
    // const sessionID = localStorage.getItem("sessionID");

    socket.connect();


    return (
        <div className="d-flex" style={{ height: '89vh' }}>
            <ContactsProvider>

                <SelectedUserProvider>
                    <MyContactsProvider>
                        <Contacts />
                        <Chat />
                    </MyContactsProvider>

                </SelectedUserProvider>

            </ContactsProvider>
        </div>
    )
}

export default ChatPage