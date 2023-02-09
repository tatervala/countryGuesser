import Game from "./components/Game"
import NaviBar from "./components/NavBar"
import Info from "./components/Info";
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';

const App = () => {

  return (
    <>
    <BrowserRouter>
    <NaviBar />
    <Routes>
    <Route path="/" element={<Navigate to="/game" />} />
      <Route path="/game" element={<Game/>} />
      <Route path="/info" element={<Info/>} />
    </Routes>
    </BrowserRouter>
    </>
    
  )
}
export default App
