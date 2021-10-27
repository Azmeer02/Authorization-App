import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router , Switch , Route} from "react-router-dom";
import { AuthProvider } from "../Context/authContext";
import Dashboard from "./dashboard";
import Login from "./Login";
import SignUp from "./signup";
import PrivateRoute from "./privRoute";
import ForgotPass from "./forgot-password";

function App() {
  return (
    <Container className="d-flex align-items-center justify-content-center" style={{minHeight:"100vh"}}>
      <div className="w-100" style={{maxWidth:"400px"}}>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact="/" path = "/Dashboard" component={Dashboard}/>
              <Route path = "/Login" component={Login}></Route>
              <Route path = "/Signup" component={SignUp}></Route>
              <Route path = "/forgot-password" component={ForgotPass}></Route>
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;
