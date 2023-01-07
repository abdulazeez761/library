import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"
import axios from "axios";
import { RiMessengerLine } from "react-icons/ri";
import { MdReadMore } from "react-icons/md";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import './productsGenrePageComponent.css'
const ProdactGenrePageComponent = () => {
    const { name, id, genre } = useParams();
    const [books, setBooks] = useState();
    const [loading, setLoading] = useState(true);
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
        <div>
            <h1>{genre} page</h1>
            <div className="cards">
                <div style={{ position: "absolute", margin: '-3em', paddingLeft: '5em', display: 'flex', width: '100%', justifyContent: 'space-between', }}>
                    <Link to="./.." replace className="lineArrowRight">
                        <p style={{ fontSize: '1.5em' }}  >
                            <HiOutlineArrowLeft />
                        </p>
                    </Link>


                </div>


                {

                    loading ? <p>loading....</p> : books.map((data, index) => {

                        // if (data[genre] )
                        if (data[genre] == 1 && data.college == name) {

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
                                                        <Link to={`/${data.userName}`} className="lineArrowRight">
                                                            <img className="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
                                                        </Link>
                                                        <div className="card__header-text">
                                                            <h3 className="card__title">{data.subject}</h3>
                                                            <Link to={`/${data.userName}`} className="lineArrowRight">
                                                                <span className="user-name-par">{data.userName} </span>
                                                            </Link>
                                                        </div>

                                                    </div>
                                                    <div className="book__status">
                                                        <p style={{ display: data.slide == 1 ? "none" : '', backgroundColor: '#66BB6A' }} className={data.sale == 1 ? 'true-status' : 'false-status'}>{data.sale == 1 ? 'sale' : 'sale'}</p>
                                                        <p style={{ display: data.slide == 1 ? "none" : '', backgroundColor: '#F2C665' }} className={data.exchange == 1 ? 'true-status' : 'false-status'}>{data.exchange == 1 ? 'exchange' : 'exchange'}</p>
                                                        <p style={{ display: data.slide == 1 ? "none" : '', backgroundColor: '#2196F3' }} className={data.donation == 1 ? 'true-status' : 'false-status'} > {data.donation == 1 ? 'donation' : 'donation'}</p>
                                                        <p style={{ display: data.slide == 1 ? "" : 'none', backgroundColor: '#d0a773' }} className={data.slide == 1 ? 'true-status' : 'false-status'} > {data.donation == 1 ? 'slide' : 'slide'}</p>

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