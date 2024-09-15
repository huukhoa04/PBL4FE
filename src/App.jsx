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
    </Routes>
    </BrowserRouter>
  )
}

export default App
