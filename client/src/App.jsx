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
import AuthGuard from './components/guards/AuthGuard';

function App() {

    return (

        <AuthProvider>

            <Header />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/books' element={<BookList />} />
                <Route path='/books/:bookId' element={<BookDetails />} />

                <Route element={<AuthGuard />}>
                    <Route path='/books/create' element={<BookCreate />} />
                    <Route path='/books/edit' element={<BookEdit />} />
                    <Route path='/logout' element={<Logout />} />
                </Route>
            </Routes>

            <Footer />

        </AuthProvider>

    );
}

export default App;
