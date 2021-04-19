import React, { useState } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "@reach/router";
import { Modal } from "./modal/Modal";

const Header = ():JSX.Element => {
    const useModal = () => {
        const [isShown, setIsShown] = useState<boolean>(false);
        const toggle = () => setIsShown(!isShown);
        return {
          isShown,
          toggle,
        };
    };

    const { isShown, toggle } = useModal();

    return(
        <Navbar bg="black" variant="dark" expand="md" className="fixed-top">
            <Container>
                {/* useRef */}
                <Navbar.Toggle type="button" aria-controls="basic-navbar-nav"/>
                <h1 className="navbar-brand mr-auto">Music Discoverer</h1>
                <Navbar.Collapse data-testid="Navbar"  id="Navbar">
                    <Nav className="ml-auto">
                        <Nav.Item>
                            <Link className="header-link" to="/home">Home</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link className="header-link" to="/discover">Discover</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link className="header-link" to="/about">About</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Button onClick={toggle}>Login</Button>
                            <Modal isShown={isShown} hide={toggle}/>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
 export default Header;