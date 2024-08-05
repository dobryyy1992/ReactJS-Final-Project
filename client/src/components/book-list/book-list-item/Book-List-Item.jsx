export default function BookListItem({
    _id,
    title,
    author,
    imageUrl
}) {    
    return (
        <div className="book-card">
            <img src={imageUrl} alt={title} className="book-picture" />
            <div className="book-info">
                <h2>{title}</h2>
                <p><strong>Author:</strong> {author}</p>
            </div>
            <button className="action-btn">View Details</button>
        </div>
    );
}