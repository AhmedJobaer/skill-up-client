import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

const CardContainer = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/all-lists')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <h2>This is Card {courses.length}</h2>
            <div className='d-flex card-group '>
                {
                    courses.map(course =>
                        <div className='m-2' key={course.id}>
                            <Card className='' style={{ width: '15rem' }}>
                                <Card.Img className='mx-auto' style={{ width: '180px', height: "140px" }} variant="top" src={course.img} />
                                <Card.Body>
                                    <Card.Title>{course.name}</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="success"><Link className='text-white' style={{ textDecoration: 'none' }} to={`/course-details/${course.id}`}> See Details</Link></Button>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default CardContainer;