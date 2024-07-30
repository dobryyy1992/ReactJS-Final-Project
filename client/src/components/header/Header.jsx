import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header id="Header">
            <nav className="main-navigation">
                <div className="container clearfix">
                    <div className="site-logo-wrap">
                        <Link to="/" className="logo-link">
                            <div className="logo"></div>
                        </Link>
                    </div>
                    <a href="/" className="menu-trigger hidden-lg-up">
                        <span>&nbsp;</span>
                    </a>
                    <div className="main-menu hidden-md-down">
                        <nav className="nav">
                            <Link className="link" to="/">Home</Link>
                            <Link className="link" to="/books">Books</Link>
                            <Link className="link" to="/register">Register</Link>
                            <Link className="link" to="/login">Login</Link>
                            <Link className="link" to="/books/create">Add Book</Link>
                            {/* <Link className="link" to="/logout">Logout</Link> */}
                        </nav>
                    </div>
                </div>
            </nav>
        </header>
    );
}