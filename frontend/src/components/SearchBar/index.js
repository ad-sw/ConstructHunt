import {useDispatch} from 'react-redux';
import { useState } from 'react';
import {searchProducts} from '../../store/product';
// import { Redirect } from 'react-router-dom';

import "./SearchBar.css";


function SearchBar(){
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');
    // const [test, setTest] = useState('');

    return (
        <div className="searchBarT">
        <form className="searchBarT" onSubmit={(e) => {
            if (search) {
            e.preventDefault();
            dispatch(searchProducts(search));
            }}
        }>
        <div className="">
        {/* <svg className="searchIcon" width="21px" height="21px" viewBox="0 1.5 16 16" xmlns="http://www.w3.org/2000/svg" class="styles_searchIcon__3Hf35"><path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm8.707 12.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" fill="#4B587C" opacity="0.5"></path></svg> */}
        {/* &nbsp;
        <input
            className="searchInnerArea but"
            placeholder="Search Construct Hunt"
            type="text"
            name="search"
            value={search}
            onChange={e => setSearch(e.target.value)}>
        </input> */}
        <img className="searchIcon" src="https://user-images.githubusercontent.com/86431563/150604228-109bc4a5-1562-4e35-88ed-6a8a75a352bc.png" height="19px" width="19px"/>
        <input
            type="text"
            name="search"
            className="searchBarExpands"
            placeholder="Search Construct Hunt"
            value={search}
            onChange={e => setSearch(e.target.value)}
        />
        </div>
        {/* <input class="but" type="button" value = "search"/> */}
        {/* <button className='searchBtn' type="submit">Search</button> */}
        {/* <div id="blueBox"></div> */}
        </form>
        </div>
    );
  }

export default SearchBar;
