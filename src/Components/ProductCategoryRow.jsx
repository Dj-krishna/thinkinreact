import React from 'react';
import './Style.css';

function ProductCategoryRow(props){
    const category = props.category;

    return (
        <tr className="row" style={{color: "blue", background:"yellow"}}>
           <b>{category}</b>
        </tr>
    )
}

export default ProductCategoryRow;

