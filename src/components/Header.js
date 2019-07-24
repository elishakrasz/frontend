import React, { Component } from "react";
import { Grid, Menu, Dropdown, Image, Button } from "semantic-ui-react";
import { SignUpModal } from "../authentication/SignUpModal";
import { SignInModal } from "../authentication/SignInModal";

const icon = "../../itribe.png";

export default class Header extends Component {
  render() {
    return (
      <Grid
        columns={4}
        padded
        style={{
          backgroundColor: "#004D8A",
          height: "10vh"
        }}
      >
        <Grid.Row
          verticalAlign="middle"
          style={{
            color: "white"
          }}
        >
          <Grid.Column width={1} />
          <Grid.Column width={3}>
            <Image src={icon} size="small" />
          </Grid.Column>
          <Grid.Column width={7}>
            <Menu secondary inverted size="large">
              <Menu.Item name="home" />
              <Menu.Item name="about us" />
              <Menu.Item name="the team" />
              <Menu.Item name="our work" />
              <Menu.Item name="explore" />
              <Menu.Item name="newsletter" />
            </Menu>
          </Grid.Column>
          <Grid.Column width={4}>
            <Menu secondary inverted size="large" position="right">
              {/* <Button color="teal" inverted>Sign Up</Button> */}
              {/* <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item> */}
              <Menu.Item>
                <Button inverted color="green">
                  Invest in us
                </Button>
              </Menu.Item>
              <Menu.Item>
                <SignInModal />
                <SignUpModal />
              </Menu.Item>

              <Menu.Item>
                <Dropdown text="Help">
                  <Dropdown.Menu>
                    <Dropdown.Item text="New" />
                    <Dropdown.Item text="Open..." description="ctrl + o" />
                    <Dropdown.Item text="Save as..." description="ctrl + s" />
                    <Dropdown.Item text="Rename" description="ctrl + r" />
                    <Dropdown.Item text="Make a copy" />
                    <Dropdown.Item icon="folder" text="Move to folder" />
                    <Dropdown.Item icon="trash" text="Move to trash" />
                    <Dropdown.Divider />
                    <Dropdown.Item text="Download As..." />
                    <Dropdown.Item text="Publish To Web" />
                    <Dropdown.Item text="E-mail Collaborators" />
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Item>
            </Menu>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
