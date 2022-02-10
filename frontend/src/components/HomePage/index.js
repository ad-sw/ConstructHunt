import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {getProductsWithReviews} from '../../store/product'
import '../../../src/index'
import ProductModal from '../ProductModal'
import { useHistory, Link } from 'react-router-dom';

export default function HomePage(){
    const dispatch = useDispatch()
    const [isLoaded, setIsLoaded] = useState(false)
    const history = useHistory();

    const body = document.getElementsByTagName('body')[0]

    useEffect(() => {
        (async () => {
            body.classList.remove("no-scroll");
            await dispatch(getProductsWithReviews())
            setIsLoaded(true);
        })();
    }, [setIsLoaded, dispatch, body.classList])

    const products = useSelector(state => Object.values(state.products))

    let productCont = products?.map(product => {
        return (
            <ProductModal key={product?.id} product={product} />
        )
    })

    if (!isLoaded) {
        return (
            <div id="loadingGif">
                <img src={"https://cdn.dribbble.com/users/56427/screenshots/6003020/budio_hero_illustration_for_animation_2.gif"} height="615px" width="850px" alt="loading"/>
                <div className="loadText">Loading</div>
            </div>
            );
        }

    const navFunc = (e) => {
        return history.push('/under-construction')
    };

    return (<>{isLoaded && (
    <div id="pgContent">
        <div className="tst"></div>
        <div className="products">
        <div className="titleDiv">Is the next 🏛️ here?</div>
            {productCont}
            </div>
        <div className="stuff">
            <a className="rightAreaHolder" href="https://www.archdaily.com/search/competitions" target="_blank" rel="noopener noreferrer">
                {/* <img className="rightAreaHolder2" src="https://user-images.githubusercontent.com/86431563/152721788-17b2afbf-0d27-4f4d-bacb-d2092e7172ab.PNG" width="280px" height="300px"/> */}
            </a>
            <div className="testing4"></div>
            <div className="testing5">
                <div className="headerInfo">Launching soon?</div>
                <div className="innerInfo">Create your own Upcoming page and start building an audience for your launch 🚀</div>
                <button className="getStartedBtn" onClick={navFunc}>Get Started</button>
            </div>
            <div className="testing4"></div>
            <ul className="miscLinks">
                <a href="https://www.archdaily.com/tag/top100/" target="_blank" rel="noopener noreferrer">Blog</a>
                <li><a href="https://www.archdaily.com/architecture-news?ad_source=jv-header&ad_name=main-menu" target="_blank" rel="noopener noreferrer">Newsletter</a></li>
                <li><a href="https://www.archdaily.com/contact?ad_source=jv-header&ad_name=hamburger_menu" target="_blank" rel="noopener noreferrer">Ask</a></li>
                <li><a href="https://www.producthunt.com/questions" target="_blank" rel="noopener noreferrer">Questions</a></li>
                <li><a href="https://ad-sw.github.io/#projects" target="_blank" rel="noopener noreferrer">Apps</a></li>
            </ul>
            <ul className="miscLinks2">
                <li><Link exact to={`/about`}>About</Link></li>
                <li><a href="https://help.producthunt.com/en/" target="_blank" rel="noopener noreferrer">FAQ</a></li>
                <li><a href="https://www.archdaily.com/search/projects?ad_source=jv-header&ad_name=main-menu" target="_blank" rel="noopener noreferrer">Terms</a></li>
                <li><a href="https://www.archdaily.com/content/privacy-policy?ad_source=jv-header&ad_name=hamburger_menu" target="_blank" rel="noopener noreferrer">Privacy and Cookies</a></li>
            </ul>
            <ul className="miscLinks3">
                <li><a href="https://www.archdaily.com/?ad_name=small-logo" target="_blank" rel="noopener noreferrer">Archdaily</a></li>
                <li><a href="https://landezine.com/" target="_blank" rel="noopener noreferrer">Landezine</a></li>
                <li><a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer">Pinterest</a></li>
                <li><a href="https://www.archdaily.com/advertise?ad_source=jv-header" target="_blank" rel="noopener noreferrer">Advertise</a></li>
            </ul>
            <div className="last">© 2022 CONSTRUCT HUNT</div>
        </div>
    </div>
    )}
    </>)
}
