import { useState } from 'react';

export default function DetailsBook() {

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
                    <p><strong>Published:</strong> PublishDate</p>
                </div>
                <div className="book-description">
                    <h2>Description</h2>
                    <p>Description</p>
                </div>
                <button className="action-btn">Edit Book</button>

                <div className="comments-section">
                    <h2>Comments</h2>
                    <ul className="comments-list">
                        <li key='' className="comment">
                            <p className="comment-text">Text</p>
                            <p className="comment-meta">
                                By Author on Date
                            </p>
                        </li>
                    </ul>

                    <p>No comments yet. Be the first to comment!</p>

                    <form onSubmit={handleCommentSubmit} className="comment-form">
                        <textarea
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            placeholder="Write a comment..."
                            required
                        />
                        <button type="submit" className="action-btn">Add Comment</button>
                    </form>
                </div>
            </div>
        </section>
    );
}