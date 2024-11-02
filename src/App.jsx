import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import ReviewSubmission from "./components/ReviewSubmission/ReviewSubmission";
import ReviewList from "./components/ReviewList/ReviewList";
import BadgeRewards from "./components/BadgeRewards/BadgeRewards";
import UserProfile from "./components/UserProfile/UserProfile";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navigation />
        <main className="main">
          <Routes>
            <Route path="/" element={<ReviewList />} />
            <Route path="/submit" element={<ReviewSubmission />} />
            <Route path="/badges" element={<BadgeRewards />} />
            <Route path="/profile" element={<UserProfile />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;