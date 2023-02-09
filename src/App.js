import Game from "./components/Game"
import NaviBar from "./components/NavBar"
import Info from "./components/Info";
import { Routes, Route, Navigate, BrowserRouter, HashRouter } from 'react-router-dom';

const App = () => {

  return (
    <>
    <HashRouter>
    <NaviBar />
    <Routes>
    <Route path="/" element={<Navigate to="/game" />} />
      <Route path="/game" element={<Game/>} />
      <Route path="/info" element={<Info/>} />
    </Routes>
    </HashRouter>
    </>
    
  )
}
export default App
