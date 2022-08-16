import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"
import axios from "axios";

import { Link } from 'react-router-dom';
import { HiOutlineArrowLeft } from "react-icons/hi";

const ProductInfoPage = () => {
    const { name, id, genre, bookID } = useParams();
    const [books, setBooks] = useState();
    const [loading, setLoading] = useState(true);


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
            <div className="card-page-container">
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
                            console.log(data)
                            return (
                                <div>
                                    <p>{data.college}</p>
                                    <p>{data.donation}</p>
                                    <p>{data.email}</p>
                                    <p>{data.exchange}</p>
                                    <p>{data.image}</p>
                                    <p>{data.major}</p>
                                    <p>{data.phone_number}</p>
                                    <p>{data.sale}</p>
                                    <p>{data.subject}</p>
                                    <p>{data.university}</p>
                                    <p>{data.userName}</p>
                                    <div>
                                        <img src={data.image} />
                                        <div id='products-info'>
                                            <p>{data.college}</p>
                                            <p>{data.donation}</p>
                                            <p>{data.email}</p>
                                            <p>{data.exchange}</p>
                                            <p>{data.image}</p>
                                            <p>{data.major}</p>
                                            <p>{data.phone_number}</p>
                                            <p>{data.sale}</p>
                                            <p>{data.subject}</p>
                                            <p>{data.university}</p>
                                            <p>{data.userName}</p>
                                        </div>
                                    </div>
                                </div>

                            )
                        }
                    })
                }
            </div>
        </>

    )
}
export default ProductInfoPage