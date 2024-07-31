import { useState } from 'react';

export default function BookDetails() {

    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    const handleCommentSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <section id="BookDetails">
            <div className="book-details-content">
                <h1>Title</h1>
                <div className="book-info">
                    <p><strong>Author:</strong> Author</p>
                    <p><strong>Genre:</strong> Genre</p>
                </div>
                <div className="book-image-container">
                    <img src='https://www.londonlibrary.co.uk/images/20210408113322.JPG' alt='{book.title}' className="book-image" />
                </div>
                <div className="book-description">
                    <h2>Description</h2>
                    <p>Description</p>
                </div>
                <div className="button-group">
                    <button className="action-btn">Edit Book</button>
                    <button className="action-btn delete-btn">Delete Book</button>
                </div>
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
                    <form onSubmit={handleCommentSubmit} className="comment-form">
                        <div className="form-group">
                            <textarea
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
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