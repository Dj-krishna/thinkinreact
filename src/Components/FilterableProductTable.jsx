import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
// import { Component } from 'react';
import './Style.css';

function FilterableProductTable(props){

    const [filterText, setFilterText] = useState("");
    const [inStockOnly, setInStockOnly] = useState(false);

    return(
        <div>
            <SearchBar 
            filterText={filterText} 
            inStockOnly={inStockOnly}
            onFilterChange={(text)=>setFilterText(text)}
            onStockChange={(stock)=>setInStockOnly(stock)}
            />
            <ProductTable
            products={props.products} 
            filterText={filterText} 
            inStockOnly={inStockOnly} />
        </div>
    );
 }
 
export default FilterableProductTable;