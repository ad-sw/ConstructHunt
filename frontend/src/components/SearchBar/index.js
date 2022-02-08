import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect} from 'react';
import {searchProducts} from '../../store/product';
import "./SearchBar.css";
import {NavLink, useHistory} from 'react-router-dom';
import ProductProfilePgModal2 from '../../components/ProductProfilePage/SimilarProductProfile'
import {Modal} from '../../context/Modal';
import {getProducts} from '../../store/product'
import ProductCard from '../ProductProfilePage/productCard';
import ProductModal from '../ProductModal/index'

function SearchBar() {
    const dispatch = useDispatch();
    let [search, setSearch] = useState('');
    const history = useHistory();
    const [isLoaded, setIsLoaded] = useState(false)
    const try1 = document?.getElementsByClassName("searchList")[0];
    const testing = document?.getElementById('root')
    const testing2 = document?.getElementById('pgContent')
    const body = document.getElementsByTagName('body')[0]
    const searchBarT = document.getElementsByClassName('searchBarT')[0];
    const searchBar2 = document.getElementsByClassName('searchBarExpands')[0];

    useEffect(() => {
        if (search.length > 0) {
            try1?.classList?.remove('hide')
            dispatch(searchProducts(search));
            body.classList.add('no-scroll')
            searchBar2.classList.add('more');
          }
        if (search.length === 0) {
            try1?.classList?.add('hide')
            body.classList.add('no-scroll')
        }
    setIsLoaded(true);
    }, [dispatch, search]);

    let searchResults = useSelector((state) => state.products.searchedResults);

    testing?.addEventListener("click", function() {
        try1?.classList?.add('hide')
        body.classList.remove('no-scroll')
        searchBar2?.classList?.remove('more');
    });

    testing2?.addEventListener("click", function() {
        try1?.classList?.add('hide')
        body.classList.remove('no-scroll')
        searchBar2?.classList?.remove('more');
    });

    // const showResults = () => {
    //     try1?.classList?.remove('hide')
    // };

    const testt = () => {
        search = 's'
        setSearch(search)
        dispatch(searchProducts(search))
        body.classList.add('no-scroll')
        // searchBar2.classList.add('more');
    }

    const searchDropDown = (
        <div className="searchBarT">
        <form className="searchBarT">
          <div className="">
            <img className="searchIcon" src="https://user-images.githubusercontent.com/86431563/150604228-109bc4a5-1562-4e35-88ed-6a8a75a352bc.png" height="19px" width="19px"/>
            <input
                className="searchBarExpands"
                name='search'
                value={search}
                type="text"
                placeholder="Search Construct Hunt"
                // onFocus={() => showResults()}
                onChange={(e) => setSearch(e.target.value)}
            />
            <div className="searchList hide">
                {searchResults?.length > 0 && search.length > 0 ? (
                Object.values(searchResults).map((product) => (
                    <div key={product?.id}>
                    <ProductModal
                        product={product}
                    />
                    </div>
                ))
                ) : (
                <div className="noResults" onClick={testt}>View all results</div>
                )}
            </div>
          </div>
        </form>
      </div>
    )

    return (<>
        {searchDropDown}
    </>)
}

export default SearchBar;
