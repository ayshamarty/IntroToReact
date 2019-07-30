import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStroopwafel } from "@fortawesome/free-solid-svg-icons";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";
import { faJava } from "@fortawesome/free-brands-svg-icons";

import UserDetail from "./UserDetail";

library.add(faMugHot, faJava, faStroopwafel);

class User extends Component {
  render() {
    return (
      <div>
        <p>This is the User Component</p>
        <h1>User</h1>
        <h3>
          {this.props.myUser.fName} {this.props.myUser.lName}
        </h3>
        Favorite Drink: <FontAwesomeIcon icon="mug-hot" />
        Also Coffee : <FontAwesomeIcon icon={["fab", "java"]} />
        Favorite Food: <FontAwesomeIcon icon="stroopwafel" />
        <UserDetail />
      </div>
    );
  }
}

export default User;
