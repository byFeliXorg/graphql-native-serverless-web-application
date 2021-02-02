import React, { Component } from "react";
import Link from "next/link";
import { Form, Button, Card, Alert,Container } from "react-bootstrap";

import { AppWithAuthentication } from "../src/components/App";
import * as routes from "../src/constants/routes";
import { auth } from "../src/firebase";

const PasswordForgetPage = () => (
  <AppWithAuthentication>
    <PasswordForgetForm />
  </AppWithAuthentication>
);

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value
});

const INITIAL_STATE = {
  email: "",
  error: null
};

class PasswordForgetForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email } = this.state;

    auth
      .doPasswordReset(email)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
      })
      .catch(error => {
        this.setState(updateByPropertyName("error", error));
      });

    event.preventDefault();
  };

  render() {
    const { email, error } = this.state;

    const isInvalid = email === "";

    return (
      <div>

        <Container
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "100vh" }}>
            
            <div className="w-100" style={{ maxWidth: "500px" }}>
            
            <Card>
                <Card.Body>
                  <h2 className="text-center mb-4">Reset Password</h2>
                  
                  <Form onSubmit={this.onSubmit}>

                    <Form.Group id="email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control value={this.state.email}
                        onChange={event =>
                          this.setState(updateByPropertyName("email", event.target.value))
                        }
                        type="text"
                        placeholder="Email Address" />
                    </Form.Group>

                    <Button disabled={isInvalid} className="w-100"  type="submit">
                        RESET PASSWORD
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

const PasswordForgetLink = () => (
  <p  className="w-100 text-center mt-3">
    <Link href={routes.PASSWORD_FORGET}>
      <a>Forgot Password?</a>
    </Link>
  </p>
);

export default PasswordForgetPage;

export { PasswordForgetForm, PasswordForgetLink };
