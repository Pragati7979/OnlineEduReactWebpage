import './Footer.css'
import {FaGithub,FaLinkedin,FaInstagram} from "react-icons/fa"
const Footer = () => {
    return <footer class="footer">
    <div class="container">
        <div class="row">
            <div class="footer-col">
                <h4>company</h4>
                <ul>
                    <li><a href="#">about us</a></li>
                    <li><a href="#">our services</a></li>
                    <li><a href="#">privacy policy</a></li>
                    <li><a href="#">affiliate program</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>get help</h4>
                <ul>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Placements</a></li>
                    <li><a href="#">Courses</a></li>
                    <li><a href="#">Blogs</a></li>
                    <li><a href="#">Get personal assistance</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Our Offices</h4>
                <ul>
                    <li><a href="#">Delhi</a></li>
                    <li><a href="#">Bangalore</a></li>
                    <li><a href="#">Pune</a></li>
                    <li><a href="#">Mysore</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>follow us</h4>
                <div class="social-links">
                    <a href="#"><FaGithub/></a>
                    <a href="#"><FaLinkedin/></a>
                    <a href="#"><FaInstagram/></a>
                 
                </div>
            </div>
        </div>
    </div>
</footer>

}

export default Footer