import React from 'react'
import {shallow} from 'enzyme';
import FilterableProductTable from '../Components/FilterableProductTable';
import SearchBar from '../Components/SearchBar';
import ProductTable from '../Components/ProductTable';

describe('<FilterableProductTable />', () => {
    // let filterableProductTableComponent;
it('should render FilterableProductTable', () => {
    const wrapper = shallow(<FilterableProductTable />)

    expect(wrapper).not.toBeNull();
    expect(wrapper).length.toBe(1);   
})

it('should render search bar component', () => {
    const searchBar = shallow(<SearchBar 
        onFilterChange= {jest.fn()}
        onStockChange= {jest.fn()}
    />)
    expect(searchBar).not.toBeNull();
    expect(searchBar.find('#main').length).toBe(1);
})

it('should render product table', () =>{
    const productTable = shallow(<ProductTable />)
    expect(productTable).not.toBeNull();
    expect(productTable.find('.table').length).toBe(1);
    expect(productTable.find('.tbody').length).toBe(1);
})
})
