import AllBooks from './components/all-books/AllBooks';
import CreateBook from './components/create-book/CreateBook';
import DetailsBook from './components/details-book/DetailsBook';
import EditBook from './components/edit-book/EditBook';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Register from './components/register/Register';

function App() {

    return (
        <>

            <Header />

            <Home />

            <Register />

            <Login />

            <CreateBook />

            <EditBook />

            <DetailsBook />

            <AllBooks />

            <Footer />

        </>
    );
}

export default App;
