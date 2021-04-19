import React, { ReactNode } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
interface Props{
    path:string;
    children?:ReactNode;
}
const About = (props:Props):JSX.Element => {
    return(
        <Container>
            {props.children}
            <Row className="row-content">
                <Col>
                    <h1 className="about-text">About</h1> 
                    <p className="about-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, ut ratione aliquam harum laudantium voluptatibus maxime exercitationem quaerat illo numquam, 
                        alias excepturi debitis, ipsum enim unde neque temporibus minima corporis.</p>
                </Col>
            </Row>
        </Container>
    )
}

export default About;