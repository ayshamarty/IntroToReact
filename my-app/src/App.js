import React, { Component } from "react";
import "./App.css";
import User from "./User/User";

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>This is the app Component</p>
        <User myUser={this.returnAUser()} />
      </div>
    );
  }

  returnAUser() {
    let aUser;
    aUser = {
    fName: "Aysha",
    lName: "Marty",
    dob: "21/07/1992",
    city: "Salford"
    }
    return aUser;
  }
}

export default App;
