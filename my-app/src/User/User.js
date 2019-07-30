import React, { Component } from "react";
import UserDetail from "./UserDetail";

class User extends Component {
  render() {
    return (
      <div>
        <p>This is the User Component</p>
        <h1>User</h1>
        <h3>{this.props.myUser.fName} {this.props.myUser.lName}</h3>
        
        <UserDetail userData={this.props.myUser} /> 
      </div>
    );
  }
}

export default User;
