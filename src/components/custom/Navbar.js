import {Navbar, Nav, Image} from 'react-bootstrap';

export default function CustomNavbar () {
    return (
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
            <Navbar.Brand style={{marginBottom: -12, marginTop: -12}}>
                <Image width="40" src={"https://res.cloudinary.com/dbgv4iow6/image/upload/v1612912597/Buffetts-Summit/Logo-02_bpucce.png"}/>
                <Image width="200" src={"https://res.cloudinary.com/dbgv4iow6/image/upload/v1612912593/Buffetts-Summit/Logo-09_ivdlit.png"}/>
            </Navbar.Brand>
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