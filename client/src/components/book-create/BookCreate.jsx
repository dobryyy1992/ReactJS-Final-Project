import { useState } from 'react';


export default function BookCreate() {
    const [bookData, setBookData] = useState({
        title: '',
        author: '',
        description: '',
        publishDate: '',
        genre: ''
    });

    const handleChange = (e) => {
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <section id="CreateBook">
            <div className="create-book-content">
                <h1>Add a New Book</h1>
                <p>Enter the details of the book you'd like to add to our collection</p>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            name="title"
                            value={bookData.title}
                            onChange={handleChange}
                            placeholder="Book Title"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="author"
                            value={bookData.author}
                            onChange={handleChange}
                            placeholder="Author Name"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            name="description"
                            value={bookData.description}
                            onChange={handleChange}
                            placeholder="Book Description"
                            required
                        />
                    </div>
                    {/* <div className="form-group">
                        <input
                            type="date"
                            name="publishDate"
                            value={bookData.publishDate}
                            onChange={handleChange}
                            required
                        />
                    </div> */}
                    <div className="form-group">
                        <input
                            type="text"
                            name="genre"
                            value={bookData.genre}
                            onChange={handleChange}
                            placeholder="Book Genre"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="imageUrl"
                            value={bookData.imageUrl}
                            onChange={handleChange}
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