import React from 'react';
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/UserContext';


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
            <Navbar collapseOnSelect className='mb-4' expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Skill-Up</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link ><Link to='/home'>Home</Link></Nav.Link>
                            <Nav.Link href="#pricing">Course</Nav.Link>
                            <Nav.Link href="#pricing">Blog</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link ><Link to='/login'>LogIn</Link></Nav.Link>
                            <Nav.Link >
                                <Link to='/register'>Register</Link>
                            </Nav.Link>
                            <p className='text-success'>{user?.displayName && user.displayName}</p>
                            {
                                user?.email ?
                                    <Button onClick={handelSignOut} className='w-25' variant="primary">SignOut</Button>
                                    : <Link to='/login'>Log In</Link>
                            }
                        </Nav>
                        <div className='d-lg-none'>

                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;