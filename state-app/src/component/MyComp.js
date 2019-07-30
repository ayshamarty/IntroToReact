import React, { Component } from "react";

class MyComp extends Component {
  constructor() {
    super();
    this.state = {
      eventDate: new Date(),
      clicks: 0
    };
  }
  addClick = () => {
    this.setState({
      eventDate: new Date(),
      clicks: this.state.clicks +1
    })
  }


  render() {
    return(
      <div>
        <p>You last pressed the button at: {this.state.eventDate.toLocaleTimeString()}</p>
        <p>You have clicked the button: {this.state.clicks} time(s)</p>
        <button onClick={this.addClick}>click me</button>

      </div>
    )
  }

}



export default MyComp;