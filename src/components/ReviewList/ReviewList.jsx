import "./ReviewList.scss";
import PeerReview from "../PeerReview/PeerReview";
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

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <section className="reviews">
      <div className="reviews__container">
        <h1>Products Review</h1>
        <div className="reviews__container__list">
          {reviews.map((review) => (
            <article key={review.verificationCode} className="reviews__container__list__box">
              <div>
                <h2>{review.productName}</h2>
                <img className="reviews__container__list__box--image" src={review.image} alt={review.productName} />
                <p className="reviews__container__list__box--content">{review.content}</p>
                <div className="reviews__container__list__box--status">
                  <span>Status: {review.status.toLowerCase() }</span>
                  <span className="reviews__date">
                    , {new Date(review.createdAt).toLocaleDateString()}
                  </span>
                </div>
                {review.status === 'PENDING' && <PeerReview reviewId={review.userId} />}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewList;
