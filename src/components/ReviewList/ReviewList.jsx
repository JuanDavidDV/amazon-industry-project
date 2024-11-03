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
      <div className="review__container">
        <h1>Products Review</h1>
        <div className="review__container__list">
          <p>{reviews.status}</p>
          {reviews.map((review) => (
            <article key={review.id} className={`review review--${review.status.toLowerCase()}`}>
            <p className="review__content">{review.content}</p>
            <div className="review__meta">
              <span className="review__status">Status: {review.status}</span>

            </div>
            
          </article>
          ))}
        </div>
      </div>
    </section>
  )


};

export default ReviewList;
