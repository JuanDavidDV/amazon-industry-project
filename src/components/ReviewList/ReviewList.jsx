import { useState, useEffect } from 'react';
import api from '../../utils/api';
import PeerReview from '../PeerReview/PeerReview';
import './ReviewList.scss';

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await api.getReviews();
        setReviews(response.data);
      } catch (err) {
        setError('Failed to load reviews');
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, []);

  if (loading) return <div className="reviews__loading">Loading reviews...</div>;
  if (error) return <div className="reviews__error">{error}</div>;

  return (
    <section className="reviews">
      <h1>Product Reviews</h1>
      <div className="reviews__list">
        {reviews.map(review => (
          <article key={review.id} className={`review review--${review.status.toLowerCase()}`}>
            <p className="review__content">{review.content}</p>
            <div className="review__meta">
              <span className="review__status">Status: {review.status}</span>
              <span className="review__date">
                {new Date(review.createdAt).toLocaleDateString()}
              </span>
            </div>
            {review.status === 'PENDING' && <PeerReview reviewId={review.id} />}
          </article>
        ))}
      </div>
    </section>
  );
};

export default ReviewList; 