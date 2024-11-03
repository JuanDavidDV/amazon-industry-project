import axios from "axios";

const baseUrl = "http://localhost:3000";

export const api = {
  getReviews: () => axios.get(`${baseUrl}/reviews`),
  submitReview: (data) => axios.post(`${baseUrl}/reviews`, data),
  submitPeerReview: (reviewId, data) => axios.post(`${baseUrl}/reviews/${reviewId}/peer-review`, data),
  getUserBadges: (userId) => axios.get(`${baseUrl}/users/${userId}/badges`),
  getUserProfile: (userId) => axios.get(`${baseUrl}/users/${userId}`)
};

export default api;