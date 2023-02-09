import { Nav, Navbar, Container,NavLink } from "react-bootstrap";

const NaviBar = () => {
    
    return (
      <>
      <div>
     <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="">Country Guesser</Navbar.Brand>
          <Nav className="me-auto">
          <NavLink href="game">Game</NavLink>
          <NavLink href="info">Info</NavLink>
          </Nav>
        </Container>
      </Navbar>
      </div>
      
    </>
    )
}
export default NaviBar