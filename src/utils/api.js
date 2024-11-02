import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api';

export const api = {
  submitReview: (data) => axios.post(`${BASE_URL}/reviews`, data),
  submitPeerReview: (reviewId, data) => axios.post(`${BASE_URL}/reviews/${reviewId}/peer-review`, data),
  getReviews: () => axios.get(`${BASE_URL}/reviews`),
  getUserBadges: (userId) => axios.get(`${BASE_URL}/users/${userId}/badges`),
  getUserProfile: (userId) => axios.get(`${BASE_URL}/users/${userId}`),
};

export default api; 