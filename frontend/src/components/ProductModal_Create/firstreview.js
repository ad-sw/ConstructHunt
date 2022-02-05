import React, { useState, useEffect } from 'react';
import {Modal} from '../../context/Modal';
import {useDispatch, useSelector} from 'react-redux';
import {deleteProduct, getProductsWithReviews} from '../../store/product';
import {useHistory} from 'react-router-dom';
import { createReview } from '../../store/review';
import {createProduct} from '../../store/product'
import {csrfFetch} from '../../store/csrf';

function FirstReview({userId, firstReview, setErrors, topicId, name, thumbnailUrl, link, tagline, description, galleryImage1, galleryImage2, galleryImage3}) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);

  useEffect(() => {
    (async () => {
        dispatch(getProductsWithReviews())
        setIsLoaded(true)
    })();
  }, [setIsLoaded]);

    const productsObj = useSelector(state => state?.products)
    const productArr = Object.values(productsObj)
    let productId = productArr[Object.entries(productsObj)?.length-1]?.id

    const handleSubmit = async (e) => {
        e.preventDefault();
        let galleryImages = []

        if (galleryImage1.length > 1) {
            galleryImages.push(galleryImage1);
        }
        if (galleryImage2.length > 1) {
            galleryImages.push(galleryImage2)
        }
        if (galleryImage3.length > 1) {
            galleryImages.push(galleryImage3)
        }

        const payload = {
            userId: userId,
            topicId: +topicId,
            name: name,
            thumbnailUrl: thumbnailUrl,
            galleryImage1: galleryImages[0],
            galleryImage2: galleryImages[1] | '',
            galleryImage3: galleryImages[2] | '',
            link: link,
            tagline: tagline,
            description: description
        }
        dispatch(createProduct(payload))?.then(isLoaded && foo())
        }

    async function foo() {
        let data;
        fetch("/api/products").then(function(response){
            data = response.json();
        });
        let result = await Promise.resolve('Response', data);
        setTimeout(() => {
            handle2()
        }, 1100)
        return result;
    }

    const handle2 = async () => {
        isLoaded && (
        dispatch(getProductsWithReviews()).then(
        productId = productArr[Object.entries(productsObj)?.length-1]?.id).then(
        dispatch(createReview({
        userId: userId,
        productId: productId+1,
        review: firstReview})))).then(history.push('/'))
    }

    return (<>
    <button className="createB9" type='submit' onClick={handleSubmit}>
        Launch now
    </button>
    </>);
}

export default FirstReview;
