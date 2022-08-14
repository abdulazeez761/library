import { useParams } from "react-router-dom";
import './collagesPage.css'
import Books from "../components/collagesProducts";
function CollagePage() {

    return (
        <div>
            <Books />
        </div>
    )
}
export default CollagePage;