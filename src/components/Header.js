import React, { Component } from 'react'
import { Button, Dropdown, Menu, Search } from 'semantic-ui-react'
import Signin from './SignIn'
import Signup from './SignUp'


export default class Header extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })


  render() {

    let menuStyle = {
      borderRadius: 0,
      marginBottom: 0
    }

    const { activeItem } = this.state

    if (this.props.isLoggedIn) {
      return (
        <Menu style={menuStyle} stackable inverted>
          <Menu.Item>
            <img src='https://react.semantic-ui.com/logo.png' />
          </Menu.Item>

          <Menu.Item>
            Wayfarer
        </Menu.Item>

          <Menu.Item>
            <Search size='small' />
          </Menu.Item>

          <Menu.Menu position='right'>
            <Dropdown item text='Profile'>
              <Dropdown.Menu>
                <Dropdown.Item>View Profile</Dropdown.Item>
                <Dropdown.Item>Sign Out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Menu>
      )
    } else {
      return (
        <Menu style={menuStyle} stackable inverted>
          <Menu.Item>
            <img src='https://react.semantic-ui.com/logo.png' />
          </Menu.Item>

          <Menu.Item>
            Wayfarer
        </Menu.Item>

          <Menu.Item position='right'>
            <Signup />
          </Menu.Item>

          <Menu.Item>
            <Signin />
          </Menu.Item>

        </Menu>
      )
    }
  }
}
