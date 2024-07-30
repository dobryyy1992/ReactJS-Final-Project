export default function Header() {
    return (
        <header id="Header">
            <nav className="main-navigation">
                <div className="container clearfix">
                    <div className="site-logo-wrap">
                        <a className="logo" href="#">
                            <img src="./images/logo.png" style={{ width: 150, height: 50 }} alt="Design Studio" />
                        </a>
                    </div>
                    <a href="/" className="menu-trigger hidden-lg-up">
                        <span>&nbsp;</span>
                    </a>
                    <div className="main-menu hidden-md-down">
                        <ul className="menu-list">
                            <li><a className="nav-link" href="/" >Home</a></li>
                            <li><a className="nav-link" href="/" >Books</a></li>
                            <li><a className="nav-link" href="/" >Add Book</a></li>
                            <li><a className="nav-link" href="/" >Login</a></li>
                            <li><a className="nav-link" href="/" >Register</a></li>
                            <li><a className="nav-link" href="/" >Logout</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}