import React, { useState } from 'react';
import './Form.css';

function Form() {
  const [username, setUsername] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(1);
  const [reviews, setReviews] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === '' || reviewText === '' || rating === '') {
      alert('Please fill in all fields.');
      return;
    }

    const newReview = {
      username,
      reviewText,
      rating,
    };
    setReviews([...reviews, newReview]);

    setUsername('');
    setReviewText('');
    setRating(1);
  };

  return (
    <div className="App">
      <h1>Review Submission</h1>

      <form onSubmit={handleSubmit} className="review-form">
        <input
          type="text"
          placeholder="Your Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input-field"
        />
        <textarea
          placeholder="Write your review"
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          className="input-field"
        />
        <div className="rating">
          <label>RATING</label>
          <select
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            className="input-field"
          >
            {[1, 2, 3, 4, 5].map((rate) => (
              <option key={rate} value={rate}>
                {rate}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="submit-btn">Submit Review</button>
      </form>

      <div className="reviews-list">
        <h2>Reviews:</h2>
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <h3>{review.username}</h3>
            <p>{review.reviewText}</p>
            <p>
              Rating: <span className="stars">{'⭐'.repeat(review.rating)}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Form;
