import {useDispatch} from 'react-redux';
import { useState } from 'react';
import {searchProducts} from '../../store/product';
import { Redirect } from 'react-router-dom';

import "./SearchBar.css";


function SearchBar(){
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');

    return (
        <>
        <Redirect exact to="/products"/>
        <form className="search" onSubmit={(e) => {
            if (search) {
            e.preventDefault();
            dispatch(searchProducts(search));
            }}
        }>

        <input
        className="searchArea" type="text" name="search" value={search}
        onChange={e => setSearch(e.target.value)}>
        </input>

        <button className='searchBtn' type="submit">Search Products</button>

        </form>
        </>
  );
  }

export default SearchBar;
