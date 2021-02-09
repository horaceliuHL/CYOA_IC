import {Navbar, Nav} from 'react-bootstrap';

export default function CustomNavbar () {
    return (
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
            <Navbar.Brand >Stony Brook Investment Club</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Nav>
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="/practice">Practice</Nav.Link>
                </Nav>
            </Navbar.Collapse>  
        </Navbar>
    )
}