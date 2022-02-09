import React, { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux';
import {getProductsWithReviews} from '../../store/product';
import {useHistory} from 'react-router-dom';
import {createProduct} from '../../store/product'

function FirstReview({userId, firstReview, setErrors, topicId, name, thumbnailUrl, link, tagline, description, galleryImage1, galleryImage2, galleryImage3}) {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false)
  const history = useHistory();

  useEffect(() => {
    (async () => {
        dispatch(getProductsWithReviews())
        setIsLoaded(true)
    })();
  }, [setIsLoaded]);

    // const productsObj = useSelector(state => state?.products)
    // const productArr = Object.values(productsObj)
    // let productId = productArr[Object.entries(productsObj)?.length-1]?.id

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
        dispatch(createProduct(payload))?.then(foo())
        }

    let newest = document.getElementsByClassName("createB9")[0];
    let newer = document.getElementsByClassName("loadingGiff")[0];
    let neww = document.getElementsByClassName("leftSide2")[0];
    let newww = document.getElementsByClassName("spaceBehindLeft")[0];
    let newwwt = document.getElementsByClassName("titlePg2")[0];
    let newwwtt = document.getElementsByClassName("innerBioPg2")[0];
    let newwwq = document.getElementsByClassName("thingBehindgoTopp")[0];
    let newwwqq = document.getElementsByClassName("goTopp")[0];
    let nen = document.getElementsByClassName("twoWays")[0];
    let nen2 = document.getElementsByClassName("anotherDiv")[0];

    async function foo() {
        // let data;
        newest.classList.add("hide");
        neww.classList.add('hide');
        newww.classList.add('hide');
        newwwt.classList.add('hide');
        newwwtt.classList.add('hide');
        newer.classList.add('show');
        newwwq.classList.add('hide');
        newwwqq.classList.add('hide');
        nen2.classList.add('hide');
        nen.classList.add('hide');
        // fetch("/api/products").then(function(response){
        //     data = response.json();
        // });
        // let result = await Promise.resolve('Response', data);
        setTimeout(() => {
            handle2()
        }, 2000)
        // return result;
    }

    const handle2 = async () => {
        // dispatch(getProductsWithReviews()).then(
        // )
        // .then(productId = productArr[Object.entries(productsObj)?.length-1]?.id)
        // .then(dispatch(createReview({
        //     userId: userId,
        //     productId: productId+1,
        //     review: firstReview})))
        // .then(
            history.push('/');
            newest.classList.remove("hide");
            neww.classList.remove('hide');
            newww.classList.remove('hide');
            newwwt.classList.remove('hide');
            newwwtt.classList.remove('hide');
            newwwq.classList.remove('hide');
            newwwqq.classList.remove('hide');
            nen.classList.remove('hide');
            nen2.classList.remove('hide');
            newer.classList.remove('show');
        //)
    }

    return (<>
    <button className="createB9" type='submit' onClick={handleSubmit}>
        Launch now
    </button>
    <div className="loadingGiff">
                <img src={"https://cdn.dribbble.com/users/77121/screenshots/11223084/media/49067e332b338ecd2e9f42afd6b605a3.gif"} height="615px" width="850px" alt="loading"/>
                <div className="loadText">{'Thank you for your patience as we verify and load your submission :)'}</div>
    </div>
    </>);
}

export default FirstReview;
