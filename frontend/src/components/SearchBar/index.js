import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect} from 'react';
import {searchProducts} from '../../store/product';
import "./SearchBar.css";
import {getProducts} from '../../store/product'
import ProductModal from '../ProductModal/index'

function SearchBar() {
    const dispatch = useDispatch();
    let [search, setSearch] = useState('');
    const [isLoaded, setIsLoaded] = useState(false)
    const searchListVis = document?.getElementsByClassName("searchList")[0];
    const pgContent = document?.getElementById('pgContent')
    const searchBar2 = document.getElementsByClassName('searchBarExpands')[0];
    // const root = document?.getElementById('root')
    // const navbar = document?.getElementById('navbar')
    // const body = document.getElementsByTagName('body')[0]
    // const searchBarT = document.getElementsByClassName('searchBarT')[0];

    useEffect(() => {
        if (search.length > 0) {
            searchListVis?.classList?.remove('hide')
            dispatch(searchProducts(search));
            searchBar2?.classList?.add('more');
          }
        if (search.length === 0) {
            searchListVis?.classList?.add('hide')
            searchBar2?.classList?.remove('more');
        }
    setIsLoaded(true);
    }, [dispatch, search]);

    let searchResults = useSelector((state) => state.products.searchedResults);
    let products1 = useSelector((state) => state.products);
    let products = Object.values(products1)

    //solves issue completely to have click-based render, but makes display flash once
    // root?.addEventListener("click", function() {
    //     searchListVis?.classList?.add('hide')
    //     // root?.classList?.add('hide')
    //     // body.classList.remove('no-scroll')
    //     searchBar2?.classList?.remove('more');
    // });

 //////prior to changing navbar to id, this is how with className://///
    // navbar.addEventListener("click", function() {
    //     searchListVis?.classList?.add('hide')
    //     // root?.classList?.add('hide')
    //     // body.classList.remove('no-scroll')
    //     searchBar2?.classList?.remove('more');
    //     setSearch('')
    // });

    // let myFunction = function() {
    //     searchListVis?.classList?.add('hide')
    //     searchBar2?.classList?.remove('more');
    //     setSearch('')
    // };

    // for (let i = 0; i < navbar.length; i++) {
    //     navbar[i].addEventListener('click', myFunction, false);
    // }

  //the id navbar way vs className
    // navbar?.addEventListener("click", function() {
    //     searchListVis?.classList?.add('hide')
    //     // root?.classList?.add('hide')
    //     // body.classList.remove('no-scroll')
    //     searchBar2?.classList?.remove('more');
    //     setSearch('')
    // });

    pgContent?.addEventListener("click", function() {
        searchListVis?.classList?.add('hide')
        searchBar2?.classList?.remove('more');
        setSearch('')
    });

    const showResults = () => {
        searchListVis?.classList?.remove('hide')
    };

    const testt = () => {
        search = 'All results:'
        setSearch(search)
        dispatch(getProducts())
    }

    // const hideSearch = (e) => {
    //     if (!e.currentTarget.contains(e.relatedTarget)) {
    //       document.querySelector(".searchList").classList.add("hide");
    //     }
    //   };

    const descriptionAbout = document?.getElementById('descriptionAbout')
    descriptionAbout?.addEventListener("click", function() {
        searchListVis?.classList?.add('hide')
        searchBar2?.classList?.remove('more');
    });

    const searchDropDown = (
        <div className="searchBarT">
        <form className="searchBarT"> {/*could do onBlur={(e) => hideList(e)} but prevents modal pop-ups*/}
          <div className="">
            <img className="searchIcon" src="https://user-images.githubusercontent.com/86431563/150604228-109bc4a5-1562-4e35-88ed-6a8a75a352bc.png" height="19px" width="19px"/>
            <input
                className="searchBarExpands"
                name='search'
                value={search}
                type="text"
                placeholder="Search Construct Hunt"
                onFocus={() => showResults()} //could comment out for click-base display rendering, but makes all results slightly flash
                onChange={(e) => setSearch(e.target.value)}
            />
            <div className="searchList hide">
                {searchResults?.length > 0 && search.length > 0 && search !== 'All results:' && (<>
                <div className="testerStuff">PRODUCTS →</div>
                <div className="clearBtn" onClick={(e) => setSearch('cleared')}>clear</div></>)}
                {searchResults?.length > 0 && search.length > 0 && search !== 'All results:' ? (
                Object.values(searchResults).map((product) => (
                    <div key={product?.id}>
                    <div className="r">
                        <ProductModal product={product} />
                    </div>
                    </div>
                )))
                : (
                search !== 'All results:' &&
                <div className="noResults" onClick={testt}>View all results</div>
                )}

                {products?.length > 0 && search === 'All results:' && (<>
                <div className="testerStuff">PRODUCTS →</div>
                <div className="clearBtn" onClick={(e) => setSearch('cleared')}>clear</div></>)}
                {products?.length > 0 && search === 'All results:' && (
                Object.values(products).map((product) => (
                    <div key={product?.id}>
                    <ProductModal product={product}
                    />
                    </div>
                ))
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
