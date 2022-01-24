import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {getProducts} from '../../store/product'
import{ NavLink } from 'react-router-dom';
// import ProductModal from '../ProductModal';
import '../../../src/index'

export default function HomePage(){
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        (async () => {
            await dispatch(getProducts())
            setIsLoaded(true)
        })();
    }, [dispatch, sessionUser])
    const products = useSelector(state => Object.values(state.products))


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
                                <div className="inline">
                                    <div className="fullName">{product?.title}</div>
                                    <div>{product?.description}</div>
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
