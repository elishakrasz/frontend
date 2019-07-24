import React, { Component } from 'react'
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Responsive,
    Segment,
    Sidebar,
    Visibility,
  } from 'semantic-ui-react'

const icon = '../../itribe.png'
const facebook = '../../icons/iconmonstr-facebook-2.svg'
const youtube = '../../icons/iconmonstr-youtube-7.svg'
const instagram = '../../icons/iconmonstr-instagram-11.svg'
const twitter = '../../icons/iconmonstr-twitter-2.svg'
const linkedin = '../../icons/iconmonstr-linkedin-2.svg'

export default class Footer extends Component {
  render() {
    return (
      <div>
            <div style={{ padding: '5em 0em', paddingLeft: '8em', backgroundColor: '#004D8A',
             }}>
        <Grid  inverted stackable>
          <Grid.Row>
            <Grid.Column width={3} style={{
                marginLeft: '6em',
                marginRight: '6em'
            }}>
                <Image src={icon} size='big' style={{
                    marginBottom: '0.5em'
                }} />
              <p style={{
                  fontSize: '16px',
                  marginLeft: '1em',
                  color: 'white'
              }}>iTribe is a digital networking project dedicated to mapping the greater Jewish world and rediscovering the Lost Tribes of Israel by documenting a rich legacy of religious practices and traditions that can be traced back to ancient Israel. </p>
              {/* <Menu>
                  <Menu.Item>
                      <Icon name='facebook' size='small' />
                  </Menu.Item>
              </Menu> */}
              <List link inverted horizontal style={{
                  marginLeft: '14px'
              }}>
                <List.Item as='a'><Image src={facebook} size="mini" /></List.Item>
                <List.Item as='a'><Image src={youtube} size="mini" /></List.Item>
                <List.Item as='a'><Image src={instagram} size="mini" /></List.Item>
                <List.Item as='a'><Image src={twitter} size="mini" /></List.Item>
                <List.Item as='a'><Image src={linkedin} size="mini" /></List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={2}>
              <Header inverted as='h4' content='About' />
              <List link inverted>
                <List.Item as='a'>Banana Pre-Order</List.Item>
                <List.Item as='a'>DNA FAQ</List.Item>
                <List.Item as='a'>How To Access</List.Item>
                <List.Item as='a'>Favorite X-Men</List.Item>
              </List>
              <Header inverted as='h4' content='The Team' />
              <List link inverted>
                <List.Item as='a'>Banana Pre-Order</List.Item>
                <List.Item as='a'>DNA FAQ</List.Item>
                <List.Item as='a'>How To Access</List.Item>
                <List.Item as='a'>Favorite X-Men</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={2}>
              <Header inverted as='h4' content='Our Work' />
              <List link inverted>
                <List.Item as='a'>Banana Pre-Order</List.Item>
                <List.Item as='a'>DNA FAQ</List.Item>
                <List.Item as='a'>How To Access</List.Item>
                <List.Item as='a'>Favorite X-Men</List.Item>
              </List>
              <Header inverted as='h4' content='Explore' />
              <List link inverted> 
                <List.Item as='a'>Banana Pre-Order</List.Item>
                <List.Item as='a'>DNA FAQ</List.Item>
                <List.Item as='a'>How To Access</List.Item>
                <List.Item as='a'>Favorite X-Men</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={2}>
              <Header inverted as='h4' content='Contact' />
              <List link inverted>
                <List.Item as='a'>Banana Pre-Order</List.Item>
                <List.Item as='a'>DNA FAQ</List.Item>
                <List.Item as='a'>How To Access</List.Item>
                <List.Item as='a'>Favorite X-Men</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={2}>
              <Header inverted as='h4' content='Services' />
              <List link inverted>
                <List.Item as='a'>Banana Pre-Order</List.Item>
                <List.Item as='a'>DNA FAQ</List.Item>
                <List.Item as='a'>How To Access</List.Item>
                <List.Item as='a'>Favorite X-Men</List.Item>
              </List>
            </Grid.Column>
            {/* <Grid.Column width={4}>
              <Header as='h4' inverted>
                Footer Header
              </Header>
              <p>
                Extra space for a call to action inside the footer that could help re-engage users.
              </p>
            </Grid.Column> */}
          </Grid.Row>
        </Grid>
    </div>
      </div>
    )
  }
}
