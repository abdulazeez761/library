import './profileComponent.css'
import { BiEnvelope } from "react-icons/bi";
import { AiTwotoneBook, AiFillInstagram, AiFillFacebook, AiFillTwitterCircle } from "react-icons/ai";
import axios from 'axios';
import { useState, useEffect } from 'react';
import UseAuth from "../hooks/useAuth";
import { Buffer } from 'buffer';
import { RiMessengerLine } from "react-icons/ri";
import { MdReadMore } from "react-icons/md";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import { useParams } from "react-router-dom";
const ProfileComponent = () => {
    const [books, setBooks] = useState([1]);
    const [loading, setLoading] = useState(true);
    const [userInfo, setUserInfo] = useState([]);
    const [profileImage, setProfileImage] = useState()
    const [showMorebooks, setMoreBooks] = useState(11);
    const [activeCategory, SetactiveCategory] = useState(false);
    const [correntCtegory, setCorrentCAtegory] = useState('all')
    const { auth } = UseAuth();
    const location = useLocation();
    const { userName } = useParams();

    const token = auth.accessToken;
    let payload = JSON.parse(Buffer.from(token.split(".")[1], "base64"));
    const profileOnwerName = payload.UserInfo.user_name;

    useEffect(() => {
        const getBokks = async () => {
            try {
                await axios.get(`http://localhost:4000/userBooks/${userName}`, {
                    withCredentials: true
                }, token).then((res) => {
                    setBooks(res.data.data)
                }).then(async () => {
                    await axios.get('http://localhost:4000/users').then((res) => {
                        //getting  user info 
                        res.data.data.find((elemnt) => {
                            if (elemnt.user_name == userName) {
                                const userID = elemnt.id;
                                setUserInfo(elemnt)
                            }
                        })

                    }).then(() => {
                        setLoading(false)
                    })

                })
            } catch (err) {
                console.log(err)
            }
        }
        getBokks()
    }, [])


    const showMoreBooksHandler = () => {
        setMoreBooks(prev => prev + 5)
    }

    const exchangeHandelr = () => {
        setCorrentCAtegory('exchange')

    }
    const allHandelr = () => {
        setCorrentCAtegory('all')
    }
    const donationHandelr = () => {
        setCorrentCAtegory('donation')
    }
    const saleHandelr = () => {
        setCorrentCAtegory('sale')
    }
    const slideHandler = () => {
        setCorrentCAtegory('slide')
    }




    return (
        // if loading
        loading ? <h1>loading ....</h1> :
            profileOnwerName == userName ? (
                loading ? <h1>loading ....</h1> : <div className="profile">
                    <header className="header">
                        <div class="details">
                            <img src="https://i.pinimg.com/564x/2b/d3/76/2bd37621332a26ac1da3efb07994846e.jpg" alt="John Doe" class="profile-pic" />
                            <h1 class="heading">{userName}</h1>
                            <div class="location">

                                {/* add social mother social media links instead  */}
                                {/* <AiTwotoneBook /> */}
                                <h6 className='publishedBooks' > {books.length} published books</h6>
                                <div className='socialMediaLinks'>
                                    <a className={userInfo.facebookLink ? 'profilePageHeadericons' : 'profilePageHeadericons noLink'} href={userInfo.facebookLink} > <AiFillFacebook /></a>

                                    <a className='profilePageHeadericons' href={userInfo.twitterLink}> <AiFillTwitterCircle /></a>
                                    <a className='profilePageHeadericons' href={userInfo.instaLink}> <AiFillInstagram /></a>
                                    <a className='profilePageHeadericons'><BiEnvelope /></a>

                                </div>

                            </div>
                            {/* number info section: number of the posted books and the categories */}

                            <div className="stats" >
                                <p className={correntCtegory == 'all' ? 'col-4 activCategory' : "col-4 "} onClick={allHandelr} >
                                    {/* <h4>{books.length}</h4> */}
                                    <h5>all</h5>
                                </p>
                                <p className={correntCtegory == 'exchange' ? 'col-4 activCategory' : "col-4 "} onClick={exchangeHandelr}>

                                    <h5>exchange</h5>
                                </p>
                                <p className={correntCtegory == 'donation' ? 'col-4 activCategory' : "col-4 "} onClick={donationHandelr}>

                                    <h5>donation</h5>
                                </p>
                                <p className={correntCtegory == 'sale' ? 'col-4 activCategory' : "col-4 "} onClick={saleHandelr}>

                                    <h5>sale</h5>
                                </p>
                                <p className={correntCtegory == 'slide' ? 'col-4 activCategory' : "col-4 "} onClick={slideHandler}>

                                    <h5>slide</h5>
                                </p>
                            </div>
                        </div>
                    </header>

                    {books.length <= 0 ? <div> no posets yet</div> : <div className='postsSection cards'>

                        {

                            books.map((data, index) => {

                                if (correntCtegory == 'all') {

                                    return (
                                        // className={index <= showMorebooks ? 'acepted' : 'none'}
                                        <div key={index} className='profile-page-card'>
                                            <div>
                                                <div className="card  book-container-products-genre-page" >
                                                    <img src={require(`../assets/subject-images/${data.image}`)} className="card__image product-image" alt={data.image} />
                                                    <div className="card__overlay">

                                                        <div className="card__header">
                                                            <div className="book-type">
                                                                <div className="college-par">
                                                                    <p> {data.college}</p>
                                                                </div>
                                                                <div>
                                                                    <p> {data.university}</p>
                                                                </div>
                                                            </div>
                                                            <div className="book-info-with-user">
                                                                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                                                {/* <img className="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" /> */}
                                                                <div className="card__header-text">
                                                                    <h3 className="card__title">{data.subject}</h3>
                                                                    <span className="user-name-par">{data.userName} </span>
                                                                </div>

                                                            </div>
                                                            <div className="book__status">
                                                                <p style={{ display: data.slide == 1 ? "none" : '' }} className={data.sale == 1 ? 'true-status' : 'false-status'}>{data.sale == 1 ? 'sale' : 'sale'}</p>
                                                                <p style={{ display: data.slide == 1 ? "none" : '' }} className={data.exchange == 1 ? 'true-status' : 'false-status'}>{data.exchange == 1 ? 'exchange' : 'exchange'}</p>
                                                                <p style={{ display: data.slide == 1 ? "none" : '' }} className={data.donation == 1 ? 'true-status' : 'false-status'} > {data.donation == 1 ? 'donation' : 'donation'}</p>
                                                                <p style={{ display: data.slide == 1 ? "" : 'none' }} className={data.slide == 1 ? 'true-status' : 'false-status'} > {data.donation == 1 ? 'slide' : 'slide'}</p>
                                                                <p className="card__status">10:00AM</p>
                                                            </div>
                                                        </div>
                                                        <div className="book-info">
                                                            {
                                                                data.slide == 1 ? (
                                                                    <div className="more-details-button">
                                                                        <button variant="outline-secondary" className="details-book-button" onClick={
                                                                            async () => {


                                                                                await axios.get(`http://localhost:4000/files/${data.file}`,
                                                                                    {
                                                                                        responseType: 'arraybuffer',
                                                                                        headers: {
                                                                                            'Content-Type': 'application/json',
                                                                                            'Accept': 'application/pdf'
                                                                                        }
                                                                                    })
                                                                                    .then((response) => {
                                                                                        const url = window.URL.createObjectURL(new Blob([response.data]));
                                                                                        const link = document.createElement('a');
                                                                                        link.href = url;
                                                                                        link.setAttribute('download', data.file.split('_')[1]); //or any other extension
                                                                                        document.body.appendChild(link);
                                                                                        link.click();
                                                                                    })
                                                                                    .catch((error) => console.log(error));

                                                                            }
                                                                        } >
                                                                            Download PDF
                                                                            {/* <a type="button"
                                                                className="btn btn-secondary btn-lg"
                                                                href={`http://localhost:4000/files/${data.file}`}

                                                                download>
                                                                Download PDF
                                                            </a> */}
                                                                        </button>
                                                                    </div>
                                                                )
                                                                    :
                                                                    (
                                                                        <div className="more-details-button">
                                                                            <Link to={`${location.pathname}/${data.book_ID}`} replace className="lineArrowRight">
                                                                                <button variant="outline-secondary" className="details-book-button"> more details <MdReadMore className="more-details-icon" /></button>
                                                                            </Link>
                                                                        </div>

                                                                    )

                                                            }
                                                            {
                                                                data.slide == 1 ? '' : <div className="text-auther-button">
                                                                    <div className="text-auther-icon">
                                                                        <span className="text-auther">message</span>
                                                                        <span><RiMessengerLine className="text-icon" /></span>
                                                                    </div>
                                                                </div>
                                                            }

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    )
                                }
                                if (correntCtegory == 'exchange' && data.exchange == 1) {

                                    return (
                                        <div key={index} >
                                            <div>
                                                <div className="card  book-container-products-genre-page" >
                                                    <img src={require(`../assets/subject-images/${data.image}`)} className="card__image product-image" alt={data.image} />
                                                    <div className="card__overlay">

                                                        <div className="card__header">
                                                            <div className="book-type">
                                                                <div className="college-par">
                                                                    <p> {data.college}</p>
                                                                </div>
                                                                <div>
                                                                    <p > {data.university}</p>
                                                                </div>


                                                            </div>
                                                            <div className="book-info-with-user">
                                                                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                                                {/* <img className="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" /> */}
                                                                <div className="card__header-text">
                                                                    <h3 className="card__title">{data.subject}</h3>
                                                                    <span className="user-name-par">{data.userName} </span>
                                                                </div>

                                                            </div>
                                                            <div className="book__status">
                                                                <p className={data.sale == 1 ? 'true-status' : 'false-status'}>{data.sale == 1 ? 'sale' : 'sale'}</p>
                                                                <p className={data.exchange == 1 ? 'true-status' : 'false-status'}>{data.exchange == 1 ? 'exchange' : 'exchange'}</p>
                                                                <p className={data.donation == 1 ? 'true-status' : 'false-status'} > {data.donation == 1 ? 'donation' : 'donation'}</p>

                                                                <p className="card__status">10:00AM</p>
                                                            </div>
                                                        </div>
                                                        <div className="book-info">
                                                            <div className="more-details-button">
                                                                <Link to={`${location.pathname}/${data.book_ID}`} replace className="lineArrowRight">
                                                                    <button variant="outline-secondary" className="details-book-button"> more details <MdReadMore className="more-details-icon" /></button>
                                                                </Link>

                                                            </div>
                                                            <div className="text-auther-button">
                                                                <div className="text-auther-icon">
                                                                    <span className="text-auther">message</span>
                                                                    <span><RiMessengerLine className="text-icon" /></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                                if (correntCtegory == 'donation' && data.donation == 1) {
                                    return (
                                        <div key={index} >
                                            <div>
                                                <div className="card  book-container-products-genre-page" >
                                                    <img src={require(`../assets/subject-images/${data.image}`)} className="card__image product-image" alt={data.image} />
                                                    <div className="card__overlay">

                                                        <div className="card__header">
                                                            <div className="book-type">
                                                                <div className="college-par">
                                                                    <p> {data.college}</p>
                                                                </div>
                                                                <div>
                                                                    <p > {data.university}</p>
                                                                </div>


                                                            </div>
                                                            <div className="book-info-with-user">
                                                                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                                                {/* <img className="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" /> */}
                                                                <div className="card__header-text">
                                                                    <h3 className="card__title">{data.subject}</h3>
                                                                    <span className="user-name-par">{data.userName} </span>
                                                                </div>

                                                            </div>
                                                            <div className="book__status">
                                                                <p className={data.sale == 1 ? 'true-status' : 'false-status'}>{data.sale == 1 ? 'sale' : 'sale'}</p>
                                                                <p className={data.exchange == 1 ? 'true-status' : 'false-status'}>{data.exchange == 1 ? 'exchange' : 'exchange'}</p>
                                                                <p className={data.donation == 1 ? 'true-status' : 'false-status'} > {data.donation == 1 ? 'donation' : 'donation'}</p>

                                                                <p className="card__status">10:00AM</p>
                                                            </div>
                                                        </div>
                                                        <div className="book-info">
                                                            <div className="more-details-button">
                                                                <Link to={`${location.pathname}/${data.book_ID}`} replace className="lineArrowRight">
                                                                    <button variant="outline-secondary" className="details-book-button"> more details <MdReadMore className="more-details-icon" /></button>
                                                                </Link>

                                                            </div>
                                                            <div className="text-auther-button">
                                                                <div className="text-auther-icon">
                                                                    <span className="text-auther">message</span>
                                                                    <span><RiMessengerLine className="text-icon" /></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    )
                                }
                                if (correntCtegory == 'sale' && data.sale == 1) {
                                    return (
                                        <div key={index}>
                                            <div>
                                                <div className="card  book-container-products-genre-page" >
                                                    <img src={require(`../assets/subject-images/${data.image}`)} className="card__image product-image" alt={data.image} />
                                                    <div className="card__overlay">

                                                        <div className="card__header">
                                                            <div className="book-type">
                                                                <div className="college-par">
                                                                    <p> {data.college}</p>
                                                                </div>
                                                                <div>
                                                                    <p > {data.university}</p>
                                                                </div>


                                                            </div>
                                                            <div className="book-info-with-user">
                                                                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                                                {/* <img className="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" /> */}
                                                                <div className="card__header-text">
                                                                    <h3 className="card__title">{data.subject}</h3>
                                                                    <span className="user-name-par">{data.userName} </span>
                                                                </div>

                                                            </div>
                                                            <div className="book__status">
                                                                <p className={data.sale == 1 ? 'true-status' : 'false-status'}>{data.sale == 1 ? 'sale' : 'sale'}</p>
                                                                <p className={data.exchange == 1 ? 'true-status' : 'false-status'}>{data.exchange == 1 ? 'exchange' : 'exchange'}</p>
                                                                <p className={data.donation == 1 ? 'true-status' : 'false-status'} > {data.donation == 1 ? 'donation' : 'donation'}</p>

                                                                <p className="card__status">10:00AM</p>
                                                            </div>
                                                        </div>
                                                        <div className="book-info">
                                                            <div className="more-details-button">
                                                                <Link to={`${location.pathname}/${data.book_ID}`} replace className="lineArrowRight">
                                                                    <button variant="outline-secondary" className="details-book-button"> more details <MdReadMore className="more-details-icon" /></button>
                                                                </Link>

                                                            </div>
                                                            <div className="text-auther-button">
                                                                <div className="text-auther-icon">
                                                                    <span className="text-auther">message</span>
                                                                    <span><RiMessengerLine className="text-icon" /></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    )
                                }

                                if (correntCtegory == 'slide' && data.slide == 1) {
                                    return (
                                        <div key={index}>
                                            <div>
                                                <div className="card  book-container-products-genre-page" >
                                                    <img src={require(`../assets/subject-images/${data.image}`)} className="card__image product-image" alt={data.image} />
                                                    <div className="card__overlay">

                                                        <div className="card__header">
                                                            <div className="book-type">
                                                                <div className="college-par">
                                                                    <p> {data.college}</p>
                                                                </div>
                                                                <div>
                                                                    <p > {data.university}</p>
                                                                </div>


                                                            </div>
                                                            <div className="book-info-with-user">
                                                                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                                                {/* <img className="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" /> */}
                                                                <div className="card__header-text">
                                                                    <h3 className="card__title">{data.subject}</h3>
                                                                    <span className="user-name-par">{data.userName} </span>
                                                                </div>

                                                            </div>
                                                            <div className="book__status">
                                                                <p className={data.sale == 1 ? 'true-status' : 'false-status'}>{data.sale == 1 ? 'sale' : 'sale'}</p>
                                                                <p className={data.exchange == 1 ? 'true-status' : 'false-status'}>{data.exchange == 1 ? 'exchange' : 'exchange'}</p>
                                                                <p className={data.donation == 1 ? 'true-status' : 'false-status'} > {data.donation == 1 ? 'donation' : 'donation'}</p>
                                                                <p className={data.slide == 1 ? 'true-status' : 'false-status'} > {data.donation == 1 ? 'slide' : 'slide'}</p>
                                                                <p className="card__status">10:00AM</p>
                                                            </div>
                                                        </div>
                                                        <div className="book-info">
                                                            <div className="more-details-button">
                                                                <button variant="outline-secondary" className="details-book-button" onClick={
                                                                    async () => {


                                                                        await axios.get(`http://localhost:4000/files/${data.file}`,
                                                                            {
                                                                                responseType: 'arraybuffer',
                                                                                headers: {
                                                                                    'Content-Type': 'application/json',
                                                                                    'Accept': 'application/pdf'
                                                                                }
                                                                            })
                                                                            .then((response) => {
                                                                                const url = window.URL.createObjectURL(new Blob([response.data]));
                                                                                const link = document.createElement('a');
                                                                                link.href = url;
                                                                                link.setAttribute('download', data.file.split('_')[1]); //or any other extension
                                                                                document.body.appendChild(link);
                                                                                link.click();
                                                                            })
                                                                            .catch((error) => console.log(error));

                                                                    }
                                                                } >
                                                                    Download PDF
                                                                    {/* <a type="button"
                                                                className="btn btn-secondary btn-lg"
                                                                href={`http://localhost:4000/files/${data.file}`}

                                                                download>
                                                                Download PDF
                                                            </a> */}
                                                                </button>


                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    )
                                }
                            })
                            // .slice(0, showMorebooks)
                        }

                    </div>

                    }
                    {/* <div onClick={showMoreBooksHandler} className={books.length <= 0 ? 'none' : 'showMoreBooksBotton'}>
                <p class="style-5">Show More</p>
            </div> */}
                </div >
            )

                //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  // 
                : (

                    loading ? <h1>loading ....</h1> : <div className="profile">
                        <header className="header">
                            <div class="details">
                                <img src="https://i.pinimg.com/564x/2b/d3/76/2bd37621332a26ac1da3efb07994846e.jpg" alt="John Doe" class="profile-pic" />
                                <h1 class="heading">{userName}</h1>
                                <div class="location">

                                    {/* add social mother social media links instead  */}
                                    {/* <AiTwotoneBook /> */}
                                    <h6 className='publishedBooks' > {books.length} published books</h6>
                                    <div className='socialMediaLinks'>
                                        <a className={userInfo.facebookLink ? 'profilePageHeadericons' : 'profilePageHeadericons noLink'} href={userInfo.facebookLink} > <AiFillFacebook /></a>

                                        <a className='profilePageHeadericons' href={userInfo.twitterLink}> <AiFillTwitterCircle /></a>
                                        <a className='profilePageHeadericons' href={userInfo.instaLink}> <AiFillInstagram /></a>
                                        <a className='profilePageHeadericons'><BiEnvelope /></a>

                                    </div>

                                </div>
                                {/* number info section: number of the posted books and the categories */}

                                <div className="stats" >
                                    <p className={correntCtegory == 'all' ? 'col-4 activCategory' : "col-4 "} onClick={allHandelr} >
                                        {/* <h4>{books.length}</h4> */}
                                        <h5>all</h5>
                                    </p>
                                    <p className={correntCtegory == 'exchange' ? 'col-4 activCategory' : "col-4 "} onClick={exchangeHandelr}>

                                        <h5>exchange</h5>
                                    </p>
                                    <p className={correntCtegory == 'donation' ? 'col-4 activCategory' : "col-4 "} onClick={donationHandelr}>

                                        <h5>donation</h5>
                                    </p>
                                    <p className={correntCtegory == 'sale' ? 'col-4 activCategory' : "col-4 "} onClick={saleHandelr}>

                                        <h5>sale</h5>
                                    </p>
                                    <p className={correntCtegory == 'slide' ? 'col-4 activCategory' : "col-4 "} onClick={slideHandler}>

                                        <h5>slide</h5>
                                    </p>
                                </div>
                            </div>
                        </header>

                        {books.length <= 0 ? <div> no posets yet</div> : <div className='postsSection cards'>

                            {

                                books.map((data, index) => {

                                    if (correntCtegory == 'all') {

                                        return (
                                            // className={index <= showMorebooks ? 'acepted' : 'none'}
                                            <div key={index} className='profile-page-card'>
                                                <div>
                                                    <div className="card  book-container-products-genre-page" >
                                                        <img src={require(`../assets/subject-images/${data.image}`)} className="card__image product-image" alt={data.image} />
                                                        <div className="card__overlay">

                                                            <div className="card__header">
                                                                <div className="book-type">
                                                                    <div className="college-par">
                                                                        <p> {data.college}</p>
                                                                    </div>
                                                                    <div>
                                                                        <p> {data.university}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="book-info-with-user">
                                                                    <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                                                    {/* <img className="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" /> */}
                                                                    <div className="card__header-text">
                                                                        <h3 className="card__title">{data.subject}</h3>
                                                                        <span className="user-name-par">{data.userName} </span>
                                                                    </div>

                                                                </div>
                                                                <div className="book__status">
                                                                    <p style={{ display: data.slide == 1 ? "none" : '' }} className={data.sale == 1 ? 'true-status' : 'false-status'}>{data.sale == 1 ? 'sale' : 'sale'}</p>
                                                                    <p style={{ display: data.slide == 1 ? "none" : '' }} className={data.exchange == 1 ? 'true-status' : 'false-status'}>{data.exchange == 1 ? 'exchange' : 'exchange'}</p>
                                                                    <p style={{ display: data.slide == 1 ? "none" : '' }} className={data.donation == 1 ? 'true-status' : 'false-status'} > {data.donation == 1 ? 'donation' : 'donation'}</p>
                                                                    <p style={{ display: data.slide == 1 ? "" : 'none' }} className={data.slide == 1 ? 'true-status' : 'false-status'} > {data.donation == 1 ? 'slide' : 'slide'}</p>
                                                                    <p className="card__status">10:00AM</p>
                                                                </div>
                                                            </div>
                                                            <div className="book-info">
                                                                {
                                                                    data.slide == 1 ? (
                                                                        <div className="more-details-button">
                                                                            <button variant="outline-secondary" className="details-book-button" onClick={
                                                                                async () => {


                                                                                    await axios.get(`http://localhost:4000/files/${data.file}`,
                                                                                        {
                                                                                            responseType: 'arraybuffer',
                                                                                            headers: {
                                                                                                'Content-Type': 'application/json',
                                                                                                'Accept': 'application/pdf'
                                                                                            }
                                                                                        })
                                                                                        .then((response) => {
                                                                                            const url = window.URL.createObjectURL(new Blob([response.data]));
                                                                                            const link = document.createElement('a');
                                                                                            link.href = url;
                                                                                            link.setAttribute('download', data.file.split('_')[1]); //or any other extension
                                                                                            document.body.appendChild(link);
                                                                                            link.click();
                                                                                        })
                                                                                        .catch((error) => console.log(error));

                                                                                }
                                                                            } >
                                                                                Download PDF
                                                                                {/* <a type="button"
                                                                className="btn btn-secondary btn-lg"
                                                                href={`http://localhost:4000/files/${data.file}`}

                                                                download>
                                                                Download PDF
                                                            </a> */}
                                                                            </button>
                                                                        </div>
                                                                    )
                                                                        :
                                                                        (
                                                                            <div className="more-details-button">
                                                                                <Link to={`${location.pathname}/${data.book_ID}`} replace className="lineArrowRight">
                                                                                    <button variant="outline-secondary" className="details-book-button"> more details <MdReadMore className="more-details-icon" /></button>
                                                                                </Link>
                                                                            </div>

                                                                        )

                                                                }
                                                                {
                                                                    data.slide == 1 ? '' : <div className="text-auther-button">
                                                                        <div className="text-auther-icon">
                                                                            <span className="text-auther">message</span>
                                                                            <span><RiMessengerLine className="text-icon" /></span>
                                                                        </div>
                                                                    </div>
                                                                }

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>
                                        )
                                    }
                                    if (correntCtegory == 'exchange' && data.exchange == 1) {

                                        return (
                                            <div key={index} >
                                                <div>
                                                    <div className="card  book-container-products-genre-page" >
                                                        <img src={require(`../assets/subject-images/${data.image}`)} className="card__image product-image" alt={data.image} />
                                                        <div className="card__overlay">

                                                            <div className="card__header">
                                                                <div className="book-type">
                                                                    <div className="college-par">
                                                                        <p> {data.college}</p>
                                                                    </div>
                                                                    <div>
                                                                        <p > {data.university}</p>
                                                                    </div>


                                                                </div>
                                                                <div className="book-info-with-user">
                                                                    <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                                                    {/* <img className="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" /> */}
                                                                    <div className="card__header-text">
                                                                        <h3 className="card__title">{data.subject}</h3>
                                                                        <span className="user-name-par">{data.userName} </span>
                                                                    </div>

                                                                </div>
                                                                <div className="book__status">
                                                                    <p className={data.sale == 1 ? 'true-status' : 'false-status'}>{data.sale == 1 ? 'sale' : 'sale'}</p>
                                                                    <p className={data.exchange == 1 ? 'true-status' : 'false-status'}>{data.exchange == 1 ? 'exchange' : 'exchange'}</p>
                                                                    <p className={data.donation == 1 ? 'true-status' : 'false-status'} > {data.donation == 1 ? 'donation' : 'donation'}</p>

                                                                    <p className="card__status">10:00AM</p>
                                                                </div>
                                                            </div>
                                                            <div className="book-info">
                                                                <div className="more-details-button">
                                                                    <Link to={`${location.pathname}/${data.book_ID}`} replace className="lineArrowRight">
                                                                        <button variant="outline-secondary" className="details-book-button"> more details <MdReadMore className="more-details-icon" /></button>
                                                                    </Link>

                                                                </div>
                                                                <div className="text-auther-button">
                                                                    <div className="text-auther-icon">
                                                                        <span className="text-auther">message</span>
                                                                        <span><RiMessengerLine className="text-icon" /></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                    if (correntCtegory == 'donation' && data.donation == 1) {
                                        return (
                                            <div key={index} >
                                                <div>
                                                    <div className="card  book-container-products-genre-page" >
                                                        <img src={require(`../assets/subject-images/${data.image}`)} className="card__image product-image" alt={data.image} />
                                                        <div className="card__overlay">

                                                            <div className="card__header">
                                                                <div className="book-type">
                                                                    <div className="college-par">
                                                                        <p> {data.college}</p>
                                                                    </div>
                                                                    <div>
                                                                        <p > {data.university}</p>
                                                                    </div>


                                                                </div>
                                                                <div className="book-info-with-user">
                                                                    <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                                                    {/* <img className="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" /> */}
                                                                    <div className="card__header-text">
                                                                        <h3 className="card__title">{data.subject}</h3>
                                                                        <span className="user-name-par">{data.userName} </span>
                                                                    </div>

                                                                </div>
                                                                <div className="book__status">
                                                                    <p className={data.sale == 1 ? 'true-status' : 'false-status'}>{data.sale == 1 ? 'sale' : 'sale'}</p>
                                                                    <p className={data.exchange == 1 ? 'true-status' : 'false-status'}>{data.exchange == 1 ? 'exchange' : 'exchange'}</p>
                                                                    <p className={data.donation == 1 ? 'true-status' : 'false-status'} > {data.donation == 1 ? 'donation' : 'donation'}</p>

                                                                    <p className="card__status">10:00AM</p>
                                                                </div>
                                                            </div>
                                                            <div className="book-info">
                                                                <div className="more-details-button">
                                                                    <Link to={`${location.pathname}/${data.book_ID}`} replace className="lineArrowRight">
                                                                        <button variant="outline-secondary" className="details-book-button"> more details <MdReadMore className="more-details-icon" /></button>
                                                                    </Link>

                                                                </div>
                                                                <div className="text-auther-button">
                                                                    <div className="text-auther-icon">
                                                                        <span className="text-auther">message</span>
                                                                        <span><RiMessengerLine className="text-icon" /></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>
                                        )
                                    }
                                    if (correntCtegory == 'sale' && data.sale == 1) {
                                        return (
                                            <div key={index}>
                                                <div>
                                                    <div className="card  book-container-products-genre-page" >
                                                        <img src={require(`../assets/subject-images/${data.image}`)} className="card__image product-image" alt={data.image} />
                                                        <div className="card__overlay">

                                                            <div className="card__header">
                                                                <div className="book-type">
                                                                    <div className="college-par">
                                                                        <p> {data.college}</p>
                                                                    </div>
                                                                    <div>
                                                                        <p > {data.university}</p>
                                                                    </div>


                                                                </div>
                                                                <div className="book-info-with-user">
                                                                    <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                                                    {/* <img className="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" /> */}
                                                                    <div className="card__header-text">
                                                                        <h3 className="card__title">{data.subject}</h3>
                                                                        <span className="user-name-par">{data.userName} </span>
                                                                    </div>

                                                                </div>
                                                                <div className="book__status">
                                                                    <p className={data.sale == 1 ? 'true-status' : 'false-status'}>{data.sale == 1 ? 'sale' : 'sale'}</p>
                                                                    <p className={data.exchange == 1 ? 'true-status' : 'false-status'}>{data.exchange == 1 ? 'exchange' : 'exchange'}</p>
                                                                    <p className={data.donation == 1 ? 'true-status' : 'false-status'} > {data.donation == 1 ? 'donation' : 'donation'}</p>

                                                                    <p className="card__status">10:00AM</p>
                                                                </div>
                                                            </div>
                                                            <div className="book-info">
                                                                <div className="more-details-button">
                                                                    <Link to={`${location.pathname}/${data.book_ID}`} replace className="lineArrowRight">
                                                                        <button variant="outline-secondary" className="details-book-button"> more details <MdReadMore className="more-details-icon" /></button>
                                                                    </Link>

                                                                </div>
                                                                <div className="text-auther-button">
                                                                    <div className="text-auther-icon">
                                                                        <span className="text-auther">message</span>
                                                                        <span><RiMessengerLine className="text-icon" /></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>
                                        )
                                    }

                                    if (correntCtegory == 'slide' && data.slide == 1) {
                                        return (
                                            <div key={index}>
                                                <div>
                                                    <div className="card  book-container-products-genre-page" >
                                                        <img src={require(`../assets/subject-images/${data.image}`)} className="card__image product-image" alt={data.image} />
                                                        <div className="card__overlay">

                                                            <div className="card__header">
                                                                <div className="book-type">
                                                                    <div className="college-par">
                                                                        <p> {data.college}</p>
                                                                    </div>
                                                                    <div>
                                                                        <p > {data.university}</p>
                                                                    </div>


                                                                </div>
                                                                <div className="book-info-with-user">
                                                                    <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                                                    {/* <img className="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" /> */}
                                                                    <div className="card__header-text">
                                                                        <h3 className="card__title">{data.subject}</h3>
                                                                        <span className="user-name-par">{data.userName} </span>
                                                                    </div>

                                                                </div>
                                                                <div className="book__status">
                                                                    <p className={data.sale == 1 ? 'true-status' : 'false-status'}>{data.sale == 1 ? 'sale' : 'sale'}</p>
                                                                    <p className={data.exchange == 1 ? 'true-status' : 'false-status'}>{data.exchange == 1 ? 'exchange' : 'exchange'}</p>
                                                                    <p className={data.donation == 1 ? 'true-status' : 'false-status'} > {data.donation == 1 ? 'donation' : 'donation'}</p>
                                                                    <p className={data.slide == 1 ? 'true-status' : 'false-status'} > {data.donation == 1 ? 'slide' : 'slide'}</p>
                                                                    <p className="card__status">10:00AM</p>
                                                                </div>
                                                            </div>
                                                            <div className="book-info">
                                                                <div className="more-details-button">
                                                                    <button variant="outline-secondary" className="details-book-button" onClick={
                                                                        async () => {


                                                                            await axios.get(`http://localhost:4000/files/${data.file}`,
                                                                                {
                                                                                    responseType: 'arraybuffer',
                                                                                    headers: {
                                                                                        'Content-Type': 'application/json',
                                                                                        'Accept': 'application/pdf'
                                                                                    }
                                                                                })
                                                                                .then((response) => {
                                                                                    const url = window.URL.createObjectURL(new Blob([response.data]));
                                                                                    const link = document.createElement('a');
                                                                                    link.href = url;
                                                                                    link.setAttribute('download', data.file.split('_')[1]); //or any other extension
                                                                                    document.body.appendChild(link);
                                                                                    link.click();
                                                                                })
                                                                                .catch((error) => console.log(error));

                                                                        }
                                                                    } >
                                                                        Download PDF
                                                                        {/* <a type="button"
                                                                className="btn btn-secondary btn-lg"
                                                                href={`http://localhost:4000/files/${data.file}`}

                                                                download>
                                                                Download PDF
                                                            </a> */}
                                                                    </button>


                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>
                                        )
                                    }
                                })
                                // .slice(0, showMorebooks)
                            }

                        </div>

                        }
                        {/* <div onClick={showMoreBooksHandler} className={books.length <= 0 ? 'none' : 'showMoreBooksBotton'}>
                <p class="style-5">Show More</p>
            </div> */}
                    </div>
                )



    )
}

export default ProfileComponent