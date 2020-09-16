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
    // const productTable = wrapper.find(ProductTable)
    // const fakeUser = { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' }
    expect(wrapper).not.toBeNull();
    expect(wrapper.props('products')).toEqual({PRODUCTS});
    // expect(productTable.props().children).toBe();
    // expect(wrapper.products.textContent).toBe(fakeUser.category);
      
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
    const fakeUser = { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' }
    const productTable = shallow(<ProductTable products={fakeUser}/>)

    const item = productTable.find(".tbody")

    expect(productTable).not.toBeNull();
    expect(item.length).toHaveLength(fakeUser.length);
    expect(item.first().text()).toEqual('Sporting Goods');
})
})
