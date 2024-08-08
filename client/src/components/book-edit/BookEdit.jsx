import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import * as bookService from '../../services/bookService';
import useForm from '../../hooks/useForm';

export default function BookEdit() {
    const navigate = useNavigate();
    const { bookId } = useParams();
    const [book, setBook] = useState({
        title: '',
        author: '',
        genre: '',
        description: '',
    });

    useEffect(() => {
        bookService.getOne(bookId)
            .then(result => {
                setBook(result);
            });
    }, [bookId]);

    const editBookSubmitHandler = async (values) => {
        try {
            await bookService.edit(bookId, values)
            navigate(`/books/${bookId}`);
        } catch (error) {
            alert(error.message);
        }
    };

    const { values, onChange, onSubmit } = useForm({
        title: '',
        author: '',
        genre: '',
        description: '',
    }, editBookSubmitHandler);

    return (
        <section id="EditBook">
            <div className="edit-book-content">
                <h1>Edit Book</h1>
                <p>Update the details of the book</p>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={book.title}
                            onChange={onChange}
                            placeholder="Book Title"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            id="author"
                            name="author"
                            value={book.author}
                            onChange={onChange}
                            placeholder="Author Name"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            id="genre"
                            name="genre"
                            value={book.genre}
                            onChange={onChange}
                            placeholder="Book Genre"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            name="description"
                            id="description"
                            value={book.description}
                            onChange={onChange}
                            placeholder="Book Description"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            id="imageUrl"
                            name="imageUrl"
                            value={book.imageUrl}
                            onChange={onChange}
                            placeholder="Image Url"
                            required
                        />
                    </div>
                    <button type="submit" className="submit-btn">Update Book</button>
                </form>
            </div>
        </section>
    );
}