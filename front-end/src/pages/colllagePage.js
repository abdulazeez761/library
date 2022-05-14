import { useParams } from "react-router-dom";
import './collagesPage.css'
function CollagePage(){
    const {name , id} = useParams()
    const collageName =  name.replace('-' , ' ')
    // console.log(id)
    return(
       <div>
           {collageName} page
       </div>
    )
}
export default CollagePage;