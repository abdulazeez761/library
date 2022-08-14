import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"
import axios from "axios";
import { RiMessengerLine } from "react-icons/ri";
import { MdReadMore } from "react-icons/md";
import { HiOutlineArrowRight } from "react-icons/hi";
// import './productsGenrePage.css'
const ProdactGenrePageComponent = () => {
    const { name, id, genre } = useParams();
    const [books, setBooks] = useState();
    const [loading, setLoading] = useState(true);
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

    return (
        <div>

            <div className="cards">
                {/* <div style={{ position: "absolute", margin: '-3em', paddingLeft: '5em', display: 'flex', width: '100%', justifyContent: 'space-between', }}>
                    <p>sales or exchange section</p>
                    <Link to={`${location.pathname}/sale`} replace >
                        <p style={{ fontSize: '1.5em' }}  >
                            <HiOutlineArrowRight />
                        </p>
                    </Link>
                </div> */}

                {

                    loading ? <p>loading....</p> : books.map((data, index) => {

                        // if (data[genre] )
                        if (data[genre] == 1 && data.college == name) {

                            return (
                                <div className="swiper-container" key={index}>

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
                                                        <p className={data.sale == 1 ? 'notEmpty' : 'empty'}>{data.sale == 1 ? 'sale' : ''}</p>
                                                        <p className={data.exchange == 1 ? 'notEmpty' : 'empty'}>{data.exchange == 1 ? 'exchange' : ''}</p>
                                                        <p className={data.donation == 1 ? 'notEmpty' : 'empty'} >{data.donation == 1 ? 'donation' : ''}</p>

                                                        <p className="card__status">10:00AM</p>
                                                    </div>
                                                </div>
                                                <div className="book-info">
                                                    <div className="more-details-button">
                                                        <button variant="outline-secondary" className="details-book-button">more details <MdReadMore className="more-details-icon" /></button>
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




                    })

                }


            </div>
        </div>
    )
}
export default ProdactGenrePageComponent;