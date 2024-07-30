import { Route, Router, Routes } from 'react-router-dom';

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

            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/register' element={<Register />}/>
                <Route path='/login' element={<Login />}/>
                <Route path='/books' element={<AllBooks />}/>
                <Route path='/books/create' element={<CreateBook />}/>
                <Route path='/books/edit' element={<EditBook />}/>
                <Route path='/books/details' element={<DetailsBook />}/>
            </Routes>

            <Footer />
        </>
    );
}

export default App;
