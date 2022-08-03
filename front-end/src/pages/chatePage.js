import useAuth from "../hooks/useAuth";
import Socket from "../hooks/socket";
import { useState, useEffect } from "react";
import Chat from "../components/Chat";
import { SelectedUserProvider } from '../context/selectedUserProvider';
import { ContactsProvider } from "../context/contactsProvider";
import Contacts from "../components/Contacts";
import { MyContactsProvider } from "../context/myContacts";

const ChatPage = () => {
    const { auth } = useAuth()
    let accessToken = auth.accessToken
    Socket.auth = { accessToken };
    Socket.connect();


    return (
        <div className="d-flex" style={{ height: '89vh' }}>
            <ContactsProvider>

                <SelectedUserProvider>
                    <MyContactsProvider>
                        <Contacts />
                        <Chat />
                    </MyContactsProvider>
                    {/* <Routes>
                        <Route path="/:user" element={<Chat />} />
                    </Routes> */}

                </SelectedUserProvider>

            </ContactsProvider>
        </div>
    )
}

export default ChatPage