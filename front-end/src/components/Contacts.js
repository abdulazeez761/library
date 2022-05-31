import React from 'react'
import { useState, useRef, useEffect } from 'react';
import Socket from '../hooks/socket';
import useSelecteUser from '../hooks/useSelectedUser';
import useCurrentUser from '../hooks/useCurrentUser';
import { Link } from 'react-router-dom';
import './contacts.css'
export default function Contacts() {

    const [currentUser, setCurrentUser] = useCurrentUser([])
    const { selectedUser, setSelectedUser } = useSelecteUser()

    const initReactiveProperties = (user) => {
        user.connected = true;
        user.messages = [];
        user.hasNewMessages = false;
    };
    useEffect(() => {

        Socket.on("users", (users) => {
            users.forEach((user) => {
                user.self = user.userID === Socket.id;
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

    }, [setCurrentUser])
    useEffect(() => {
        Socket.on("user connected", (user) => {
            // console.log(user)
            initReactiveProperties(user);
            setCurrentUser(online => {
                return [...online, user]
            });
            // setCurrentUser(online => ([{ ...online, [currentUser.length]: user }]))

        })
    }, [])

    // useEffect(() => {
    //     Socket.on("user disconnected", (id) => {
    //         for (let i = 0; i < currentUser.length; i++) {
    //             const user = currentUser[i];
    //             if (user.userID == id) {
    //                 user.connected = false;
    //                 break;
    //             }
    //         }

    //     });

    // }, [])



    return (
        <div>

            {
                currentUser.map((user, idx) => {
                    return (
                        // <Link className='link' to={`${user.username}`} key={idx} >
                        <div key={idx} className='user-containter'>
                            <div  >

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

        </div >
    )
}
