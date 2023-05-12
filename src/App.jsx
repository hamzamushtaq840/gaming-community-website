import { BrowserRouter, Route, Routes } from "react-router-dom"
import AboutEdit from "./components/About/AboutEdit"
import AchievedGoals from "./components/Community/AchievedGoals"
import OfferOpportunities from "./components/Community/OfferOpportunities"
import CompanyAdd from "./components/Company/CompanyAdd"
import CompanyAnalytics from "./components/Company/CompanyAnalytics"
import CompanyInformation from "./components/Company/CompanyInformation"
import CompanyManage from "./components/Company/CompanyManage"
import CompanyManageLayout from "./components/Company/CompanyManageLayout"
import CompanyPages from "./components/Company/CompanyPages"
import CompanyShare from "./components/Company/CompanyShare"
import DataRepositoryAdd from "./components/DataRepository/DataRepositoryAdd"
import DataRepositoryInfo from "./components/DataRepository/DataRepositoryInfo"
import AllEvents from "./components/Events/AllEvents"
import SingleEventDetail from "./components/Events/SingleEventDetail"
import SubmitEvent from "./components/Events/SubmitEvent"
import SingleInvestorDetail from "./components/Investor/SingleInvestorDetail"
import JobInformation from "./components/Jobs/JobInformation"
import JobsAdd from "./components/Jobs/JobsAdd"
import KnowledgeHubAdd from "./components/KnowlegdeHub/KnowledgeHubAdd"
import KnowledgeHubInfo from "./components/KnowlegdeHub/KnowledgeHubInfo"
import EditGroupItem from "./components/LabsAndGroups/EditGroupItem"
import SingleGroupDetail from "./components/LabsAndGroups/SingleGroupDetail"
import Gigs from "./components/Marketplace/Gigs"
import OtherServices from "./components/Marketplace/OtherServices"
import Projects from "./components/Marketplace/Projects"
import SingleMentorAbout from "./components/Mentor/SingleMentorAbout"
import SingleMentorAvalibility from "./components/Mentor/SingleMentorAvalibility"
import SingleMentorDetail from "./components/Mentor/SingleMentorDetail"
import ManageProfile from "./components/Profile/ManageProfile"
import ProfileAnalytics from "./components/Profile/ProfileAnalytics"
import ProfilePage from "./components/Profile/ProfilePage"
import ProfileSecurity from "./components/Profile/ProfileSecurity"
import ProfileShare from "./components/Profile/ProfileShare"
import ViewProfile from "./components/Profile/ViewProfile"
import SupportEdit from "./components/Support/SupportEdit"
import Admins from "./components/TeamProfile/Admins/Admins"
import AllTeams from "./components/TeamProfile/AllTeams/AllTeams"
import Member from "./components/TeamProfile/Member/Member"
import CommunityNav from "./layout/CommunityNav"
import Layout from "./layout/Layout"
import Aboutus from "./pages/Aboutus"
import Community from "./pages/Community"
import Company from "./pages/Company"
import Dashboard from "./pages/Dashboard"
import DataRepository from "./pages/DataRepository"
import Events from "./pages/Events"
import Investors from "./pages/Investors"
import Jobs from "./pages/Jobs"
import KnowledgeHub from "./pages/KnowledgeHub"
import LabsAndGroups from "./pages/LabsAndGroups"
import Marketplace from "./pages/Marketplace"
import Mentors from "./pages/Mentors"
import Profile from "./pages/Profile"
import SigninCommunity from "./pages/SigninCommunity"
import SigninMain from "./pages/SigninMain"
import SignupCommunity from "./pages/SignupCommunity"
import SignupMain from "./pages/SignupMain"
import Support from "./pages/Support"
import TeamProfile from "./pages/TeamProfile"
import NotificationProfile from "./components/Notification/NotificationProfile"
import Notifications from "./pages/Notifications"
import YourJobs from "./components/Notification/YourJobs"
import YourProjects from "./components/Notification/YourProjects"
import GuestDashboard from "./pages/GuestDashboard"
import Matches from "./pages/Matches"
import AllMatches from "./components/Matches/AllMatches"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Authentication Routes */}
        <Route path="/signup" element={<SignupMain />}></Route>
        <Route path="/signup-community" element={<SignupCommunity />}></Route>
        <Route path="/signin" element={<SigninMain />}></Route>
        <Route path="/signin-community" element={<SigninCommunity />}></Route>
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
          <Route path="/guest/dashboard" element={<GuestDashboard></GuestDashboard>}></Route>

          <Route path="/matches">
            <Route index element={<Matches />}></Route>
            <Route path="allMatches" element={<AllMatches />}></Route >
          </Route>

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
            <Route path="add" element={<CompanyAdd></CompanyAdd>}></Route>
            <Route path="manage" element={<CompanyManageLayout></CompanyManageLayout>}>
              <Route index element={<CompanyManage></CompanyManage>}></Route>
              <Route path="analytics" element={<CompanyAnalytics></CompanyAnalytics>}></Route>
              <Route path="pages" element={<CompanyPages></CompanyPages>}></Route>
              <Route path="share" element={<CompanyShare></CompanyShare>}></Route>
            </Route>
          </Route>

          <Route path="jobs">
            <Route index element={<Jobs></Jobs>}></Route>
            <Route path="information" element={<JobInformation></JobInformation>}></Route>
            <Route path="add" element={<JobsAdd></JobsAdd>}></Route>
          </Route>

          <Route path="knowledge-hub">
            <Route index element={<KnowledgeHub></KnowledgeHub>}></Route>
            <Route path="info" element={<KnowledgeHubInfo></KnowledgeHubInfo>}></Route>
            <Route path="add" element={<KnowledgeHubAdd></KnowledgeHubAdd>}></Route>
          </Route>

          <Route path="/marketplace" element={<Marketplace></Marketplace>}>
            <Route path="gig" element={<Gigs></Gigs>}></Route>
            <Route path="projects" element={<Projects></Projects>}></Route>
            <Route path="other-services" element={<OtherServices></OtherServices>}></Route>
          </Route>

          <Route path="data-repository">
            <Route index element={<DataRepository></DataRepository>}></Route>
            <Route path="info" element={<DataRepositoryInfo></DataRepositoryInfo>}></Route>
            <Route path="add" element={<DataRepositoryAdd></DataRepositoryAdd>}></Route>
          </Route>

          <Route path="about">
            <Route index element={<Aboutus></Aboutus>}></Route>
            <Route path="edit" element={<AboutEdit></AboutEdit>}></Route>
          </Route>

          <Route path="support">
            <Route index element={<Support></Support>}></Route>
            <Route path="edit" element={<SupportEdit></SupportEdit>}></Route>
          </Route>

          <Route path="/team-profile">
            <Route index element={<TeamProfile />}></Route>
            <Route path="allTeams" element={<AllTeams />}></Route>
            <Route path="admins" element={<Admins />}></Route>
            <Route path="member" element={<Member />}></Route>
          </Route>

          <Route path="/labs-and-groups">
            <Route index element={<LabsAndGroups />}></Route>
            <Route path="singleGroupDetail" element={<SingleGroupDetail />}></Route>
            <Route path="editGroupItem" element={<EditGroupItem />}></Route>
          </Route>

          <Route path="/events">
            <Route index element={<Events />}></Route>
            <Route path="singleEventDetail" element={<SingleEventDetail />}></Route>
            <Route path="allEvents" element={<AllEvents />}></Route>
            <Route path="submitEvent" element={<SubmitEvent />}></Route>
          </Route>

          <Route path="/mentor">
            <Route index element={<Mentors />}></Route>
            <Route element={<SingleMentorDetail />}>
              <Route path="singleMentorAvalibility" element={<SingleMentorAvalibility />}></Route>
              <Route path="singleMentorAbout" element={<SingleMentorAbout />}></Route>
            </Route>
          </Route>

          <Route path="/investor">
            <Route index element={<Investors />}></Route>
            <Route path="singleInvestorDetail" element={<SingleInvestorDetail />}></Route>
          </Route>

          <Route path="/notification" element={<Notifications></Notifications>}>
            <Route element={<NotificationProfile />}>
              <Route index element={<YourJobs />}></Route>
              <Route path="yourProjects" element={<YourProjects />}></Route>
            </Route>
          </Route>
        </Route >
      </Routes >
    </BrowserRouter >
  )
}