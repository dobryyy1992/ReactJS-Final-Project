import { Route, Routes } from 'react-router-dom';


import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Register from './components/register/Register';
import BooksList from './components/books-list/BooksList';
import BookCreate from './components/book-create/BookCreate';
import BookEdit from './components/book-edit/BookEdit';
import BookDetails from './components/book-details/BookDetails';

function App() {

    return (
        <>
            <Header />

            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/register' element={<Register />}/>
                <Route path='/login' element={<Login />}/>
                <Route path='/books' element={<BooksList />}/>
                <Route path='/books/create' element={<BookCreate />}/>
                <Route path='/books/edit' element={<BookEdit />}/>
                <Route path='/books/details' element={<BookDetails />}/>
            </Routes>

            <Footer />
        </>
    );
}

export default App;
