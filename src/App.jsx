import { BrowserRouter, Routes, Route } from "react-router-dom"
import Community from "./pages/Community"
import CommunityNav from "./layout/CommunityNav"
import AchievedGoals from "./components/Community/AchievedGoals"
import OfferOpportunities from "./components/Community/OfferOpportunities"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<CommunityNav></CommunityNav>}>
          <Route path="/" element={<Community />}>
            <Route index element={<AchievedGoals></AchievedGoals>}></Route>
            <Route path="offer-opportunities" element={<OfferOpportunities></OfferOpportunities>}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}