import Game from "./components/Game"
import NaviBar from "./components/NavBar"
import Info from "./components/Info";
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';

const App = () => {

  return (
    <>
    <BrowserRouter>
    <NaviBar />
    <Routes>
      <Route path="/game" element={<Game/>} />
      <Route path="/info" element={<Info/>} />
    </Routes>
    </BrowserRouter>
    </>
    
  )
}
export default App
