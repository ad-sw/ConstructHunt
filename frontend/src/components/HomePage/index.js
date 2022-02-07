import React, { useEffect, useState } from "react";
import { Modal } from '../../context/Modal';
import { useSelector, useDispatch } from 'react-redux';
import {getProducts, getProductsWithReviews} from '../../store/product'
import ProductProfilePgModal from "../ProductProfilePage";
import '../../../src/index'
import {getAllReviews} from "../../store/review";
import ProductModal from '../ProductModal'
import { NavLink } from 'react-router-dom';

export default function HomePage(){
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const [isLoaded, setIsLoaded] = useState(false)
    const [showModal, setShowModal] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const body = document.getElementsByTagName('body')[0]
    // body.classList.remove('no-scroll')

    useEffect(() => {
        (async () => {
            // await dispatch(getProducts())
            // await dispatch(getAllReviews())
            body.classList.remove("no-scroll");
            await dispatch(getProductsWithReviews())
            setIsLoaded(true);
        })();
    }, [dispatch, sessionUser])

    const handleCancel = (e) => {
        e.preventDefault();
        setShowModal(false);
        }


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

    return (<>{isLoaded && (
    <div id="pgContent">
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
                <NavLink className="getStartedBtn" exact to={`under-construction`}>Get Started</NavLink>
            </div>
            <div className="testing4"></div>
            <ul className="miscLinks">
                Blog
                <li>Newsletter</li>
                <li>Ask</li>
                <li>Questions</li>
                <li><a href="https://ad-sw.github.io/#projects" target="_blank" rel="noopener noreferrer">Apps</a></li>
            </ul>
            <ul className="miscLinks2">
                <li>About</li>
                <li>FAQ</li>
                <li>Terms</li>
                <li>Privacy and Cookies</li>
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