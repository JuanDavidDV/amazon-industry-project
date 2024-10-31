import { BrowserRouter, Routes, Route } from "react-router-dom";
import BadgeRewards from "./components/BadgeRewards/BadgeRewards";

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BadgeRewards />} />
      </Routes>     
    
    </BrowserRouter>
  )
};

export default App;