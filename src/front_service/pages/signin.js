import React, { Component } from "react";
import Router from "next/router";
import { Form, Button, Card, Alert,Container } from "react-bootstrap";

import { SignUpLink } from "./signup";
import { PasswordForgetLink } from "./pw-forget";
import { AppWithAuthentication } from "../src/components/App";
import { auth } from "../src/firebase";
import * as routes from "../src/constants/routes";

const SignInPage = () => (
  <AppWithAuthentication>
    <SignInForm />
    <PasswordForgetLink />
    <SignUpLink />
  </AppWithAuthentication>
);

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value
});

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    auth
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        Router.push(routes.HOME);
      })
      .catch(error => {
        this.setState(updateByPropertyName("error", error));
      });

    event.preventDefault();
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === "" || email === "";

    return (
      <div>
        
        <Container
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "100vh" }}>
            
            <div className="w-100" style={{ maxWidth: "500px" }}>
            
            <Card>
                <Card.Body>
                  <h2 className="text-center mb-4">Login</h2>
                  
                  <Form onSubmit={this.onSubmit}>

                    <Form.Group id="email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control value={email}
                        onChange={event =>
                          this.setState(updateByPropertyName("email", event.target.value))
                        }
                        type="text"
                        placeholder="Email Address" />
                    </Form.Group>

                    <Form.Group id="password">
                      <Form.Label>Password</Form.Label>
                      <Form.Control value={password}
                        onChange={event =>
                          this.setState(updateByPropertyName("password", event.target.value))
                        }
                        type="password"
                        placeholder="Password" />
                    </Form.Group>

                    <Button disabled={isInvalid} type="submit" className="w-100" >
                      LOGIN
                    </Button>
                    {error && <p>{error.message}</p>}
                  </Form>
                </Card.Body>
              </Card>

            </div>

        </Container>

      </div>
    );
  }
}

export default SignInPage;

export { SignInForm };
