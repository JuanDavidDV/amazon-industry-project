import { useState, useEffect } from "react";
import './PeerReviewInterface.scss';

const PeerReviewInterface = ({ reviewId, productId }) => {
  
  const [feedback, setFeedback] = useState({
    isAccurate: null,
    comment: " "
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await PeerReviewService.verifyReview(reviewId, userId, {
        ...feedback,
        productId, 
        purchaseProof: await getPurchaseProof(productId)
      });

    }
    catch(error) {
      console.error(error);
    }
    finally {
      setIsSubmitting(false);
    }
  };

  return (
      <form onSubmit={handleSubmit} className="peer-review-form">
        <div className="peer-review-form__container">
          <h1>Verify This Review</h1>
          <div className="peer-review-form__container__accuracy-buttons">
            <button onClick={ () => setFeedback({ ...feedback, isAccurate: true })}
              className={`peer-review-form__container__accuracy-buttons--${feedback.isAccurate === true ? 'selected' : "default"}`}>
                Accurate
            </button>
            <button onClick={ () => setFeedback({ ...feedback, isAccurate: false })}
              className={`peer-review-form__container__accuracy-buttons--${feedback.isAccurate === false ? 'selected' : "default"}`}>
                Inaccurate
            </button>
          </div>
          <div className="peer-review-form__container__feedback">
            <label className="peer-review-form__container__feedback--label" htmlFor="inputUserFeedback">
              Feedback
            </label>
            <textarea className="peer-review-form__container__feedback--textarea" value={feedback.comment} name="inputUserFeedback" placeholder="Please add your feedback" type="text" id="inputUserFeedback" 
              onChange={ (e) => setFeedback({ ...feedback, comment: e.target.value })} />
          </div>
          <button className="peer-review-form__container__submit" disabled={isSubmitting || feedback.isAccurate === null}>
            Submit Verification
          </button>
        </div>
      </form>
  )
}

export default PeerReviewInterface;