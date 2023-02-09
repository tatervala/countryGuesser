import { Nav, Navbar, Container } from "react-bootstrap";

const NaviBar = () => {
    
    return (
      <>
      <div>
     <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="">Country Guesser</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link href="game">Game</Nav.Link>
          <Nav.Link href="info">Info</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>
      
    </>
    )
}
export default NaviBar