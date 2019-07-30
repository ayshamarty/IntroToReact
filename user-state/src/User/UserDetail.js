import React, { Component } from "react";
import { Button } from "reactstrap";

class UserDetail extends Component {
  constructor() {
    super();
    this.state = {
      city: "Salford",
      dob: "1992-07-21"
    };
  }

  changeCity = () => {
    this.setState({
      city: document.getElementById("cityInput").value
    });
  };

  changeDOB = () => {
    this.setState({
      dob: document.getElementById("dobInput").value
    });
  };

  render() {
    return (
      <div>
        <p>This is the UserDetail Component</p>
        <p>date of birth: {this.state.dob} </p>
        <p>city: {this.state.city} </p>
        {/* <div>{this.loopItem(this.props.userData)}</div>; */}
        <form>
          <input type="text" id="cityInput" placeholder="city" />
          <Button color="info" type="button" onClick={this.changeCity}>
            change city
          </Button>
        </form>
        <form>
          <input type="date" id="dobInput" placeholder="date of birth" />
          <Button color="info" Click={this.changeDOB}>
            change date of birth
          </Button>
        </form>
      </div>
    );
  }
  loopItem = someData => {
    let mydiv = document.createElement("div");
    for (let item in someData) {
      if (someData.hasOwnProperty(item)) {
        let listItem = document.createElement("li");
        listItem.innerText = `${item}: ${someData[item]}`;
        mydiv.appendChild(listItem);
        console.log(mydiv);
      }
    }
  };
}

export default UserDetail;
