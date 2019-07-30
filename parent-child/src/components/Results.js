import React from 'react';
import ProductCategoryRow from './ProductCategoryRow'

import '../App.css';

function Results(props) {

  return (
    <div >
        <ProductCategoryRow text={props.text} clicked={props.clicked} name="Sporting Goods" list={props.sportProductList}/>
        <ProductCategoryRow text={props.text} clicked={props.clicked} name="Electronic Goods" list={props.electronicProductList}/>
    </div>
  );

}

export default Results;