import { useState, useEffect } from 'react';

import * as bookService from './../../services/bookService';
import BookListItem from './book-list-item/Book-List-Item';

export default function BookList() {
    useEffect(() => {
        (async () => {
            try {
                const result = await bookService.getAll();
                setBooks(Object.values(result));
            } catch (error) {
                alert(error.message);
            }
        })();
    }, []);

    const [books, setBooks] = useState([]);

    return (
        <section id="ListAllBooks">
        <div className="list-books-content">
            <h1>All Books</h1>
            <div className="book-grid">
                {books.map(book => (
                   <BookListItem key={book._id} {...book} />
                ))}
            </div>
            {books.length === 0 && (
                <div className="no-books">
                    <p>No books yet...</p>
                </div>
            )}
        </div>
    </section>
    );
}