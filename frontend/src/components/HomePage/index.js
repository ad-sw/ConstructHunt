import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {getProducts, getProductsWithReviews} from '../../store/product'
import{ NavLink } from 'react-router-dom';
import HomeTest from '../HTest'
import '../../../src/index'
import {getAllReviews} from "../../store/review";

export default function HomePage(){
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        (async () => {
            // await dispatch(getProducts())
            await dispatch(getAllReviews())
            await dispatch(getProductsWithReviews())
            setIsLoaded(true);
        })();
    }, [dispatch, sessionUser])

    const products = useSelector(state => Object.values(state.products))
    // const reviews = useSelector(state => state.products.Reviews)


    if (!isLoaded) {
        return (
        <div id="loadingGif">
                <img src={"https://cdn.dribbble.com/users/56427/screenshots/6003020/budio_hero_illustration_for_animation_2.gif"} height="400px" width="600px" alt="loading"/>
                <div className="loadText">Loading</div>
            </div>
        );
    }

    return (
    <div id="pgContent">{isLoaded && (<>
        <div className="products">
        <div className="titleDiv">Is the next 🏛️ here?</div>
            {products?.map(product => {
                return (
                    <div className="friendCard">
                        <div className="soMany" key={product?.id}>
                            <NavLink className="soMany" to={`/products/${product?.id}`}>
                                <img className="friendContent" src={product?.imageUrl} alt="display"></img>
                                <div className="flex">
                                    <div className="inline">
                                        <div className="fullName">{product?.title}</div>
                                        <div className="smallerTxt">{product?.description}</div>
                                        <div className="txtDesc"><div className="opacity"><img className="bubble" src="https://user-images.githubusercontent.com/86431563/150877606-3394655d-b79c-4561-a1a3-b8313667ac29.png"/>&nbsp; {product.Reviews.length}</div><div>Free & Paid Options </div><div>•&nbsp;&nbsp;&nbsp;Open Source</div></div>
                                    </div>
                                <div className="upvote">
                                   0
                                </div>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                )
            })}
            </div>
        <div className="stuff">
            placeholder
        </div>
    </>)}
    </div>
    )
}
