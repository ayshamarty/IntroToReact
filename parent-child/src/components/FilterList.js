
import React, { Component } from 'react';

import TickBox from './TickBox'
import Results from './Results'
import '../App.css';

class FilterList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text:"",
            clicked:true
        }
    }


sportProductList = [{name:"Football",cost:"$49.99",inStock:true},{name:"Baseball",cost:"$9.99",inStock:true},{name:"Basketball",cost:"$29.99",inStock:false},{name:"Rugbyball",cost:"$29.99",inStock:false}];
electronicProductList = [{name:"iPod Touch",cost:"$99.99",inStock:true},{name:"iPhone 5",cost:"$399.99",inStock:true},{name:"Nexus 7",cost:"$199.99",inStock:false}];

updateText = (event) => {
this.setState({
    text:event.target.value 
})
}

updateBox = (event) => {
    this.setState({
        clicked:!event.target.checked  
    })
}


render() {
  return (
    <div>
        <TickBox passedFunction={this.updateText} passedBox={this.updateBox}/>
        <Results text={this.state.text} clicked={this.state.clicked} sportProductList={this.sportProductList} electronicProductList={this.electronicProductList}/>
    </div>
  );
}
}

export default FilterList;

