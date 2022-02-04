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
        setIsLoaded(true)
    })();
  }, [setIsLoaded]);

//   const productId = productArr[Object.entries(productsObj)?.length-1]?.id
//   const handleDelete = (e) => {
//     e.preventDefault();
//     dispatch(deleteProduct(product.id))
//     dispatch(getProductsWithReviews())
//     const body = document.getElementsByTagName('body')[0]
//     body.classList.remove('no-scroll')
//     setIsLoaded(true);
//     setShowMenu(false);
//   }

//   const handleCancel = (e) => {
//     e.preventDefault();
//     setShowMenu(false);
//   }

//   if (sessionUser?.id !== product?.userId) {
//     return null;
//   }

    // await dispatch(createReview({
    //     userId: userId,
    //     productId: num,
    //     review: firstReview,
    // }))

    // const productsObj = useSelector(state => state?.products)
    // const productArr = Object.values(productsObj)
    // const userProducts = productArr.filter(product => product?.userId === userId)
    // console.log(userProducts[userProducts.length-1].id, 'idk')

    const productsObj = useSelector(state => state?.products)
    // console.log(productsObj, '1')
    const productArr = Object.values(productsObj)
    // const productArr = Object.values(productsObj).then(response => response.json()).then(fetch('../api/products.json'))
    // console.log(productArr, '2')
    // let test = new Promise((resolve) => {
    //     fetch("./api/products.json").then((data) => {
    //       resolve(data);
    //     });
    //   });

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
        await dispatch(createProduct(payload))
        let productId = productArr[Object.entries(productsObj)?.length-1]?.id

        new Promise(async(resolve) => {
            await csrfFetch("/api/products").then((data) => {
              resolve(data);
            });
          })
        .then(response => response.json()).then(
            productId = productArr[Object.entries(productsObj)?.length-1]?.id
        )
        .then(
        await dispatch(createReview({
        userId: userId,
        productId: productId+1,
        review: firstReview}))
        ).then(history.push('/'))}

        // .then(console.log(productId, 'idkk'))
        // .then(setTimeout(
        //     await dispatch(createReview({
        //         userId: userId,
        //         productId: productId,
        //         review: firstReview,
        //     }))), [1000000000000])

        //     console.log(productId, 'idk')
        // }
        // .then(history.push('/')).then(
        //     console.log(userProducts, userProducts[userProducts.length-1].id, 'after')
        // )
        // .then(productId = userProducts[userProducts.length - 1].id)
        // .then(setTimeout(
        //         dispatch(createReview({
        //             userId: userId,
        //             productId: productId,
        //             review: firstReview,
        //         }))), [1000000])
        // }

    // function dumb(query) {
    //     return new Promise((resolve, reject) => {
    //         createProduct(query,(successResponse) => {
    //             resolve(successResponse);
    //         }, (errorResponse) => {
    //             reject(errorResponse);
    //         });
    //     });
    // }
    // console.log(productId, 'idk')

    return (<>
    {/* {dispatch(createReview({
        userId: userId,
        productId: productId,
        review: firstReview,
    }))} */}

    <button className="createB9" type='submit' onClick={handleSubmit}>
        Launch now
    </button>
    </>);
}

export default FirstReview;
