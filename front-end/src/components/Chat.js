import Socket from "../hooks/socket";
import { useState, useRef, useEffect } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import useSelecteUser from "../hooks/useSelectedUser";
import useCurrentUser from '../hooks/useCurrentUser';
import useMyContacts from '../hooks/useMyContacts';
import axios from "axios"
function Chat() {
    const [message, setMessage] = useState([])
    const { selectedUser, setSelectedUser } = useSelecteUser()
    const [currentUser, setCurrentUser] = useCurrentUser([])
    const [chatInfo, setChatInfo] = useState([])
    const [messageContent, setMessageContent] = useState([])
    const { myContacts, setNewContact } = useMyContacts([])
    // console.log(message)
    async function handleSubmit(e) {
        e.preventDefault()

        if (selectedUser) {
            Socket.emit("private message", { messages: messageContent, to: selectedUser.userID, username: selectedUser.username });

            setMessage((message) => [
                ...message,
                { toUser: selectedUser.username, content: messageContent, fromSelf: true },
            ]);

        }
        setMessageContent('')

        //creating a contacts in the database
        try {
            await axios.post('http://localhost:4000/direct',
                JSON.stringify({ selectedUser }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            ).then((res) => {
                console.log(res)
            })

        } catch (err) {
            console.log(err)
        }
    }
    // console.log(selectedUser)


    // to check who send the messages 
    Socket.on("private message", function ({ content, from, username }) {
        let newMessages = {};
        for (let i = 0; i < currentUser.length; i++) {
            const user = currentUser[i];
            if (user.userID === from) {
                newMessages = {
                    fromUser: username,
                    content,
                    fromSelf: false,
                };
                const messagesList = [...message, newMessages];
                setMessage(messagesList);
                if (user !== selectedUser) {
                    user.hasNewMessages = true;
                }


                break;
            }


        }




    });

    let showMessages = message.map((message, indx) => {

        if (
            message.fromSelf === true &&
            message.toUser == selectedUser.username
        )
            return (
                <div
                    key={indx}
                    style={{ textAlign: "right" }}
                    className="message-ribbon"
                >
                    {message.content} :me
                </div>
            )


        if (
            message.fromSelf === false &&
            message.fromUser === selectedUser.username
        )
            return (
                <div
                    key={indx}
                    style={{ textAlign: "left" }}
                    className="message-ribbon"
                >
                    {message.fromUser} : {message.content}
                </div>
            );



    })
    // console.log(selectedUser)
    // console.log(message)
    return (
        <div className="chatContainer">
            <div>
                <div className="user-name-card">
                    <p>{selectedUser.username}</p>
                </div>
            </div>
            <div className="message-container">{showMessages}</div>
            <div>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="m-2">
                        <InputGroup>
                            <Form.Control
                                as="textarea"
                                required
                                value={messageContent}
                                onChange={e => setMessageContent(e.target.value)}
                                style={{ height: '75px', resize: 'none' }}
                            />
                            <InputGroup>
                                <Button type="submit">Send</Button>
                            </InputGroup>
                        </InputGroup>
                    </Form.Group>
                </Form>
            </div>

        </div>
    )
}

export default Chat