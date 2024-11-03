import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './PeerReviewInterface.scss';

const ReviewSubmission = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    verificationCode: '',
    content: '',
    productId: '' // In real app, this would come from product context
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/reviews', {
        ...formData,
        userId: '123' // In real app, from auth context
      });
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Submission failed');
    }
  };

  return (
    <form className="peer-review-form" onSubmit={handleSubmit}>
      <div className="peer-review-form__container">
        <h1>Submit Review</h1>
        {error && <div className="review-form__error">{error}</div>}
        <div className="peer-review-form__container__wrapper">
          <input
          className="peer-review-form__container__wrapper--verification"
            type="text"
            placeholder="Verification Code"
            value={formData.verificationCode}
            onChange={(e) => setFormData({...formData, verificationCode: e.target.value})}
            required
          />
          <textarea
          className="peer-review-form__container__wrapper--review"
            placeholder="Write your review"
            value={formData.content}
            onChange={(e) => setFormData({...formData, content: e.target.value})}
            required
          />
          <button className="peer-review-form__container__wrapper__submit" type="submit">Submit Review</button>
        </div>
      </div>
    </form>
  );
};

export default ReviewSubmission; 