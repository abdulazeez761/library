import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"
import axios from "axios";
import { Link } from 'react-router-dom';
import { HiOutlineArrowLeft } from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";
import { RiMessengerLine } from "react-icons/ri";
import { MdReadMore } from "react-icons/md";
import { useLocation } from 'react-router-dom'
import { Navigation } from "swiper";
import { HiOutlineArrowRight } from "react-icons/hi";
import { Navigate } from "react-router-dom";
import './productInfoPage.css'
const ProductInfoPage = () => {
    const { name, id, genre, bookID } = useParams();
    const [books, setBooks] = useState();
    const [loading, setLoading] = useState(true);
    let college = ''
    const location = useLocation()

    useEffect(() => {

        const getBooks = async () => {
            try {
                await axios.get('http://localhost:4000/products').then((res) => {
                    setBooks(res.data.data);
                    setLoading(false)
                })
            } catch (err) {
                console.log(err)
            }
        }
        getBooks()
    }, [])

    return (

        <>
            <div className="card-page-container" style={{ marginBottom: '10em' }}>
                {/* style={{ position: "absolute", margin: '-3em', paddingLeft: '5em', display: 'flex', width: '100%', justifyContent: 'space-between', }} */}
                <div >
                    <Link to="./.." replace className="lineArrowRight">
                        <p style={{ fontSize: '1.5em' }}  >
                            <HiOutlineArrowLeft />
                        </p>
                    </Link>
                </div>
                {

                    loading ? <p>loading....</p> : books.map((data, index) => {
                        if (bookID == data.book_ID) {
                            college = data.college
                            return (
                                <div className="product-card-container">
                                    <div className="product-image-container">
                                        <img src={data.image} />
                                        <div className="user-and-book-info-container">
                                            <h1>{data.subject}</h1>
                                            <div className="subject-and-user-info">

                                                <img className="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
                                                <p className="userName-product-page">{data.userName}</p>
                                                <p> {data.phone_number}</p>
                                                <p> {data.email}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="book-type-info-container">
                                        <p> {data.university}</p>
                                        <p className="college-and-major" style={{ color: 'gray' }}> {data.college} : {data.major}</p>
                                        <div className="status-container">
                                            <p style={data.sale == 1 ? { borderColor: '#d0a773' } : { backgroundColor: 'rgb(141, 141, 141)' }} >{data.sale ? 'sale' : ''}</p>
                                            <p style={data.exchange == 1 ? { borderColor: '#d0a773' } : { backgroundColor: 'rgb(141, 141, 141)' }}>{data.exchange ? 'exchange' : ''}</p>
                                            <p style={data.donation == 1 ? { borderColor: '#d0a773' } : { backgroundColor: 'rgb(141, 141, 141)' }}>{data.donation ? 'donation' : ''}</p>
                                        </div>
                                        <div className="products-page-buttons">
                                            <button className="contact-button">contact with the owner</button>
                                        </div>
                                    </div>

                                </div>

                            )
                        }




                    })
                }
            </div>


            <div className="cards">
                <div style={{ position: "absolute", margin: '-3em', display: 'flex', width: '100%', justifyContent: 'space-between', }}>
                    <h4>{college} college books</h4>
                    <Link to={`${location.pathname}`} replace className="lineArrowRight">
                        <p style={{ fontSize: '1.5em' }}  >
                            <HiOutlineArrowRight />
                        </p>
                    </Link>
                </div>
                <Swiper
                    slidesPerView={6}
                    spaceBetween={30}
                    // pagination={{
                    //     clickable: true,
                    // }}
                    // modules={[Pagination]}
                    navigation={true} modules={[Navigation]}
                    className="mySwiper"

                >
                    {

                        loading ? <p>loading...</p> : books.map((data, index) => {


                            if (data.college == college) {

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









                        })

                    }

                </Swiper>
            </div>
        </>

    )
}
export default ProductInfoPage