import React, { Component } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from "semantic-ui-react";

class SignupForm extends Component {
  render() {
    return (
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header
            as="h1"
            textAlign="left"
            color='teal'
            style={{
              marginLeft: "10px"
            }}
          >
            Sign Up
          </Header>
          <Form size="large">
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="First Name"
              />
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Last Name"
              />
              <Form.Input
                fluid
                icon="mail"
                iconPosition="left"
                placeholder="E-mail address"
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                type="password"
                placeholder="Create Password"
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Confirm Password"
                type="password"
              />
              <Form.Checkbox
                inline
                label="I agree to the terms and conditions"
              />
              <Button
                color="teal"
                fluid
                size="large"
                style={{
                  borderRadius: "25px"
                }}
              >
                Sign In
              </Button>
            </Segment>
          </Form>
          <Message>
            Already a member<a href="#">Log In</a>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

export default SignupForm;
