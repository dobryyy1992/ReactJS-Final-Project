import { json, useNavigate } from 'react-router-dom';

import * as bookService from '../../services/bookService';
import useForm from '../../hooks/useForm';


export default function BookCreate() {
    const navigate = useNavigate();

    const createBookSubmitHandler = async (values) => {
        try {
            await bookService.create(values);
            navigate('/books');
        } catch (error) {
            alert(error.message);
        }
    };

    const { values, onChange, onSubmit } = useForm({
        title: '',
        author: '',
        genre: '',
        description: '',
    }, createBookSubmitHandler);

    return (
        <section id="CreateBook">
            <div className="create-book-content">
                <h1>Add a New Book</h1>
                <p>Enter the details of the book you'd like to add to our collection</p>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={values.title}
                            onChange={onChange}
                            placeholder="Book Title"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="author"
                            id="author"
                            value={values.author}
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
                            value={values.genre}
                            onChange={onChange}
                            placeholder="Book Genre"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            id="description"
                            name="description"
                            value={values.description}
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
                            value={values.imageUrl}
                            onChange={onChange}
                            placeholder="Image Url"
                            required
                        />
                    </div>
                    <button type="submit" className="submit-btn">Add Book</button>
                </form>
            </div>
        </section>
    );
}