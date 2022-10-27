import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const course = useLoaderData();
    console.log(course);
    return (
        <div className='w-50 mx-auto'>
            <h2>Checkout by {course.instructor.instructorName}</h2>
        </div>
    );
};

export default Checkout;