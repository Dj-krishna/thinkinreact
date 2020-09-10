import React from 'react';
import './App.css';
import FilterableProductTable from './Components/FilterableProductTable';
import PRODUCTS from './Components/Products';
function App() {
  return (
    <div className="container" style={{textAlign:"center"}}>
      <h2>Thinking in React</h2>
      <FilterableProductTable products={PRODUCTS} />
    </div>
  );
}

export default App;
