import React, { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';



const Register = () => {


    const { createUser, signInWithGoogle, signInWiGithub, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState();
    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    const handelRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const url = form.url.value;
        const password = form.password.value;
        console.log(name, email, url, password);
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError("");
                handelUpdateUserProfile(name, url);
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error.message);
                console.error(error)
            })

    }

    const handelGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true });
                console.log(user);
            })
            .catch(error => {
                setError(error.message);
                console.error(error)
            })
    }

    const handelGithubSignIn = () => {
        signInWiGithub()
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true });
                console.log(user);
            })
            .catch(error => {
                setError(error.message);
                console.error(error)
            })

    }

    const handelUpdateUserProfile = (name, url) => {
        const profile = {
            displayName: name,
            photoURL: url
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(() => { })
    }

    return (
        <div>
            <Form className='w-50 mx-auto' onSubmit={handelRegister}>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter Full Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo Url</Form.Label>
                    <Form.Control type="text" name="url" placeholder="Enter Photo Url" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Register
                </Button>
                <p>{error}</p>
                <p>Already have an account? please <Link to='/login'>Login</Link></p>
                <Button onClick={handelGoogleSignIn} className='' variant="primary">SignIn with Google</Button>
                <br />
                <Button onClick={handelGithubSignIn} className='mt-2' variant="primary">SignIn with Github</Button>

            </Form>

        </div>
    );
};

export default Register;