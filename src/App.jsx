import { BrowserRouter, Routes, Route } from "react-router-dom"
import Community from "./pages/Community"
import CommunityNav from "./layout/CommunityNav"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<CommunityNav></CommunityNav>}>
          <Route path="/" element={<Community />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}