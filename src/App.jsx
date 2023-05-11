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
import CompanyAdd from "./components/Company/CompanyAdd"
import CompanyManageLayout from "./components/Company/CompanyManageLayout"
import CompanyManage from "./components/Company/CompanyManage"
import CompanyAnalytics from "./components/Company/CompanyAnalytics"
import CompanyShare from "./components/Company/CompanyShare"
import CompanyPages from "./components/Company/CompanyPages"
import Jobs from "./pages/Jobs"
import JobInformation from "./components/Jobs/JobInformation"
import JobsAdd from "./components/Jobs/JobsAdd"
import KnowledgeHub from "./pages/KnowledgeHub"
import KnowledgeHubInfo from "./components/KnowlegdeHub/KnowledgeHubInfo"
import KnowledgeHubAdd from "./components/KnowlegdeHub/KnowledgeHubAdd"
import DataRepository from "./pages/DataRepository"
import DataRepositoryInfo from "./components/DataRepository/DataRepositoryInfo"
import DataRepositoryAdd from "./components/DataRepository/DataRepositoryAdd"
import Aboutus from "./pages/Aboutus"
import AboutEdit from "./components/About/AboutEdit"
import Support from "./pages/Support"
import SupportEdit from "./components/Support/SupportEdit"
import Marketplace from "./pages/Marketplace"
import Gigs from "./components/Marketplace/Gigs"
import Projects from "./components/Marketplace/Projects"
import OtherServices from "./components/Marketplace/OtherServices"

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
          </Route>
        </Route >
      </Routes >
    </BrowserRouter >
  )
}