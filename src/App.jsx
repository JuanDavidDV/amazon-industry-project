import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import ReviewList from "./components/ReviewList/ReviewList";
import BadgeRewards from "./components/BadgeRewards/BadgeRewards";
import PeerReviewInterface from "./components/PeerReviewInterface/PeerReviewInterface";
import UserProfile from "./components/UserProfile/UserProfile";

function App () {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ReviewList />} />
        <Route path="/badge-rewards" element={<BadgeRewards />} />
        <Route path="/peer-review-interface" element={<PeerReviewInterface /> } />
        <Route path="/profile" element={<UserProfile  />} />
      </Routes>     
    
    </BrowserRouter>
  )
};

export default App;