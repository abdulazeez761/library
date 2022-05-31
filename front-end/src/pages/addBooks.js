import './addBooks.css'
import React from 'react';
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react'
import axios from 'axios';
const areEqual = (prevProps, nextProps) => true;
const AddBooks = React.memo(props => {
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    const location = useLocation();
    const [college, setCollege] = useState([])
    const [university, setUniversity] = useState([])
    const [isPending, setIsPending] = useState(true)
    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController(); //cancle req when the comounent unmounte
        const getCollege = async () => {
            try {
                await axiosPrivate.get('/college', {
                    signal: controller.signal //allows to cancle the req if it needs to 

                }).then((res) => {
                    isMounted && setCollege(res.data.data);
                    setIsPending(false)
                })

            } catch (err) {
                console.log(err)

                navigate('/login', { state: { from: location }, replace: true });

            }
            return () => {
                isMounted = false;
                controller.abort() //gonna cancele the pendding req when the compunent unmount 


            }
        }
        getCollege()

    }, [])


    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController(); //cancle req when the comounent unmounte
        const getUniversity = async () => {
            try {
                await axios({
                    "method": "GET",
                    "url": "https://raw.githubusercontent.com/Hipo/university-domains-list/master/world_universities_and_domains.json",
                    "headers": {}, "params": {}
                }).then((res) => {
                    isMounted && setUniversity(res.data);
                    setIsPending(false)
                })

            } catch (err) {
                console.log(err)


            }
            return () => {
                isMounted = false;
                controller.abort() //gonna cancele the pendding req when the compunent unmount 


            }
        }
        getUniversity()
    }, [])
    console.log(college)
    return (
        <section className='addBooks'>
            <div className='formContainer'>
                {isPending && <p>loading ....</p>}
                <form>
                    {

                        college?.length
                            ? (
                                <div>
                                    <select>
                                        {college.map((college, i) => {
                                            return (
                                                <option key={i}>
                                                    {college?.college}
                                                </option>
                                            )
                                        })}
                                    </select>
                                </div>
                            ) : <p> no colleges to choose</p>
                    }

                    {

                        university?.length
                            ? (
                                <div>
                                    <select >
                                        {university.map((university, i) => {
                                            if (university.country == 'Jordan') {
                                                return (

                                                    <option key={i}>
                                                        {university.name}
                                                    </option>


                                                )
                                            }

                                        })}
                                    </select>
                                </div>
                            ) : <p> no universities to choose</p>
                    }
                    <div>
                        <input
                            type="text"
                            id="book's name "
                            autoComplete="off"
                            required
                        />
                        <label htmlFor="book's name ">name:</label>
                    </div>
                    <div>
                        <input
                            type="email"
                            id="email"
                            autoComplete="off"

                        />
                        <label htmlFor="email">your email:</label>
                    </div>
                    <div>
                        <input
                            type="text"
                            id="phone number "
                            autoComplete="off"
                        />
                        <label htmlFor="book's name ">phone number:</label>
                    </div>
                    <div>
                        <input
                            type="file"
                            required
                            htmlFor="avatar" name="avatar"
                            accept="image/png, image/jpeg" />
                    </div>
                </form>
            </div>
        </section>
    )
}, areEqual)



export default AddBooks