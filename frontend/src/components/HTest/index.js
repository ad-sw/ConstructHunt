import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {getProducts} from '../../store/product'
import{ NavLink } from 'react-router-dom';
import '../../../src/index'
import {getAllReviews} from "../../store/review";

export default function HomeTest(){
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        (async () => {
            await dispatch(getProducts())
            await dispatch(getAllReviews())
            setIsLoaded(true);
        })();
    }, [dispatch, sessionUser])

    const products = useSelector(state => Object.values(state.products))
    const reviews = useSelector(state => Object.values(state.reviews))
    let reviewProd = products?.map(product => {
        reviews.map(review => {
            let newArr = [];
            if (review.productId === product?.id) {
                newArr.push(review.productId)
            }
            return newArr;
        })
    })




    return reviewProd;
}
