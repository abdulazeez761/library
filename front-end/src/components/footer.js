import './footer.css'
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { ImLinkedin } from 'react-icons/im';
import { BsGithub } from 'react-icons/bs';


const Footer = () => {
    return (
        <footer class="footer-distributed">

            <div class="footer-right">

                <a href="#"><BsFacebook /></a>
                <a href="#"><AiFillTwitterCircle /></a>
                <a href="#"><ImLinkedin /></a>
                <a href="#"><BsGithub /></a>

            </div>

            <div class="footer-left">

                <p class="footer-links">
                    <a class="link-1" href="#">Home</a>

                    <a href="#about-me-container">About</a>

                    <a href="#">Add book</a>

                    <a href="#">Profile</a>


                </p>

                <p>abd828981@gmail.com &copy; 2022</p>
            </div>

        </footer>
    )
}

export default Footer