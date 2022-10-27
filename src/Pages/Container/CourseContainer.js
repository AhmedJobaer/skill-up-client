import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CardContainer from './Card/CardContsiner';

import Leftsidenav from './LeftSide/Leftsidenav';

const CourseContainer = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg='2' className='sm:d-sm-none'>
                        <Leftsidenav></Leftsidenav>
                    </Col>
                    <Col lg='10' className=''>
                        <CardContainer></CardContainer>
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