import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import UserHomePage from "./components/UserHomePage/UserHomePage";
import BadgeRewards from "./components/BadgeRewards/BadgeRewards";
import PeerReviewInterface from "./components/PeerReviewInterface/PeerReviewInterface";
import ReviewStatus from "./components/ReviewStatus/ReviewStatus";

function App () {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<UserHomePage />} />
        <Route path="/badge-rewards" element={<BadgeRewards />} />
        <Route path="/peer-review-interface" element={<PeerReviewInterface /> } />
        <Route path="/review-status" element={<ReviewStatus /> } />
      </Routes>     
    
    </BrowserRouter>
  )
};

export default App;