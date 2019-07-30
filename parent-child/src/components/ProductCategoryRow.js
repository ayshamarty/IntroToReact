import React from 'react';

import '../App.css';

function ProductCategoryRow(props)   {


  return (
  
        <div>
            <h1>{props.name}</h1>
      {props.list.filter(item => item.name.includes(props.text)).filter(item => props.clicked||true===item.inStock).map((item, index) => (
        <p> {item.name} - {item.cost} - {item.inStock ? "In Stock" : "Out of Stock"}</p>
      ))}
    </div>
   
  );

}
export default ProductCategoryRow;