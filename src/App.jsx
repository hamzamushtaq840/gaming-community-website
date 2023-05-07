import { BrowserRouter, Route, Routes } from "react-router-dom"
import AchievedGoals from "./components/Community/AchievedGoals"
import OfferOpportunities from "./components/Community/OfferOpportunities"
import ManageProfile from "./components/Profile/ManageProfile"
import ViewProfile from "./components/Profile/ViewProfile"
import CommunityNav from "./layout/CommunityNav"
import Layout from "./layout/Layout"
import Community from "./pages/Community"
import Dashboard from "./pages/Dashboard"
import Profile from "./pages/Profile"
import SigninCommunity from "./pages/SigninCommunity"
import SigninMain from "./pages/SigninMain"
import SignupCommunity from "./pages/SignupCommunity"
import SignupMain from "./pages/SignupMain"
import TeamProfile from "./pages/TeamProfile"
import ProfileAnalytics from "./components/Profile/ProfileAnalytics"
import AllTeams from "./components/TeamProfile/AllTeams"
import ProfileShare from "./components/Profile/ProfileShare"
import ProfilePage from "./components/Profile/ProfilePage"
import ProfileSecurity from "./components/Profile/ProfileSecurity"
import Company from "./pages/Company"
import CompanyInformation from "./components/Company/CompanyInformation"

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
          <Route path="/profile" element={<Profile></Profile>}>
            <Route index element={<ViewProfile></ViewProfile>}></Route>
            <Route path="manage" element={<ManageProfile></ManageProfile>}></Route>
            <Route path="security" element={<ProfileSecurity></ProfileSecurity>}></Route>
            <Route path="analytics" element={<ProfileAnalytics></ProfileAnalytics>}></Route>
            <Route path="pages" element={<ProfilePage></ProfilePage>}></Route>
            <Route path="share" element={<ProfileShare></ProfileShare>}></Route>
          </Route>
          <Route path="/company" >
            <Route index element={<Company></Company>}></Route>
            <Route path=":id" element={<CompanyInformation></CompanyInformation>}></Route>
          </Route>
          <Route path="/team-profile">
            <Route index element={<TeamProfile />}></Route>
            <Route path="allTeams" element={<AllTeams />}></Route>
          </Route>
        </Route >
      </Routes >
    </BrowserRouter >
  )
}