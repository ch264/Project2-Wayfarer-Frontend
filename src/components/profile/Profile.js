import React, { Component } from "react";
import { Container, List, Header, Image } from "semantic-ui-react";

export default class Profile extends Component {
  render() {

    let headerMargin = {
      marginTop: "5%"
    };

    /* eslint-disable */

    return (
      <Container>
        <Header as="h2" textAlign="center" style={headerMargin} />
        <Image src={this.props.user && this.props.user.avatarUrl ? this.props.user.avatarUrl : "./images/default_avatar.png"} size="medium" circular />
        <Header as="h3" textAlign="left">
          <List>
            <List.Item align="center">
              <List.Content>
                <List.Icon align="center" name="user" />
                {this.props.user ? this.props.user.userName : 'No user name'}
              </List.Content>
            </List.Item>
            <List.Item align="center">
              <List.Content>
                <List.Icon align="center" name="marker" />
                San Francisco, CA
              </List.Content>
            </List.Item>
            <List.Item align="center">
              <List.Content align="center">
                <List.Icon align="center" name="mail" />
                <a href="#">{this.props.user ? this.props.user.email : ''}</a>
              </List.Content>
            </List.Item>
          </List>
        </Header>
      </Container>
    );
  }
}
