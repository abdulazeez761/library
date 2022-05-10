import React , {useState , useEffect } from "react";
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
        <h1>test</h1>
        <div className="gallery-container">
          
            {
                 
                    Data.map((item, idx) => {
                      return (
                        <div className="gallery-item" key={idx}>
                          <img src={item.image}alt={item.college + ' ' + 'collage'} />
                          <p>
                              {item.college}
                          </p>
                          </div>
                      )
                    })
            }
        </div>
        </div>
    )
}
export default Gallery