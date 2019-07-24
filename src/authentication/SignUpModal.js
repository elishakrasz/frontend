import React, { Component } from "react";
import {
  Button,
  Header,
  Image,
  Form,
  Checkbox,
  Modal
} from "semantic-ui-react";
import { Mutation } from "react-apollo";
import { Redirect } from "react-router-dom"
import { SIGNUP_MUTATION } from "../mutations";
import { Layout } from "../pages/Layout";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  passwordConfirmation: "",
  open: false
};

export class SignUpModal extends Component {
  state = { ...initialState };

  clearState = () => {
    this.setState({ ...initialState });
  };

  open = () => this.setState({ open: true })
  close = () => this.setState({ open: false })

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit =  (e, register) => {
    register().then(async ({ data }) => {
      console.log("update", data.register);
    //   this.close()
     
      if(data.register) {
          return (
              <Redirect to='/await' />
          )
      }
    //     this.clearState();
    //  await this.props.history.push("/await-confirmation");
    });
  };

  validateForm = () => {
    const { firstName, email, password, passwordConfirmation } = this.state;
    const isInvalid =
      !firstName || !email || !password || password !== passwordConfirmation;
    return isInvalid;
  };
  render() {
    const {
      firstName,
      lastName,
      email,
      password,
      passwordConfirmation,
      open
    } = this.state;
    return (
      <Modal
        open={open}
        size="tiny"
        trigger={<Button onClick={this.open} inverted>Sign Up</Button>}
        // centered="false"
        dimmer="blurring"
      >
        <div
          style={{
            // backgroundColor: "teal",
            padding: "25px"
          }}
        >
          <Modal.Header
            style={{
              fontSize: "1.5em",
              paddingBottom: "15px"
            }}
          >
            Sign-Up
          </Modal.Header>
          <Modal.Content>
            <Mutation
              mutation={SIGNUP_MUTATION}
              variables={{ data: { firstName, lastName, email, password } }}
              onError={() => {}}
            >
              {(register, result) => {
                const { data, loading, error, called, onCompleted } = result;
                if (!called) {
                  return (
                    <Form onSubmit={e => this.handleSubmit(e, register)} open="false">
                      <Form.Field>
                        <label>First Name</label>
                        <input
                          placeholder="First Name"
                          name="firstName"
                          value={firstName}
                          onChange={this.handleChange}
                        />
                      </Form.Field>
                      <Form.Field>
                        <label>Last Name</label>
                        <input
                          placeholder="Last Name"
                          name="lastName"
                          value={lastName}
                          onChange={this.handleChange}
                        />
                      </Form.Field>
                      <Form.Field>
                        <label>Email</label>
                        <input
                          placeholder="Email"
                          name="email"
                          value={email}
                          onChange={this.handleChange}
                        />
                      </Form.Field>
                      <Form.Field>
                        <label>Password</label>
                        <input
                          placeholder="Password"
                          type="password"
                          name="password"
                          value={password}
                          onChange={this.handleChange}
                        />
                      </Form.Field>
                      <Form.Field>
                        <label>Password</label>
                        <input
                          placeholder="Password Confirmation"
                          type="password"
                          name="passwordConfirmation"
                          value={passwordConfirmation}
                          onChange={this.handleChange}
                        />
                      </Form.Field>
                      <Form.Field>
                        <Checkbox label="I agree to the Terms and Conditions" />
                      </Form.Field>
                      <Button type="submit">Submit</Button>
                    </Form>
                  );
                }
                if (loading) {
                  return <div>...Loading</div>;
                }

                if (error) {
                  return <div>Error</div>;
                }

                if(onCompleted) {
                    return (
                        <div>Completed</div>
                    )
                }

                if(data.register) {
                    console.log('option5', data.register)
                    return (
                        <Redirect to='/await' />
                    )
                }

              }}
            </Mutation>
          </Modal.Content>
        </div>
      </Modal>
    );
  }
}
