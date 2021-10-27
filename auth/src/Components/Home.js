import React from "react";
import "./App.css";
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";

function Home(){
    return(
        <div>
            <>
                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">Welcome To Authorization App</h2>
                        <div className="w-100 text-center mt-2">
                            <button className="button"><Link to="/signup">Sign Up</Link></button><br/>
                            <button className="button2"><Link to="/login">Log In</Link></button>
                        </div>
                    </Card.Body>
                </Card>
            </>
        </div>
    )
}

export default Home;