import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Card from './Card/Card';
import Leftsidenav from './LeftSide/Leftsidenav';

const CourseContainer = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Leftsidenav></Leftsidenav>
                    </Col>
                    <Col>
                        <Card></Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CourseContainer; <Container>
    <Row>
        <Col>
        </Col>
    </Row></Container>