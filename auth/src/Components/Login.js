import React , {useRef, useState} from "react";
import {Alert, Button , Card , Form} from "react-bootstrap";
import {Link , useHistory} from "react-router-dom";
import { useAuth } from "../Context/authContext";

function SignUp(){
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error , setError] = useState('');
    const [loading , setLoading] = useState(false);
    const history = useHistory();

    async function handleSubmit(e){
        e.preventDefault();
        try{
            setError("");
            setLoading(true);
            await login(emailRef.current.value , passwordRef.current.value);
            history.push("/")
        }
        catch{
            setError("Failed to Sign In...");
        }
        setLoading(false);
    }
    return(
        <>
            <Card>
                <Card.Body>
                    <h1 className="text-center mb-4">Log In</h1>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required/>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required/>
                        </Form.Group><br/>
                        <Button className="w-100" type="submit" disabled={loading}>Log In</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Need An Account? <Link to="signup">Sign Up</Link>
            </div>
        </>
    )
}

export default SignUp;