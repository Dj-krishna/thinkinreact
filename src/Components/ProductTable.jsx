import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';
import "./Style.css";

function ProductTable(props){
    const rows = [];
    let lastcategory = null;

    const filterText=props.filterText;
    const inStockOnly=props.inStockOnly;

    props.products.forEach((product)=>{

        if(product.name.indexOf(filterText) === -1){
            return;
        }

        if(inStockOnly && !product.stocked){
            return;
        }


        if(product.category !== lastcategory){
            rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
        }

        rows.push(<ProductRow product={product} key={product.name} />);
        lastcategory = product.category;
    
    });

    return(
        <table className="table">
            <thead>
                <tr style={{background:"orange"}}>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>

            <tbody className="tbody" style={{background:"#61a3e8", color:"white"}}>
                {rows}
            </tbody>
        </table>
    );
}

export default ProductTable;