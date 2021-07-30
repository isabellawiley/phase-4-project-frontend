import { Nav, Navbar } from "react-bootstrap";

function NavBar({logout}){

    return(
        <div>
            <Navbar variant="dark">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav as="h3" className="mr-auto">
                        <Nav.Link href='/'>Home</Nav.Link>
                        <Navbar.Text><strong>|</strong></Navbar.Text>
                        <Nav.Link href='/leaderboard'>Leaderboard</Nav.Link>
                        <Navbar.Text><strong>|</strong></Navbar.Text>
                        <Nav.Link href='/profile'>My Nerd Profile</Nav.Link>
                        <Navbar.Text><strong>|</strong></Navbar.Text>
                        <Nav.Link onClick={logout}>Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar;