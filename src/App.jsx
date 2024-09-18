import Browsing from './pages/Browsing';
import Following from './pages/Following';
import Home from './pages/Home'
import StreamManager from './pages/streamManager'
import UserNamePage from './pages/UserNamePage'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="streamManager" element={<StreamManager />} />
      <Route path="userName" element={<UserNamePage />}/>
      <Route path="following" element={<Following />}/>
      <Route path="browsing" element={<Browsing />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
