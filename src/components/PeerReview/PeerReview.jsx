import { useState } from 'react';
import api from '../../utils/api';
import './PeerReview.scss';

const PeerReview = ({ reviewId }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handlePeerReview = (approved) => {
    const decision = approved;

    if (decision === true) {
      
    }
  };

  return (
    <div className="peer-review">
      <h2>Peer Review</h2>
      {error && <p className="peer-review__error">{error}</p>}
      <div className="peer-review__actions">
        <button 
          onClick={() => handlePeerReview(true)}
          disabled={isSubmitting}
          className="peer-review__button peer-review__button--approve"
        >
          Approve
        </button>
        <button 
          onClick={() => handlePeerReview(false)}
          disabled={isSubmitting}
          className="peer-review__button peer-review__button--reject"
        >
          Reject
        </button>
      </div>
    </div>
  );
};

export default PeerReview; 