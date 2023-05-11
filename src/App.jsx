import { BrowserRouter, Route, Routes } from "react-router-dom"
import AchievedGoals from "./components/Community/AchievedGoals"
import OfferOpportunities from "./components/Community/OfferOpportunities"
import ManageProfile from "./components/Profile/ManageProfile"
import ProfileAnalytics from "./components/Profile/ProfileAnalytics"
import ProfilePage from "./components/Profile/ProfilePage"
import ProfileShare from "./components/Profile/ProfileShare"
import ViewProfile from "./components/Profile/ViewProfile"
import AllTeams from "./components/TeamProfile/AllTeams/AllTeams"
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
import Admins from "./components/TeamProfile/Admins/Admins"
import Member from "./components/TeamProfile/Member/Member"
import LabsAndGroups from "./pages/LabsAndGroups"
import SingleGroupDetail from "./components/LabsAndGroups/SingleGroupDetail"
import EditGroupItem from "./components/LabsAndGroups/EditGroupItem"
import Events from "./pages/Events"
import SingleEventDetail from "./components/Events/SingleEventDetail"
import AllEvents from "./components/Events/AllEvents"
import SubmitEvent from "./components/Events/SubmitEvent"
import Mentors from "./pages/Mentors"
import Investors from "./pages/Investors"
import SingleMentorDetail from "./components/Mentor/SingleMentorDetail"
import SingleMentorAvalibility from "./components/Mentor/SingleMentorAvalibility"
import SingleMentorAbout from "./components/Mentor/SingleMentorAbout"
import SingleInvestorDetail from "./components/Investor/SingleInvestorDetail"
import ProfileSecurity from "./components/Profile/ProfileSecurity"
import Company from "./pages/Company"
import CompanyInformation from "./components/Company/CompanyInformation"
import CompanyAdd from "./components/Company/CompanyAdd"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Authentication Routes */}
        <Route path="/signup" element={<SignupMain />}></Route>
        <Route path="/signup-community/:communityId" element={<SignupCommunity />}></Route>
        <Route path="/signin" element={<SigninMain />}></Route>
        <Route path="/signin-community/:communityId" element={<SigninCommunity />}></Route>
        {/* Landing Page */}
        <Route element={<CommunityNav></CommunityNav>}>
          <Route path="/" element={<Community />}>
            <Route index element={<AchievedGoals></AchievedGoals>}></Route>
            <Route path="offer-opportunities" element={<OfferOpportunities></OfferOpportunities>}></Route>
          </Route>
        </Route>
        {/* Other Routes */}
        <Route element={<Layout></Layout>}>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
          {/* Profile */}
          <Route path="/profile" element={<Profile></Profile>}>
            <Route index element={<ViewProfile></ViewProfile>}></Route>
            <Route path="manage" element={<ManageProfile></ManageProfile>}></Route>
            <Route path="security" element={<ProfileSecurity></ProfileSecurity>}></Route>
            <Route path="analytics" element={<ProfileAnalytics></ProfileAnalytics>}></Route>
            <Route path="pages" element={<ProfilePage></ProfilePage>}></Route>
            <Route path="share" element={<ProfileShare></ProfileShare>}></Route>
          </Route>
          <Route path="/team-profile">
            <Route index element={<TeamProfile />}></Route>
            <Route path="allTeams" element={<AllTeams />}></Route>
            <Route path="admins" element={<Admins />}></Route>
            <Route path="member" element={<Member />}></Route>
          </Route>
          {/* Labs And Groups */}
          <Route path="/labs-and-groups">
            <Route index element={<LabsAndGroups />}></Route>
            <Route path="singleGroupDetail" element={<SingleGroupDetail />}></Route>
            <Route path="editGroupItem" element={<EditGroupItem />}></Route>
          </Route>
          {/* Events */}
          <Route path="/events">
            <Route index element={<Events />}></Route>
            <Route path="singleEventDetail" element={<SingleEventDetail />}></Route>
            <Route path="allEvents" element={<AllEvents />}></Route>
            <Route path="submitEvent" element={<SubmitEvent />}></Route>
          </Route>
          {/* Mentors */}
          <Route path="/mentor">
            <Route index element={<Mentors />}></Route>
            <Route element={<SingleMentorDetail />}>
              <Route path="singleMentorAvalibility" element={<SingleMentorAvalibility />}></Route>
              <Route path="singleMentorAbout" element={<SingleMentorAbout />}></Route>
            </Route>
          </Route>
          {/* Investors */}
          <Route path="/investor">
            <Route index element={<Investors />}></Route>
            <Route path="singleInvestorDetail" element={<SingleInvestorDetail />}></Route>
          </Route>
        </Route >
      </Routes >
    </BrowserRouter >
  )
}