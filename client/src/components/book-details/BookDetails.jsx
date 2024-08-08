import { useContext, useEffect, useReducer, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import * as bookService from '../../services/bookService';
import * as commentService from '../../services/commentService';
import AuthContext from '../../contexts/authContext';
import reducer from './commentReducer';

export default function BookDetails() {
    const navigate = useNavigate();
    const { email, userId } = useContext(AuthContext);
    const [book, setBook] = useState({});
    const [comments, dispatch] = useReducer(reducer, []);
    const { bookId } = useParams();

    useEffect(() => {
        (async () => {
            try {
                const bookResult = await bookService.getOne(bookId);
                setBook(bookResult);
                const commentsResult = await commentService.getAll(bookId);
                dispatch({
                    type: 'GET_ALL_COMMENTS',
                    payload: commentsResult
                });

            } catch (error) {
                alert(error.message);
            }
        })();
    }, [bookId]);

    return (
        <section id="BookDetails">
            <div className="book-details-content">
                <h1>{book.title}</h1>
                <div className="book-info">
                    <p><strong>Author:</strong> {book.author}</p>
                    <p><strong>Genre:</strong> {book.genre}</p>
                </div>
                <div className="book-image-container">
                    <img src={book.imageUrl} alt={book.title} className="book-image" />
                </div>
                <div className="book-description">
                    <p>{book.description}</p>
                </div>

                {userId === book._ownerId && (
                    <div className="button-group">
                        <Link to={`/books/${bookId}/edit`} className="action-btn">Edit Book</Link>
                        <button className="action-btn delete-btn">Delete Book</button>
                    </div>
                )}

                <div className="comments-section">
                    <h2>Comments</h2>
                    <ul className="comments-list">
                        {comments.map(({ _id, content, owner: { email } }) => (
                            <li key={_id} className="comment">
                                <p className="comment-meta">
                                    {email}: {content}
                                </p>
                            </li>
                        ))}
                    </ul>

                    {comments.length === 0 && (
                         <p>No comments yet. Be the first to comment!</p>
                    )}
                   
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