import React from 'react'
import { useState, useRef, useEffect } from 'react';
import socket from '../hooks/socket';
import useSelecteUser from '../hooks/useSelectedUser';
import useCurrentUser from '../hooks/useCurrentUser';
import { Link } from 'react-router-dom';
import './contacts.css'
import axios from 'axios';

export default function Contacts() {

    const [currentUser, setCurrentUser] = useCurrentUser([])
    const { selectedUser, setSelectedUser } = useSelecteUser()
    const [myContact, setMyContact] = useState([])
    const username = localStorage.username
    const initReactiveProperties = (user) => {
        user.connected = true;
        user.messages = [];
        user.hasNewMessages = false;
    };

    //storing all of connected users
    useEffect(() => {
        socket.on("users", (users) => {
            users.forEach((user) => {
                user.self = user.userID === socket.id;

                initReactiveProperties(user)
            });

            // put the current user first, and then sort by username
            users = users.sort((a, b) => {
                if (a.self) return -1;
                if (b.self) return 1;
                if (a.username < b.username) return -1;
                return a.username > b.username ? 1 : 0;
            });

            setCurrentUser(users);
        });

        // socket.on("session", ({ sessionID, userID }) => {
        //     // attach the session ID to the next reconnection attempts
        //     localStorage.setItem("sessionID", sessionID);
        //     socket.auth.sessionID = sessionID;
        //     // store it in the localStorage
        //     socket.auth.userID = userID;
        // });

    }, [setCurrentUser])
    // if aonther user connected it'sgonna add that user to the users list
    useEffect(() => {
        socket.on("user connected", (user) => {
            // console.log(user)
            initReactiveProperties(user);
            setCurrentUser(online => {
                return [...online, user]
            });
        })
    }, [])

    useEffect(() => {
        axios({
            "method": "GET",
            "url": "http://localhost:4000/userContacts",
            "headers": {}, "params": {}
        }).then((response) => {

            const APIResponse = response.data // This is response data from AXIOS
            setMyContact(APIResponse.data) // Only Response from API is set in state


        })
            .catch((error) => {
                console.log(error)
            })

    }, [])
    // console.log(currentUser)

    return (
        <div>
            <h3>All Contacts</h3>
            {
                currentUser.map((user, idx) => {
                    // console.log(user)
                    return (
                        // <Link className='link' to={`${user.username}`} key={idx} >

                        <div key={idx} className='user-containter'>

                            <div>
                                <p onClick={() => {
                                    setSelectedUser(user)
                                }} >
                                    {user.username} {user.self ? '(yourself)' : ' '}

                                </p>

                            </div>
                        </div>
                        // </Link>
                    )
                })

            }
            <h1>My Contacts</h1>
            <div>
                <div className='user-containter'>
                    {
                        myContact.map((contact, index) => {

                            return (
                                <div className='nothing' key={index}>
                                    <p onClick={() => {
                                        setSelectedUser(contact.toUserName)

                                    }} > {contact.sender == username ? contact.toUserName : ''} </p>
                                    <p onClick={() => {
                                        setSelectedUser(contact.sender)
                                    }} > {contact.toUserName == username ? contact.sender : ''} </p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div >
    )
}
