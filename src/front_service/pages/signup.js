import React, { Component } from "react";
import Link from "next/link";
import Router from "next/router";
import { Form, Button, Card, Alert,Container } from "react-bootstrap";

import { AppWithAuthentication } from "../src/components/App";
import { auth, db } from "../src/firebase";
import * as routes from "../src/constants/routes";

const SignUpPage = () => (
  <AppWithAuthentication>
    <SignUpForm />
  </AppWithAuthentication>
);

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value
});

const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null
};

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { username, email, passwordOne } = this.state;

    auth
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // Create a user in your own accessible Firebase Database too
        db.doCreateUser(authUser.user.uid, username, email)
          .then(() => {
            this.setState(() => ({ ...INITIAL_STATE }));
            Router.push(routes.HOME);
          })
          .catch(error => {
            this.setState(updateByPropertyName("error", error));
          });
      })
      .catch(error => {
        this.setState(updateByPropertyName("error", error));
      });

    event.preventDefault();
  };

  render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo || passwordOne === "" || username === "";

    return (
      <div>
        <Container
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "100vh" }}>
            
            <div className="w-100" style={{ maxWidth: "500px" }}>
              <Card>
                <Card.Body>
                  <h2 className="text-center mb-4">Join FeliX Community !</h2>
                  
                  <Form onSubmit={this.onSubmit}>

                    <Form.Group id="username">
                      <Form.Label>User Name</Form.Label>
                      <Form.Control value={username}
                        onChange={event =>
                          this.setState(updateByPropertyName("username", event.target.value))
                        }
                        type="text"
                        placeholder="User Name" />
                    </Form.Group>

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
                      <Form.Control value={passwordOne}
                        onChange={event =>
                          this.setState(
                            updateByPropertyName("passwordOne", event.target.value)
                          )
                        }
                        type="password"
                        placeholder="Password" />
                    </Form.Group>

                    <Form.Group id="password-confirm">
                      <Form.Label>Password Confirmation</Form.Label>
                      <Form.Control value={passwordTwo}
                        onChange={event =>
                          this.setState(
                            updateByPropertyName("passwordTwo", event.target.value)
                          )
                        }
                        type="password"
                        placeholder="Confirm Password"/>
                    </Form.Group>

                    <Button disabled={isInvalid} className="w-100" type="submit">
                      JOIN NOW
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

const SignUpLink = () => (
  <p  className="w-100 text-center mt-3">
    Don't have an account?{" "}
    <Link href={routes.SIGN_UP}>
      <a>Sign Up</a>
    </Link>
  </p>
);
export default SignUpPage;
export { SignUpForm, SignUpLink };
