import "./ReviewList.scss";
import { useState, useEffect } from "react";
import api from "../../utils/api";

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);

  const fetchReviews = async () => {
    try {
      const response = await api.getReviews();
      setReviews(response.data);
      console.log(response.data)
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
      <div className="review__container">
        <h1>Products Review</h1>
        <div className="review__container__list">
          {reviews.map(review => {
            <article key={review.id} className={`review review--${review.status.toLowerCase()}`}>
            <p className="review__content">{review.content}</p>
            <div className="review__meta">
              <span className="review__status">Status: {review.status}</span>
              <span className="review__date">
                {new Date(review.createdAt).toLocaleDateString()}
              </span>
            </div>
            
          </article>
          })}
        </div>
      </div>
    </section>
  )


};

export default ReviewList;
