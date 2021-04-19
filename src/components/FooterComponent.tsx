import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer():JSX.Element{
    return(
        <footer className="footer">
            <Container>
                <Row className="justify-content-center">
                    <Col className="text-center">
                        <p>In construction...</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
 export default Footer;