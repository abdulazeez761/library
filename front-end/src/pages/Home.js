import './Home.css'
import Slider from "../components/Slider";
import Intro from "../components/intro";
import Quote from "../components/quote";
import Gallery from "../components/Gallery";
function Home() {
    return (
        <div>
            <Slider />
            <Intro />
            <Quote />
            <Gallery />
        </div>
    )
}
export default Home;