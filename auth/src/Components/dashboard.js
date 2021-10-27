import React, { useState } from "react";
import {Card , Button , Alert} from 'react-bootstrap'
import {Link , useHistory} from "react-router-dom";
import {useAuth} from "../Context/authContext";

function Dashboard(){
    const [error , setError] = useState();
    const {currentUser , logout} = useAuth();
    const history = useHistory();

    async function handleLogOut(){
        try{
            await logout();
            history.push("/")
        }
        catch{
            setError("Failed to Logout!")
        }
    }
    return(
        <>
            <Card>
                <Card.Body>
                    <h1 className="text-center mb-4">Profile</h1>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <b>Email : </b>{currentUser.email}
                    <Link to="/update-profile" className="btn btn-primary w-100 mt-3">Update Profile</Link>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Button variant="link" onClick={handleLogOut}>Log Out</Button>
            </div>
        </>
    )
}

export default Dashboard;