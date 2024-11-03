import "./ReviewList.scss";

import { useState, useEffect } from "react";
import api from "../../utils/api";

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);

  const fetchReviews = async () => {
    try {
      const { data } = await api.getReviews();
      setReviews(data);
      console.log(data);
    }
    catch (error) {
      console.error(error);
    }
  };

  useEffect (() => {
    fetchReviews()
  }, []);

  return (
    <section className="reviews">
      <div className="reviews__container">
        <h1>Products Review</h1>
        <div className="reviews__container__list">
          {reviews.map((review) => (
            <article key={review.id} className="reviews__container__list__box">
              <p className="reviews__content">{review.content}</p>
              <div className="reviews__meta">
                <span className="reviews__status">Status: {review.status}</span>
                <span className="reviews__date">
                  {new Date(review.createdAt).toLocaleDateString()}
                </span>
              </div>
              {review.status === 'PENDING' && <PeerReview reviewId={review.id} />}
            </article>
          ))}
        </div>
      </div>
    </section>
  )


};

export default ReviewList;
