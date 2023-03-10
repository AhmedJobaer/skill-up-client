import React, { useContext } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';


const Login = () => {

    const { signIn, signInWithGoogle, signInWiGithub } = useContext(AuthContext);
    const [error, setError] = useState();
    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handelLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError("");
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

    return (
        <div>
            <Form className='w-50 mx-auto' onSubmit={handelLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <p>Don't have an account? <Link to='/register'>Register</Link></p>
                <p>{error}</p>
                <Button onClick={handelGoogleSignIn} className='' variant="primary">SignIn with Google</Button>
                <br />
                <Button onClick={handelGithubSignIn} className='mt-2' variant="primary">SignIn with GitHub</Button>
            </Form>

        </div>
    );
};

export default Login;