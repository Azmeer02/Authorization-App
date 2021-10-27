import React , {useRef, useState} from "react";
import {Alert, Button , Card , Form} from "react-bootstrap";
import {Link , useHistory} from "react-router-dom";
import { useAuth } from "../Context/authContext";

function UpdateProfile(){
    const emailRef = useRef();
    const passwordRef = useRef();
    const passConfRef = useRef();
    const { currentUser , updateEmail , updatePassword } = useAuth();
    const [error , setError] = useState('');
    const [loading , setLoading] = useState(false);
    const history = useHistory();

    function handleSubmit(e){
        e.preventDefault();
        if(passwordRef.current.value !== passConfRef.current.value){
            return setError("Passwords do not match!");
        }
        const promises = []
            setLoading(true);
            setError("");
            if(emailRef.current.value !== currentUser.email){
                promises.push(updateEmail(emailRef.current.value));
            }
            if(passwordRef.current.value){
                promises.push(updatePassword(passwordRef.current.value));
            }

            Promise.all(promises).then(()=>{
                history.push("/")
            }).catch(()=>{
                setError("Failed to Update Account...")
            }).finally(()=>{
                setLoading(false)
            })
    }
    return(
        <>
            <Card>
                <Card.Body>
                    <h1 className="text-center mb-4">Update Profile</h1>
                    {error && <Alert variant="danger">{error}</Alert>} 
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required defaultValue={currentUser.value}/>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} placeholder="Leave Blank to keep the same"/>
                        </Form.Group>
                        <Form.Group id="pass-confirm">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type="password" ref={passConfRef} placeholder="Leave Blank to keep the same"/>
                        </Form.Group><br/>
                        <Button className="w-100" type="submit" disabled={loading}>Update</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Link to="/dashboard">Cancel</Link>
            </div>
        </>
    )
}

export default UpdateProfile;