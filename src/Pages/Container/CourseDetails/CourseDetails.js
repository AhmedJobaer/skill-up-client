import React from 'react';

import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const course = useLoaderData();
    console.log(course);
    return (
        <div>
            <h2>{course.name}</h2>
            <p>{course.courseDescription}</p>
        </div>
    );
};

export default CourseDetails;