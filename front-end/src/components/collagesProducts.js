import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"
import { Buffer } from 'buffer';
import axios from "axios";

const Books = () => {
    const { name, id } = useParams()
    const [books, setBooks] = useState()
    const [loading, setLoading] = useState(true)
    const [booksImage, setbooksImage] = useState([])
    useEffect(() => {
        const getUsers = async () => {
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
        getUsers()
    }, [])
    // we're fetching  the sunjectsAPI to get the image of the book 
    useEffect(() => {
        const getMajor = async () => {
            try {
                await axios.get('http://localhost:4000/subjects', {
                }).then((res) => {
                    setbooksImage(res.data.data)

                })
            } catch (err) {
                console.log(err)
            }
        }
        getMajor()
    }, [])

    return (
        <>
            {
                loading ? <p>loading....</p> : books.map((data, index) => {



                    console.log(data)
                    if (name.replace('-', ' ') == data.college) {


                        return (
                            <div key={index}>
                                <img style={{ width: 100, height: 70, resizeMode: Image.resizeMode = "contain", borderWidth: 1, borderColor: 'red' }} src={data.image} />
                                <p>{data.subject}</p>
                                <p>{data.college}</p>
                                <p>{data.major}</p>
                                <p>{data.subject}</p>
                            </div>
                        )


                    }


                })

            }
        </>

    )
}
export default Books