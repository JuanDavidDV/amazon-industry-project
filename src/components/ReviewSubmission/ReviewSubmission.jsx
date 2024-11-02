import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ReviewSubmission.scss';

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
    <form className="review-form" onSubmit={handleSubmit}>
      <h2>Submit Review</h2>
      {error && <div className="review-form__error">{error}</div>}
      <input
        type="text"
        placeholder="Verification Code"
        value={formData.verificationCode}
        onChange={(e) => setFormData({...formData, verificationCode: e.target.value})}
        required
      />
      <textarea
        placeholder="Write your review"
        value={formData.content}
        onChange={(e) => setFormData({...formData, content: e.target.value})}
        required
      />
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewSubmission; 