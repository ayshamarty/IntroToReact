import React, { Component } from "react";
import axios from "axios";
import { Button } from "reactstrap";

import "./App.css";
import User from "./User/User";

class App extends Component {
  constructor(){
    super();
    this.state = ({
      data: 0
    })
  }

  render() {
    const { Title, Year, Rated, Genre, Plot, Poster } = this.state.data;
    return (
      <div className="App">
        <p>This is the app Component</p>
        <User myUser={this.returnAUser()} />
        <div>
        <h2>AutoFilm.js</h2>
        <h4>{Title}</h4>
        <h4>{Year}</h4>
        <h4>{Rated}</h4>
        <h4>{Genre}</h4>
        <h4>{Plot}</h4>
        <img src={Poster} />
        <Button onClick={this.makeRequest}>click for a poster</Button>
      </div>
      </div>
    );
  }



  makeRequest = () => {
    axios
      .get("http://www.omdbapi.com/?apikey=cf6d6c63&t=hop")
      .then(response => {
        this.setState({
          data: response.data
        });
      });
  };

  returnAUser() {
    let aUser;
    aUser = {
    fName: "Aysha",
    lName: "Marty"
    }
    return aUser;
  }
}

export default App;
