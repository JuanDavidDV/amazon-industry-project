import axios from "axios";

const baseUrl = "http://localhost:3000";

export const api = {
  getReviews: () => axios.get(`${baseUrl}/reviews`),
  getUserBadges: () => axios.get(`${baseUrl}/reviews/badges`),
  submitReview: (data) => axios.post(`${baseUrl}/reviews`, data),
  submitPeerReview: (reviewId, data) => axios.post(`${baseUrl}/reviews/${reviewId}/peer-review`, data),
  getUserProfile: () => axios.get(`${baseUrl}/reviews/user`)
};

export default api;