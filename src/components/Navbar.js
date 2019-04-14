import React, { Component } from "react"
import { Menu, Image } from "semantic-ui-react"
import { NavLink } from "react-router-dom"

export default class Navbar extends Component {
  componentDidMount() {}

  render() {
    return (
      <>
        <Menu stackable={true} id="navBar" widths={6} attached="top" tabular>
          <Menu.Item color={"green"} name="PLAY" as={NavLink} to="/levels" />
          <Menu.Item
            color={"blue"}
            icon={!this.props.currentUser ? "lock" : null}
            name="CREATE"
            as={NavLink}
            to="/create"
          />
          <Image
            rounded
            style={{ margin: "5px", width: "229px", height: "40px" }}
            src="https://i.ibb.co/34DXmpm/Hueman-logo.png"
          />
          <Menu.Item
            color={"yellow"}
            name={"MY LEVELS"}
            icon={!this.props.currentUser ? "lock" : null}
            as={NavLink}
            to="/mylevels"
          />
          {this.props.currentUser ? (
            <>
              <Menu.Item name="LOG-OUT" onClick={this.props.logOut}>
                LOG OUT {" - "}(
                {this.props.currentUser
                  ? this.props.currentUser.user_name
                  : null}
                )
              </Menu.Item>
            </>
          ) : (
            <>
              <Menu.Item
                color={"red"}
                name={"LOG IN"}
                as={NavLink}
                to="/login"
              />
            </>
          )}
        </Menu>
        <h4>
          {!this.props.currentUser
            ? "SIGN UP TO TRACK PROGRESS AND CREATE LEVELS"
            : null}
        </h4>
      </>
    )
  }
}
