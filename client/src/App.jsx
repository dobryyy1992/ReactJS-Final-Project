import { Route, Routes } from 'react-router-dom';

import { AuthProvider } from './contexts/authContext';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Logout from './components/logout/Logout';
import BookList from './components/book-list/BookList';
import BookCreate from './components/book-create/BookCreate';
import BookEdit from './components/book-edit/BookEdit';
import BookDetails from './components/book-details/BookDetails';

function App() {

    return (

        <AuthProvider>

            <Header />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/logout' element={<Logout />} />
                <Route path='/books' element={<BookList />} />
                <Route path='/books/create' element={<BookCreate />} />
                <Route path='/books/edit' element={<BookEdit />} />
                <Route path='/books/details' element={<BookDetails />} />
            </Routes>

            <Footer />

        </AuthProvider>

    );
}

export default App;
