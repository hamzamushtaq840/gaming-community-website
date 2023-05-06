import { BrowserRouter, Routes, Route } from "react-router-dom"
import Community from "./pages/Community"
import CommunityNav from "./layout/CommunityNav"
import AchievedGoals from "./components/Community/AchievedGoals"
import OfferOpportunities from "./components/Community/OfferOpportunities"
import SigninCommunity from "./pages/SigninCommunity"
import SigninMain from "./pages/SigninMain"
import SignupCommunity from "./pages/SignupCommunity"
import SignupMain from "./pages/SignupMain"
import Dashboard from "./pages/Dashboard"
import Profile from "./pages/Profile"
import Layout from "./layout/Layout"
import TeamProfile from "./pages/TeamProfile"
import ManageProfile from "./components/Profile/ManageProfile"
import ViewProfile from "./components/Profile/ViewProfile"
import TeamProfileHeader from "./layout/TeamProfileHeader"
import ProfileAnalytics from "./components/Profile/ProfileAnalytics"
import ProfileShare from "./components/Profile/ProfileShare"
import ProfilePage from "./components/Profile/ProfilePage"

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
          <Route path="/" element={<Community />}>
            <Route index element={<AchievedGoals></AchievedGoals>}></Route>
            <Route path="offer-opportunities" element={<OfferOpportunities></OfferOpportunities>}></Route>
          </Route>
        </Route>
        {/* Other Routes */}
        <Route element={<Layout></Layout>}>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
          <Route element={<TeamProfileHeader></TeamProfileHeader>}>
            <Route path="/team-profile" element={<TeamProfile />}></Route>
          </Route>
          <Route path="/profile" element={<Profile></Profile>}>
            <Route index element={<ViewProfile></ViewProfile>}></Route>
            <Route path="manage" element={<ManageProfile></ManageProfile>}></Route>
            <Route path="analytics" element={<ProfileAnalytics></ProfileAnalytics>}></Route>
            <Route path="pages" element={<ProfilePage></ProfilePage>}></Route>
            <Route path="share" element={<ProfileShare></ProfileShare>}></Route>
          </Route>
          <Route element={<TeamProfileHeader></TeamProfileHeader>}>
            <Route path="/team-profile" element={<TeamProfile />}></Route>
          </Route>
        </Route >
      </Routes >
    </BrowserRouter >
  )
}