import {useState , useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import './Gallery.css'
function Gallery(){
    const [Data , setData] = useState([])
      useEffect(() => {
        axios({
            "method": "GET",
            "url": "http://localhost:4000/college",
            "headers": {}, "params": {}
          }).then((response) => {
      
              const APIResponse = response.data // This is response data from AXIOS
            //   console.log("response: ", APIResponse.data) // This is response data from API
              setData(APIResponse.data) // Only Response from API is set in state
            //   console.log(Data.map((d)=>{
            //       console.log(d)
            //   }))
            // console.log(Data)
            })
            .catch((error) => {
              console.log(error)
            })
        
      },[setData])
    
    return(
      <div className="gallery-section">
        <h1>sellect a collage</h1>
        <div className="gallery-container">
          
            {
                 
                    Data.map((item, idx) => {
                      return (
                        <Link key={idx} className="collage-link" to={`/college/${item.college.replaceAll(' ', '-')}/${item.id}`}>
                        <div className="gallery-item" >
                          <img src={item.image} alt={item.college + ' ' + 'collage'} />
                          <p>
                              {item.college}
                          </p>
                          </div>
                          </Link>
                      )
                    })
            }
        </div>
        </div>
    )
}
export default Gallery