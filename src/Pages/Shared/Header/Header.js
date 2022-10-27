import React from 'react';
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/UserContext';
import { Image } from 'react-bootstrap';
import { FaMegaport } from "react-icons/fa";
import Leftsidenav from '../../Container/LeftSide/Leftsidenav';


const Header = () => {


    const { user, logOut } = useContext(AuthContext);
    console.log(user);

    const handelSignOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => console.error(error))
    }



    return (
        <div>
            <Navbar collapseOnSelect className='mb-4' expand="lg" bg="light" variant="light">
                <Container >
                    <FaMegaport className='fs-2 mx-1'></FaMegaport>
                    <Navbar.Brand href="#home">Skill-Up</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link ><Link style={{ textDecoration: 'none' }} to='/'>Home</Link></Nav.Link>
                            <Nav.Link><Link style={{ textDecoration: 'none' }} to='/course-container'>Course</Link></Nav.Link>
                            <Nav.Link><Link style={{ textDecoration: 'none' }} to='/blog'>FAQ</Link></Nav.Link>

                        </Nav>
                        <Nav className='d-flex align-items-center'>
                            {/* <Nav.Link ><Link to='/login'>LogIn</Link></Nav.Link> */}
                            <Nav.Link >
                                <Link style={{ textDecoration: 'none' }} to='/register'>Register</Link>
                            </Nav.Link>
                            {/* <div className='d-flex align-items-center'><p className='text-success'>{user?.displayName && user.displayName}</p></div> */}
                            {/* <img src={user.photoUrl} alt="" /> */}
                            {
                                user?.photoURL ?
                                    <div>
                                        <Image data-toggle="tooltip" data-placement="top" title={user.displayName} src={user.photoURL} className="m-2" roundedCircle style={{ height: '30px' }}>

                                        </Image>
                                        <Button onClick={handelSignOut} className='' variant="primary">LogOut</Button>
                                    </div>

                                    : <Link style={{ textDecoration: 'none' }} to='/login'>Log In</Link>
                            }
                        </Nav>
                        <div className='d-lg-none'>
                            <Leftsidenav></Leftsidenav>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;