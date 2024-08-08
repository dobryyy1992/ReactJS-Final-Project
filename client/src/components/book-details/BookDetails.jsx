import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import * as bookService from '../../services/bookService';
import AuthContext from '../../contexts/authContext';

export default function BookDetails() {
    const navigate = useNavigate();
    const { email, userId } = useContext(AuthContext);
    const [book, setBook] = useState({});
    const { bookId } = useParams();

    useEffect(() => {
        (async () => {
            try {
                const result = await bookService.getOne(bookId);
                setBook(result);
            } catch (error) {
                alert(error.message);
            }
        })();
    }, []);

    return (
        <section id="BookDetails">
            <div className="book-details-content">
                <h1>{book.title}</h1>
                <div className="book-info">
                    <p><strong>Author:</strong> {book.author}}</p>
                    <p><strong>Genre:</strong> {book.genre}}</p>
                </div>
                <div className="book-image-container">
                    <img src={book.imageUrl} alt={book.title} className="book-image" />
                </div>
                <div className="book-description">
                    <p>{book.description}</p>
                </div>

                {userId === book._ownerId && (
                    <div className="button-group">
                        <button className="action-btn">Edit Book</button>
                        <button className="action-btn delete-btn">Delete Book</button>
                    </div>
                )}

                <div className="comments-section">
                    <h2>Comments</h2>
                    <ul className="comments-list">
                        <li key='{index}' className="comment">
                            <p className="comment-text">Text</p>
                            <p className="comment-meta">
                                By Author on Date
                            </p>
                        </li>
                    </ul>
                    <p>No comments yet. Be the first to comment!</p>
                    <form onSubmit="{handleCommentSubmit}" className="comment-form">
                        <div className="form-group">
                            <textarea
                                value="{newComment}"
                                // onChange={(e) => "setNewComment(e.target.value)}"
                                placeholder="Write a comment..."
                                required
                            />
                        </div>
                        <button type="submit" className="submit-btn">Add Comment</button>
                    </form>
                </div>
            </div>
        </section>
    );
}