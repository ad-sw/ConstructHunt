import {useSelector, useDispatch} from 'react-redux';
import {useEffect, useState} from 'react';
import "./ProductModal.css";
import { Modal } from '../../context/Modal';
import ProductProfilePgModal from "../ProductProfilePage";
import Upvotes from '../Upvotes'

function ProductModal({product, setShowModal2, thumbnailUrl, setSearch}) {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [showModal, setShowModal] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false)
    const try1 = document?.getElementsByClassName("searchList")[0];
    const searchBar2 = document.getElementsByClassName('searchBarExpands')[0];
    const newest = document.getElementsByTagName("body")[0];
    const body = document.getElementsByTagName('body')[0]

    useEffect(() => {
        (async () => {
            setIsLoaded(true);
        })();
    }, [dispatch, sessionUser])

    const handleCancel = (e) => {
        e.preventDefault();
        body?.classList?.remove('no-scroll')
        setShowModal(false);
    }

    const openMenu = (e) => {
        e.preventDefault()
        searchBar2?.classList?.remove('more');
        try1?.classList?.add('hide')
        newest.classList.add("no-scroll");
        setShowModal(true);

    };

    const closeMenu = (e) => {
        e.preventDefault()
        body?.classList?.remove('no-scroll')
        setShowModal(false);
    };

    const topics = [['Freelance'], ["Open Source"], ['User Experience'], ['Design Tools'],
    ['Developer Tools'], ['Home'], ['Productivity'], ['Education'], ['Health & Fitness'], ['Music']]

    return (<>
    {isLoaded && (
    <div className="friendCard">
        <div className="soMany">
            <div className="soMany" key={product?.id}>
                <img onClick={openMenu} className="friendContent" src={product?.thumbnailUrl} alt="display"/>
                <div className="flex">
                    <div className="inline" onClick={openMenu}>
                        <div className="fullName">{product?.name}</div>
                        <div className="smallerTxt">{product?.tagline}</div>
                        <div className="txtDesc">
                            <div className="opacity">
                                <img className="bubble" src="https://user-images.githubusercontent.com/86431563/150877606-3394655d-b79c-4561-a1a3-b8313667ac29.png"/>
                                &nbsp; {product?.Reviews?.length}
                            </div>
                            <div>Free & Paid Options </div>
                            <div>•&nbsp;</div>
                            {topics[product?.topicId -1]}
                        </div>
                    </div>
                    {sessionUser && (
                    <div className="upvote">
                        <img className="arrow" src="https://user-images.githubusercontent.com/86431563/150881722-fe0f3572-0d7a-4f6e-a237-3ea07be4197d.png"/>
                        <div className="upvoteText">0</div>
                    </div>)}
                    {!sessionUser && (
                    <Upvotes/>)}
                </div>
            </div>
        </div>
    </div>)}
    {isLoaded && (showModal && (
        <Modal onClose={closeMenu}>
            <ProductProfilePgModal product={product} setShowModal={setShowModal} showModal={showModal} thumbnailUrl={thumbnailUrl}/>
            <button className="circleClose" onClick={handleCancel} >x</button>
        </Modal>))}
    </>);
}

export default ProductModal;