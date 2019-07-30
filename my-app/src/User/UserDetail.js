import React, { Component } from "react";

class UserDetail extends Component {
  render() {
    return <div>
        <p>date of birth: {this.props.userData.dob} </p>
        <p>city: {this.props.userData.city} </p>
    <div>{ this.loopItem(this.props.userData)}</div>;

    </div>;
  }
  loopItem = (someData) =>{
       let mydiv = document.createElement('div');
    for (let item in someData){
        if(someData.hasOwnProperty(item)){
            let listItem = document.createElement('li');
            listItem.innerText = `${item}: ${someData[item]}`;
            mydiv.appendChild(listItem);
            console.log(mydiv)
            

    }
  }
  }
}

export default UserDetail;
