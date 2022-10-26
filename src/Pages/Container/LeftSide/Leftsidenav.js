import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Leftsidenav = () => {
    const [sideNav, setSideNav] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/all-lists')
            .then(res => res.json())
            .then(data => setSideNav(data))
    }, [])

    return (
        <div>
            {
                sideNav.map(sn => <p key={sn.id}><Link to={`/course-details/${sn.id}`}>{sn.name}</Link></p>)
            }
        </div>
    );
};

export default Leftsidenav;