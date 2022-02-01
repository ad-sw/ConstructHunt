import React, { useEffect, useState } from "react";
import { Modal } from '../../context/Modal';
import { useSelector, useDispatch } from 'react-redux';
import {getProducts, getProductsWithReviews} from '../../store/product'
import ProductProfilePgModal from "../ProductProfilePage";
import '../../../src/index'
import {getAllReviews} from "../../store/review";
import ProductModal from '../ProductModal'

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

    return (
    <div id="pgContent">{isLoaded && (<>
        <div className="products">
        <div className="titleDiv">Is the next 🏛️ here?</div>
            {productCont}
            </div>
        <div className="stuff">
            placeholder
        </div>
    </>)}
    </div>
    )
}
