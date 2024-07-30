export default function Footer() {
    return (
        <footer id="Footer">
            <div className="container">
                <div className="social-share">
                    <ul>
                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
                <div className="footer-logo-wrap">
                    Design Studio © 2018. Designed by{" "}
                    <a href="https://www.position2.com/">Position2</a>
                </div>
            </div>
        </footer>
    );
}