import React from 'react';
import './Style.css'

    function SearchBar(props){
        
    const filterText= props.filterText;
    const inStockOnly= props.inStockOnly;

        
    return(
        <form id="main" style={{background:"green"}}>
            <input 
            type="search" 
            placeholder="search text..." 
            value={filterText} 
            onChange={(e)=> props.onFilterChange(e.target.value)} />

            <p>
                <input 
                type="checkbox" 
                checked={inStockOnly}
                onChange={(e)=> props.onStockChange(e.target.checked)}/> Only show products in stock
            </p>
        </form>
    )
}
  

export default SearchBar;