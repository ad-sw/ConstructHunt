import {useSelector, useDispatch} from 'react-redux';
import {getProducts} from '../../store/product';
import {useEffect, useState} from 'react';
import SignupFormModal from '../SignupFormModal';
import { NavLink /*, useHistory*/ } from 'react-router-dom';
// import ProductModalUpdate from '../../components/ProductModal_Update';
// import ProductModalDelete from '../../components/ProductModal_Delete';
// import ReviewModal from '../../components/ReviewModal';
// import ReviewModalCreate from '../../components/ReviewModal_Create';
import {getProductsWithReviews} from '../../store/product'
import ProductFormCreate from "../../components/ProductModal_Create";
import "./ProductModal.css";
import { Modal } from '../../context/Modal';
import ProductProfilePgModal from "../ProductProfilePage";
import Upvotes from '../Upvotes'

function ProductModal({product, setShowModal2}) {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [showModal, setShowModal] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false)
    const newest = document.getElementsByTagName("body")[0];

    useEffect(() => {
        (async () => {
            // await dispatch(getProducts())
            // await dispatch(getAllReviews())
            await newest.classList.add("no-scroll");
            await dispatch(getProductsWithReviews())
            setIsLoaded(true);
        })();
    }, [dispatch, sessionUser])

    const handleCancel = (e) => {
        e.preventDefault();
        const body = document.getElementsByTagName('body')[0]
        body.classList.remove('no-scroll')
        setShowModal(false);
    }

    const openMenu = (e) => {
        e.preventDefault()
        // if (showModal) return;
        // document.documentElement.style.overflow = 'hidden';
        // document.body.scroll = "no";
        const newest = document.getElementsByTagName("body")[0];
        newest.classList.add("no-scroll");
        // const body = document.getElementsByTagName('body')[0];
        // body.classList.add('no-scroll');
        setShowModal(true);

    };

    const closeMenu = (e) => {
        e.preventDefault()
        const body = document.getElementsByTagName('body')[0]
        body.classList.remove('no-scroll')
        // document.documentElement.style.overflow = 'scroll';
        // document.body.scroll = "yes";
        setShowModal(false);
    };

    return (<>
    <div className="friendCard">
        <div className="soMany">
            <div className="soMany" key={product?.id}>
                    <img onClick={openMenu} className="friendContent" src={product?.imageUrl} alt="display"/>
                    <div className="flex">
                        <div className="inline" onClick={openMenu}>
                            <div className="fullName">{product?.title}</div>
                            <div className="smallerTxt">{product?.description}</div>
                            <div className="txtDesc"><div className="opacity">
                            <img className="bubble" src="https://user-images.githubusercontent.com/86431563/150877606-3394655d-b79c-4561-a1a3-b8313667ac29.png"/>
                            &nbsp; {product?.Reviews?.length}</div><div>Free & Paid Options </div>
                            <div>•&nbsp;</div>{(product?.id %2 === 0) && (<>Open Source</>)}{(product?.id % 2 !== 0) && (<>Freelance</>)}</div>
                        </div>
                        {!sessionUser && (
                        <Upvotes/>)}
                        {sessionUser && (
                        <div className="upvote">
                            <img className="arrow" src="https://user-images.githubusercontent.com/86431563/150881722-fe0f3572-0d7a-4f6e-a237-3ea07be4197d.png"/>
                            <div className="upvoteText">0</div>
                        </div>)}
                    </div>
            </div>
        </div>
    </div>
    {showModal && (
        <Modal onClose={closeMenu}>
            <ProductProfilePgModal product={product} setShowModal={setShowModal}/>
            <button className="circleClose" onClick={handleCancel} >x</button>
        </Modal>)}
    </>);
}

export default ProductModal;
