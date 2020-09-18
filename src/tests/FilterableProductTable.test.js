import React from 'react'
import {shallow, configure} from 'enzyme';
import FilterableProductTable from '../Components/FilterableProductTable';
import SearchBar from '../Components/SearchBar';
import ProductTable from '../Components/ProductTable';
import Adapter from 'enzyme-adapter-react-16';
import PRODUCTS from '../Components/Products';

configure({ adapter: new Adapter() });



describe('<FilterableProductTable />', () => {
    // let filterableProductTableComponent;
it('should render FilterableProductTable', () => {
    const wrapper = shallow(<FilterableProductTable products={PRODUCTS} />)
    expect(wrapper).not.toBeNull();
    expect(wrapper.find('ProductTable').length).toBe(1);
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
    const fakeUser = [{ category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' }]
    const productTable = shallow(<ProductTable products={fakeUser} inStockOnly={false} filterText={''}/>)

    expect(productTable).not.toBeNull();
    expect(productTable.find('.tbody').length).toBe(1);
    // expect(productTable.find('tbody').length).toHaveLength(fakeUser.length);
    // expect(item.first().text()).toEqual('Sporting Goods');
})
})
