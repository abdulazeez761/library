import './Home.css'
import Intro from "../components/intro";
import Quote from "../components/quote";
import Gallery from "../components/Gallery";
import Footer from '../components/footer';
function Home() {
    return (
        <div>
            <Intro />
            <Quote />
            <Gallery />
            <Footer />
        </div>
    )
}
export default Home;