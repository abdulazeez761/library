import { useParams } from "react-router-dom";
import './collagesPage.css'
import Books from "../components/collagesProducts";
function CollagePage() {
    const { name, id } = useParams()
    const collageName = name.replace('-', '  ')
    // console.log(id)
    return (
        <div>
            <Books />
        </div>
    )
}
export default CollagePage;