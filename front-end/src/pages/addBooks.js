import './addBooks.css'
import React from 'react';
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from 'react'

import { Link } from 'react-router-dom'

import axios from 'axios';
const areEqual = (prevProps, nextProps) => true;
const AddBooks = React.memo(props => {
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    const location = useLocation();
    const [college, setCollege] = useState([])
    const [university, setUniversity] = useState([])
    const [isPending, setIsPending] = useState(true)
    const errRef = useRef();

    //form fields 
    const [universityOption, setUniversityOption] = useState('')
    const [collegeOption, setCollegeOption] = useState('')
    const [emailOption, setEmailOption] = useState('')
    const [phoneNumberOption, setPhoneNumbeOption] = useState('')
    const [file, setFile] = useState();
    const [fileName, setFileName] = useState("");
    const [sale, setSale] = useState(false)
    const [exchange, setExchange] = useState(false)
    const [donation, setDonation] = useState(false)
    const [slide, setSlide] = useState(false)

    const [major, setMajor] = useState();
    const [majorData, setMajorData] = useState([{}])
    const [subjectData, setSubjectData] = useState([])
    const [choosedSubject, setChoosedSubject] = useState()
    const [errMessage, setErrMessage] = useState('')
    const [success, setSuccess] = useState(false);

    // disabled controller 
    const [saleDisabled, setsaleDisabled] = useState(false)
    const [donationDisabled, setDonationDisabled] = useState(false)
    const [exchangeDisabled, setExchangeDisabled] = useState(false)
    const [slideDisabeld, setSlideDisabled] = useState(false)

    const pdfRegex = /^[^+]+\.pdf$/im
    // console.log(pdfRegex.test(slideField.selectedFile.name))
    // console.log(slideField)
    // if(slide && slideField is empty ) return err and disable  the button



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


    //get the majors
    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController(); //cancle req when the comounent unmounte
        const getMajors = async () => {
            try {
                await axiosPrivate.get('/major', {
                    signal: controller.signal //allows to cancle the req if it needs to 

                }).then((res) => {
                    let data = res.data.data
                    data.map((majorObject) => {
                        Object.values(majorObject).map((value) => {
                            // console.log(value)
                            if (isMounted && value !== null && typeof (value) == 'string') setMajorData(major => {
                                return [...major, value]
                            })

                        })
                    })

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
        getMajors()

    }, [])


    //get the subjects
    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController(); //cancle req when the comounent unmounte
        const getSubjects = async () => {
            try {
                await axiosPrivate.get('/subjects', {
                    signal: controller.signal //allows to cancle the req if it needs to 

                }).then((res) => {
                    let data = res.data.data

                    isMounted && setSubjectData(data);
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
        getSubjects()

    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();

        // for (let i = 0; i < slideField.length; i++) {
        //     data.append('file', slideField[i])
        // }
        // for (const file of this.state.files) {
        //     formData.append('file', file)
        // }
        const controller = new AbortController(); //cancle req when the comounent unmounte
        if (slide == true && !file) return
        if (universityOption.length == 0 || collegeOption.length == 0 || choosedSubject.length == 0 || major.length == 0) return
        try {

            if (slide == true) {
                // send the file first then send the rest of the data 
                const formData = new FormData();
                formData.append("file", file);
                formData.append("fileName", fileName);

                await axios.post(
                    "http://localhost:4000/uploadFile",
                    formData, {
                    signal: controller.signal //allows to cancle the req if it needs to 
                }
                ).then(async (res) => {

                    if (res.status == 200)
                        await axios.post('http://localhost:4000/add-book',
                            {
                                universityOption,
                                collegeOption,
                                emailOption,
                                phoneNumberOption,
                                sale,
                                exchange,
                                donation,
                                slide,
                                choosedSubject,
                                major

                            },
                            {

                                headers: {
                                    "Content-Type": "application/json"
                                },
                                withCredentials: true
                            }).then((res) => {
                                console.log(res)
                                if (res.status == 204) {
                                    return setErrMessage('pleas select the missing option')
                                }
                                setUniversityOption('');
                                setCollegeOption('');
                                setEmailOption('');
                                setPhoneNumbeOption('');
                                setChoosedSubject('');
                                setMajor('')
                                setSale(false);
                                setDonation(false);
                                setExchange(false);
                                setDonationDisabled(false);
                                setsaleDisabled(false);
                                setSlideDisabled(false)
                                setExchangeDisabled(false)
                                setSuccess(true);
                                setFile();
                                setFileName("");
                                setSlide(false)

                            })

                })


            } else {
                // only send the data

                await axios.post('http://localhost:4000/add-book',
                    {
                        universityOption,
                        collegeOption,
                        emailOption,
                        phoneNumberOption,
                        sale,
                        exchange,
                        donation,
                        slide,
                        choosedSubject,
                        major

                    },
                    {
                        headers: {
                            "Content-Type": "application/json"
                        },
                        withCredentials: true
                    })
                    .then((res) => {
                        console.log(res)
                        if (res.status == 204) {
                            return setErrMessage('pleas select the missing option')
                        }

                        setUniversityOption('');
                        setCollegeOption('');
                        setEmailOption('');
                        setPhoneNumbeOption('');
                        setChoosedSubject('');
                        setMajor('')
                        setSale(false);
                        setDonation(false);
                        setExchange(false);
                        setDonationDisabled(false);
                        setsaleDisabled(false);
                        setSlideDisabled(false)
                        setExchangeDisabled(false)
                        setSuccess(true);
                        setFile();
                        setFileName("");
                        setSlide(false)



                    })
            }


        } catch (err) {
            console.log(err)
            if (err.response?.status === 409) {
                setErrMessage('pleas select your subject information such as university ....')
            }

            errRef.current.focus();
        }


    }


    useEffect(() => {
        setErrMessage('');
    }, [universityOption, choosedSubject, major, collegeOption])

    let onClickAddOntherBook = (e) => {
        e.preventDefault();
        setSuccess(false)
    }


    const saveFile = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    };
    return (
        <section className='box add_book-container'>
            {
                success ? (
                    <div>
                        <h1>Success!</h1>
                        <h1>book has been added!</h1>
                        <Link className='link' to={'#'}>
                            <p>your profile</p>
                        </Link>
                        <button onClick={onClickAddOntherBook}>add another book</button>
                    </div>
                ) : (

                    <div className='box-wraber add-book-form-containter'>
                        {isPending && <p>loading ....</p>}
                        <p ref={errRef} className={errMessage ? "errmsg" : "offscreen"} aria-live="assertive">{errMessage}</p>

                        <form onSubmit={handleSubmit} className='add-book-form'>
                            {
                                university?.length
                                    ? (
                                        <div className='selecet-containter'>
                                            <p>university:</p>
                                            <select onChange={(e) => setUniversityOption(e.target.value)} className="form-select" aria-label="Default select example">
                                                <option>
                                                    choose a university
                                                </option>
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
                            {
                                college?.length
                                    ? (
                                        <div className='selecet-containter'>
                                            <p>college:</p>
                                            <select onChange={(e) => setCollegeOption(e.target.value)} className="form-select" aria-label="Disabled select example" >
                                                <option>
                                                    choose a college
                                                </option>
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

                                majorData?.length
                                    ? (


                                        <div className='selecet-containter'>
                                            <p>major:</p>
                                            <select onChange={(e) => setMajor(e.target.value)} className="form-select" aria-label="Disabled select example" >
                                                <option>
                                                    choose a major
                                                </option>
                                                {

                                                    majorData.map((major, idx) => {
                                                        if (typeof (major) == 'string') {
                                                            return (
                                                                <option key={idx}>
                                                                    {major}
                                                                </option>
                                                            )
                                                        }

                                                    })

                                                }
                                            </select>
                                        </div>
                                    ) : <p> loading ....</p>
                            }

                            {

                                subjectData?.length
                                    ? (
                                        <div className='selecet-containter'>
                                            <p>subjects:</p>
                                            <select onChange={(e) => setChoosedSubject(e.target.value)} className="form-select" aria-label="Disabled select example" >
                                                <option>
                                                    choose a subject
                                                </option>
                                                {subjectData.map((subject, i) => {

                                                    return (
                                                        <option key={i}>
                                                            {subject?.subject}
                                                        </option>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                    ) : <p> no colleges to choose</p>
                            }


                            <div className='optional-field-contaoner'>
                                <input
                                    type="email"
                                    id="email"
                                    autoComplete="off"
                                    onChange={(e) => setEmailOption(e.target.value)}
                                    value={emailOption}
                                    required
                                />
                                <label htmlFor="email">your email:</label>
                            </div>
                            <br></br>
                            <div className='optional-field-contaoner'>
                                <input
                                    type="text"
                                    id="phone number"
                                    autoComplete="off"
                                    value={phoneNumberOption}
                                    onChange={(e) => setPhoneNumbeOption(e.target.value)}
                                    required
                                />
                                <label htmlFor="book's name ">phone number:</label>
                            </div>

                            <div className="ks-cboxtags">
                                <p>post the book for : </p>
                                <ul className="ks-cboxtags">
                                    <li>
                                        <input type="checkbox" id="checkboxOne" value="sale"
                                            onChange={(e) => {
                                                setSale(!sale)
                                                setSlideDisabled(!slideDisabeld)
                                                setDonationDisabled(!donationDisabled)

                                            }}
                                            disabled={saleDisabled}


                                        />
                                        <label htmlFor="checkboxOne">sale</label></li>
                                    <li>
                                        <input type="checkbox" id="checkboxTwo" value="exchange"
                                            onChange={(e) => {
                                                setExchange(!exchange)
                                                setSlideDisabled(!slideDisabeld)
                                                setDonationDisabled(!donationDisabled)
                                            }}
                                            disabled={exchangeDisabled}
                                        />
                                        <label htmlFor="checkboxTwo">exchange</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="checkboxThree" value="donation"
                                            onChange={(e) => {
                                                setDonation(!donation)
                                                setsaleDisabled(!saleDisabled)
                                                setExchangeDisabled(!exchangeDisabled)
                                                setSlideDisabled(!slideDisabeld)

                                            }}
                                            disabled={donationDisabled}

                                        />
                                        <label htmlFor="checkboxThree">donation</label>
                                    </li>


                                    <li>
                                        <input type="checkbox" id="checkboxFour" value="slide"
                                            onChange={(e) => {
                                                setSlide(!slide)
                                                setDonationDisabled(!donationDisabled)
                                                setsaleDisabled(!saleDisabled)
                                                setExchangeDisabled(!exchangeDisabled)
                                            }}
                                            disabled={slideDisabeld}
                                        />
                                        <label htmlFor="checkboxFour">slide</label>
                                    </li>
                                </ul>
                                <div className='optional-field-contaoner' style={{ display: slide ? 'inline' : 'none', }}>
                                    <input
                                        type="file"
                                        id="slide file"
                                        // name="file"
                                        autoComplete="off"
                                        // value={slideField}
                                        accept="application/pdf"
                                        // onChange={(e) => setSlideField({ selectedFile: e.target.files[0], loaded: 0 })}
                                        onChange={saveFile}

                                    />
                                    <label htmlFor="book's name"></label>
                                </div>
                            </div>
                            <button>submit</button>
                        </form>
                    </div >
                )
            }

        </section >
    )
}, areEqual)



export default AddBooks