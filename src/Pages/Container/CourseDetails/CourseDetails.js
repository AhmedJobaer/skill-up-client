import React from 'react';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link, useLoaderData } from 'react-router-dom';




const CourseDetails = () => {
    const course = useLoaderData();
    console.log(course);
    return (
        <div>
            <div className='w-50 mx-auto my-4'>

                <Button className='' variant="success">Download Details as PDF</Button>

            </div>
            <div className='w-75  mx-auto d-flex'>
                <Image style={{ width: '180px', height: "140px", marginRight: '15px' }} src={course.img}>

                </Image>
                <div className=''>
                    <h2>{course.name}</h2>
                    <p>{course.courseDescription}</p>
                    <p>Duration: {course.duration}</p>
                    <p>Ratings: {course.ratings}</p>
                    <p>Review: {course.review}</p>
                    <p>Instructor Name: {course.instructor.instructorName}</p>
                    <p>Price: ${course.price}</p>
                </div>
            </div>
            <div className='w-50 mx-auto my-4'>

                <Button className='' variant="success"> <Link className='text-white' style={{ textDecoration: 'none' }} to={`/checkout/${course.id}`}>Get Premium Access</Link></Button>

            </div>
        </div>
    );
};

export default CourseDetails;