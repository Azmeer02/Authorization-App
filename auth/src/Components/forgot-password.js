import React , {useRef, useState} from "react";
import {Alert, Button , Card , Form} from "react-bootstrap";
import {Link} from "react-router-dom";
import { useAuth } from "../Context/authContext";

function ForgotPass(){
    const emailRef = useRef();
    const { forgotPass } = useAuth();
    const [error , setError] = useState('');
    const [message , setMessage] = useState('');
    const [loading , setLoading] = useState(false);

    async function handleSubmit(e){
        e.preventDefault();
        try{
            setMessage("");
            setError("");
            setLoading(true);
            await forgotPass(emailRef.current.value);
            setMessage("Check your email..")
        }
        catch{
            setError("Failed to Reset Password...");
        }
        setLoading(false);
    }
    return(
        <>
            <Card>
                <Card.Body>
                    <h1 className="text-center mb-4">Log In</h1>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {message && <Alert variant="success">{message}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required/>
                        </Form.Group><br/>
                        <Button className="w-100" type="submit" disabled={loading}>Reset Password</Button>
                    </Form>
                    <div className="w-100 text-center mt-3">
                        <Link to="/login">Login</Link>
                    </div>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Need An Account? <Link to="signup">Sign Up</Link>
            </div>
        </>
    )
}

export default ForgotPass;