import { BrowserRouter, Routes, Route } from "react-router-dom"
import Community from "./pages/Community"
import CommunityNav from "./layout/CommunityNav"
import AchievedGoals from "./components/Community/AchievedGoals"
import OfferOpportunities from "./components/Community/OfferOpportunities"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Authentication Routes */}
        <Route path="/signup" element={<SignupMain />}></Route>
        <Route path="/signup-community/:communityId" element={<SignupCommunity />}></Route>
        <Route path="/signin" element={<SigninMain />}></Route>
        <Route path="/signin-community/:communityId" element={<SigninCommunity />}></Route>
        {/* Main Page */}
        <Route element={<CommunityNav></CommunityNav>}>
          <Route path="/" element={<Community />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}