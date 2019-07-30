import React from 'react';
import '../App.css';



function TickBox(props)  {

  return (
    <div >
        <input placeholder="Search..." onChange={props.passedFunction}></input>
        <br></br>
        <input type="checkbox" onChange={props.passedBox}/><p>Only show products in stock</p>

    </div>
  );

}

export default TickBox;