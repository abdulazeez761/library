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
import { AiOutlineClose } from "react-icons/ai";
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


                {

                    loading ? <p>loading....</p> : books.map((data, index) => {
                        if (bookID == data.book_ID) {
                            college = data.college
                            return (
                                <div className="product-card-container">

                                    <div className="product-image-container">

                                        <img src={require(`../assets/subject-images/${data.image}`)} alt={data.image} />
                                        <div className="user-and-book-info-container">

                                            <h1>{data.subject}</h1>
                                            <div className="product-subject-info">
                                                <p className="college-and-major" style={{ color: 'gray' }}> {data.university}</p>
                                                <p className="college-and-major" style={{ color: 'gray' }}> {data.college} : {data.major}</p>
                                            </div>


                                            <div className="subject-and-user-info">
                                                <div className="product-subject-user-info">
                                                    <Link to={`/${data.userName}`} >
                                                        <img className="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
                                                    </Link>
                                                    <Link to={`/${data.userName}`} className="lineArrowRight">
                                                        <p className="userName-product-page" style={{ color: "black" }}>{data.userName}</p>

                                                    </Link>
                                                </div>

                                                <div className="product-connection-info">
                                                    <p style={{ color: 'gray' }} > Phone number :  {data.phone_number}</p>
                                                    <p style={{ color: 'gray' }} > Email :  {data.email}</p>
                                                </div>

                                                <div className="status-container">
                                                    <p style={data.sale == 1 ? { display: 'block', backgroundColor: '#F2C665', color: "white", border: 'none' } : { display: 'none' }} >{data.sale ? 'sale' : ''}</p>
                                                    <p style={data.exchange == 1 ? { display: 'block', backgroundColor: '#F2C665', color: "white", border: 'none' } : { display: 'none' }}>{data.exchange ? 'exchange' : ''}</p>
                                                    <p style={data.donation == 1 ? { display: 'block', backgroundColor: '#F2C665', color: "white", border: 'none' } : { display: 'none' }}>{data.donation ? 'donation' : ''}</p>
                                                </div>
                                                <p className="post-time">
                                                    12 HOURS AGO
                                                </p>
                                            </div>

                                            <div className="book-type-info-container">

                                                {/* <div className="products-page-buttons">
                                                    <button className="contact-button">contact with the owner</button>
                                                </div> */}
                                            </div>
                                        </div>

                                    </div>
                                    <div >
                                        <Link to={`/college/${name}/${id}`} replace className="lineArrowRight  close-prduct-page-icon">
                                            <p style={{ fontSize: '1.5em' }}  >
                                                <AiOutlineClose />
                                            </p>
                                        </Link>
                                    </div>

                                </div>

                            )
                        }




                    })
                }
            </div>


            <div className="cards">
                <div style={{ position: "absolute", margin: '-3em', marginLeft: '1em', display: 'flex', width: '98%', justifyContent: 'space-between', }}>
                    <h4>{college} college books</h4>
                    <Link to={`/college/${name}/${id}/${genre}`} replace className="lineArrowRight">
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
                                            <div>
                                                <div className="card">
                                                    <img src={require(`../assets/subject-images/${data.image}`)} className="card__image" alt={data.image} />
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
                                                                <p className={data.sale == 1 ? 'true-status' : 'false-status'} style={{ backgroundColor: '#66BB6A' }}>{data.sale == 1 ? 'sale' : 'sale'}</p>
                                                                <p className={data.exchange == 1 ? 'true-status' : 'false-status'} style={{ backgroundColor: '#F2C665' }}>{data.exchange == 1 ? 'exchange' : 'exchange'}</p>
                                                                <p className={data.donation == 1 ? 'true-status' : 'false-status'} style={{ backgroundColor: '#2196F3' }}> {data.donation == 1 ? 'donation' : 'donation'}</p>

                                                                <p className="card__status">10:00AM</p>
                                                            </div>
                                                        </div>
                                                        <div className="book-info">
                                                            <div className="more-details-button">
                                                                <Link to={`/college/${data.college}/${id}/${genre}/${data.book_ID}`} replace className="lineArrowRight">
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