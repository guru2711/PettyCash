
import {NavLink} from 'react-router-dom';
import { Navbar,Container,Nav } from 'react-bootstrap';
import { FiSettings } from 'react-icons/fi'
import { BiLogOut } from 'react-icons/bi'

function Home() {
    
    
    return (
        <div>
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">PettyCash</Navbar.Brand>
    <Nav className="justify-content-end">
      <Nav.Link href="#home"><NavLink to="/login" style={{ textDecoration: 'none',color:"whitesmoke" }}>Home</NavLink></Nav.Link>
      {/* <Nav.Link href="#features"><FiSettings/> Settings</Nav.Link> */}
      <Nav.Link href="#pricing">  <NavLink to="/" style={{ textDecoration: 'none' ,color:"whitesmoke"}}>
         <BiLogOut/>   Logout
            </NavLink></Nav.Link>
    </Nav>
    </Container>
  </Navbar>
         <h1>home</h1>
         
          
        </div>
    )
}

export default Home