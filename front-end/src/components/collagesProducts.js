import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"
import axios from "axios";
import './collegeProducts.css'
import Button from 'react-bootstrap/Button';
import { RiMessengerLine } from "react-icons/ri";
import { MdCommentBank, MdReadMore } from "react-icons/md";
import { HiOutlineArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import useSelecteUser from '../hooks/useSelectedUser';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Navigation } from "swiper";
import { useLocation } from 'react-router-dom'
function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}
const Books = () => {

    const { name, id } = useParams();

    const [books, setBooks] = useState();
    const [loading, setLoading] = useState(true);
    const [selectedGenre, setGenre] = useState([])
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    const [slidesPerViewState, setSlidesPerViewState] = useState(6)


    const location = useLocation()

    useEffect(() => {

        const getBooks = async () => {
            try {
                await axios.get('http://localhost:4000/products', {
                }).then((res) => {
                    setBooks(res.data.data);

                    setLoading(false)
                })
            } catch (err) {
                console.log(err)
            }
        }
        getBooks()
    }, [])
    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    //1450 = 5
    //1250 = 4
    //1000 = 3
    //720 = 2
    //500 =1




    return (
        <>

            <div className="cards">
                <div style={{ position: "absolute", margin: '-3em', display: 'flex', width: '100%', justifyContent: 'space-between', }}>
                    <h4>sales  section</h4>
                    <Link to={`${location.pathname}/sale`} replace className="lineArrowRight">
                        <p style={{ fontSize: '1.5em' }}  >
                            <HiOutlineArrowRight />
                        </p>
                    </Link>
                </div>
                <Swiper
                    //  IDK how am I  gonna understand this when I will recap the code 
                    //8/26/2022 only me and god know how the code works, and I'm sure about that one month later it will be only god know how it works
                    slidesPerView={(windowDimensions.width <= 1450 ? (5) : (6), windowDimensions.width <= 1250 ? (4) : (windowDimensions.width <= 1450 ? (5) : (6)), //first condetion 

                        //seconde condetion
                        windowDimensions.width <= 1000 ? (3) : (windowDimensions.width <= 1250 ? (4) : (windowDimensions.width <= 1450 ? (5) : (6))),
                        //third condetion
                        windowDimensions.width <= 720 ? (2) : (windowDimensions.width <= 1000 ? (3) : (windowDimensions.width <= 1250 ? (4) : (windowDimensions.width <= 1450 ? (5) : (6)))),
                        //fourth condetion
                        windowDimensions.width <= 500 ? (1) : (windowDimensions.width <= 720 ? (2) : (windowDimensions.width <= 1000 ? (3) : (windowDimensions.width <= 1250 ? (4) : (windowDimensions.width <= 1450 ? (5) : (6)))))
                    )}
                    spaceBetween={30}
                    // pagination={{
                    //     clickable: true,

                    // }}

                    // modules={[Pagination]}
                    navigation={true} modules={[Navigation]}
                    className="mySwiper"

                // breakpoints={{
                //     // when window width is >= 640px
                //     // 1080: {
                //     //     width: 1700,
                //     //     slidesPerView: 6,
                //     // },
                //     // when window width is >= 768px
                //     // 1600: {
                //     //     width: 1600,
                //     //     slidesPerView: 6,
                //     // },
                // }}
                >
                    {

                        loading ? <p>loading....</p> : books.map((data, index) => {

                            if (name.replace('-', ' ') === data.college) {
                                if (data.sale == 1) {
                                    return (
                                        <div className="swiper-container" key={index}>
                                            <SwiperSlide className="card-siper-container">
                                                <div >
                                                    <div className="card">
                                                        <img src={data.image} className="card__image" alt="" />
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
                                                                    <img className="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
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
                                                                    <Link to={`${location.pathname}/sale/${data.book_ID}`} replace className="lineArrowRight">
                                                                        <button variant="outline-secondary" className="details-book-button"> more details <MdReadMore className="more-details-icon" /></button>
                                                                    </Link>                                                                </div>
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

                                            </SwiperSlide>
                                        </div>
                                    )
                                }


                            }






                        })

                    }

                </Swiper>
            </div>
            <div className="cards">
                <div style={{ position: "absolute", margin: '-3em', display: 'flex', width: '100%', justifyContent: 'space-between', }}>
                    <h4>donation section</h4>
                    <Link to={`${location.pathname}/donation`} replace className="lineArrowRight">
                        <p style={{ fontSize: '1.5em' }}  >
                            <HiOutlineArrowRight />
                        </p>
                    </Link>
                </div>
                <Swiper
                    slidesPerView={(windowDimensions.width <= 1450 ? (5) : (6), windowDimensions.width <= 1250 ? (4) : (windowDimensions.width <= 1450 ? (5) : (6)), //first condetion 

                        //seconde condetion
                        windowDimensions.width <= 1000 ? (3) : (windowDimensions.width <= 1250 ? (4) : (windowDimensions.width <= 1450 ? (5) : (6))),
                        //third condetion
                        windowDimensions.width <= 720 ? (2) : (windowDimensions.width <= 1000 ? (3) : (windowDimensions.width <= 1250 ? (4) : (windowDimensions.width <= 1450 ? (5) : (6)))),
                        //fourth condetion
                        windowDimensions.width <= 500 ? (1) : (windowDimensions.width <= 720 ? (2) : (windowDimensions.width <= 1000 ? (3) : (windowDimensions.width <= 1250 ? (4) : (windowDimensions.width <= 1450 ? (5) : (6)))))
                    )}
                    spaceBetween={30}
                    // pagination={{
                    //     clickable: true,
                    // }}
                    // modules={[Pagination]}
                    navigation={true} modules={[Navigation]}
                    className="mySwiper"

                >
                    {

                        loading ? <p>loading....</p> : books.map((data, index) => {

                            if (name.replace('-', ' ') === data.college) {
                                if (data.donation == 1) {

                                    return (

                                        <div className="swiper-container" key={index}>
                                            <SwiperSlide className="card-siper-container">
                                                <div >
                                                    <div className="card">
                                                        <img src={data.image} className="card__image" alt="" />
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
                                                                    <img className="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
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
                                                                    <Link to={`${location.pathname}/donation/${data.book_ID}`} replace className="lineArrowRight">
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

                                            </SwiperSlide>
                                        </div>
                                    )
                                }


                            }






                        })

                    }

                </Swiper>
            </div>


            <div className="cards">
                <div style={{ position: "absolute", margin: '-3em', display: 'flex', width: '100%', justifyContent: 'space-between', }}>
                    <h4>exchange section</h4>
                    <Link to={`${location.pathname}/exchange`} replace className="lineArrowRight">
                        <p style={{ fontSize: '1.5em' }}  >
                            <HiOutlineArrowRight />
                        </p>
                    </Link>
                </div>
                <Swiper
                    slidesPerView={(windowDimensions.width <= 1450 ? (5) : (6), windowDimensions.width <= 1250 ? (4) : (windowDimensions.width <= 1450 ? (5) : (6)), //first condetion 

                        //seconde condetion
                        windowDimensions.width <= 1000 ? (3) : (windowDimensions.width <= 1250 ? (4) : (windowDimensions.width <= 1450 ? (5) : (6))),
                        //third condetion
                        windowDimensions.width <= 720 ? (2) : (windowDimensions.width <= 1000 ? (3) : (windowDimensions.width <= 1250 ? (4) : (windowDimensions.width <= 1450 ? (5) : (6)))),
                        //fourth condetion
                        windowDimensions.width <= 500 ? (1) : (windowDimensions.width <= 720 ? (2) : (windowDimensions.width <= 1000 ? (3) : (windowDimensions.width <= 1250 ? (4) : (windowDimensions.width <= 1450 ? (5) : (6)))))
                    )} spaceBetween={30}
                    // pagination={{
                    //     clickable: true,
                    // }}
                    // modules={[Pagination]}
                    navigation={true} modules={[Navigation]}
                    className="mySwiper"
                >

                    {

                        loading ? <p>loading....</p> : books.map((data, index) => {

                            if (name.replace('-', ' ') === data.college) {
                                if (data.exchange == 1) {
                                    return (

                                        <div className="swiper-container" key={index}>

                                            <SwiperSlide className="card-siper-container">
                                                <div>
                                                    <div className="card">
                                                        <img src={data.image} className="card__image" alt="" />
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
                                                                    <img className="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
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
                                                                    <Link to={`${location.pathname}/exchange/${data.book_ID}`} replace className="lineArrowRight">
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

                                            </SwiperSlide>
                                        </div>
                                    )
                                }


                            }






                        })

                    }

                </Swiper>
            </div>



            {/* slide */}
            <div className="cards">
                <div style={{ position: "absolute", margin: '-3em', display: 'flex', width: '100%', justifyContent: 'space-between', }}>
                    <h4>slide section</h4>
                    <Link to={`${location.pathname}/exchange`} replace className="lineArrowRight">
                        <p style={{ fontSize: '1.5em' }}  >
                            <HiOutlineArrowRight />
                        </p>
                    </Link>
                </div>
                <Swiper
                    slidesPerView={(windowDimensions.width <= 1450 ? (5) : (6), windowDimensions.width <= 1250 ? (4) : (windowDimensions.width <= 1450 ? (5) : (6)), //first condetion 

                        //seconde condetion
                        windowDimensions.width <= 1000 ? (3) : (windowDimensions.width <= 1250 ? (4) : (windowDimensions.width <= 1450 ? (5) : (6))),
                        //third condetion
                        windowDimensions.width <= 720 ? (2) : (windowDimensions.width <= 1000 ? (3) : (windowDimensions.width <= 1250 ? (4) : (windowDimensions.width <= 1450 ? (5) : (6)))),
                        //fourth condetion
                        windowDimensions.width <= 500 ? (1) : (windowDimensions.width <= 720 ? (2) : (windowDimensions.width <= 1000 ? (3) : (windowDimensions.width <= 1250 ? (4) : (windowDimensions.width <= 1450 ? (5) : (6)))))
                    )} spaceBetween={30}
                    // pagination={{
                    //     clickable: true,
                    // }}
                    // modules={[Pagination]}
                    navigation={true} modules={[Navigation]}
                    className="mySwiper"
                >

                    {

                        loading ? <p>loading....</p> : books.map((data, index) => {

                            if (name.replace('-', ' ') === data.college) {
                                if (data.slide == 1) {
                                    return (

                                        <div className="swiper-container" key={index}>

                                            <SwiperSlide className="card-siper-container">
                                                <div>
                                                    <div className="card">
                                                        <img src={data.image} className="card__image" alt="" />
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
                                                                    <img className="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
                                                                    <div className="card__header-text">
                                                                        <h3 className="card__title">{data.subject}</h3>
                                                                        <span className="user-name-par">{data.userName} </span>
                                                                    </div>

                                                                </div>
                                                                <div className="book__status">
                                                                    <p className={data.slide == 1 ? 'true-status' : 'false-status'} > {data.donation == 1 ? 'slide' : 'slide'}</p>
                                                                    <p className="card__status">10:00AM</p>
                                                                </div>
                                                            </div>
                                                            <div className="book-info">
                                                                <div className="more-details-button">
                                                                    <Link to={`${location.pathname}/exchange/${data.book_ID}`} replace className="lineArrowRight">
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

                                            </SwiperSlide>
                                        </div>
                                    )
                                }


                            }






                        })

                    }

                </Swiper>
            </div>
        </>
    )

}
export default Books

