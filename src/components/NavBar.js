import { Nav, NavBar, NavLink } from "react-bootstrap";
import Game from "./Game"
import Info from "./Info"
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'
const NaviBar = () => {
    const padding = {
        padding: 5
    }
    return (
        <Router>
      <div>
        <Link style={padding} to={"/"}>Game</Link>
        <Link style={padding} to={"/info"}>Info</Link>
      </div>
      <Routes>
      <Route path="/info" element={<Info />} />
      <Route path="/" element={<Game />} />
      </Routes>
    </Router>
    )
}
export default NaviBar