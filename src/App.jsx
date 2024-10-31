import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import BadgeRewards from "./components/BadgeRewards/BadgeRewards";

function App () {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<BadgeRewards />} />
      </Routes>     
    
    </BrowserRouter>
  )
};

export default App;