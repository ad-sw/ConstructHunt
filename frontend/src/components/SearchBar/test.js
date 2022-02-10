import {useSelector, useDispatch} from 'react-redux';
import {useEffect, useState} from 'react';
import { Modal } from '../../context/Modal';
import ProductProfilePgModal from "../ProductProfilePage";
import Upvotes from '../Upvotes'
import "./SearchBar.css";

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
        newest?.classList?.add("no-scroll");
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
    <div className="friendCard2">
        <div className="soMany2">
            <div className="soMany2" key={product?.id}>
                <img onClick={openMenu} className="friendContent2" src={product?.thumbnailUrl} alt="display"/>
                <div className="flex2">
                    <div className="inline2" onClick={openMenu}>
                        <div className="fullName2">{product?.name}</div>
                        <div className="smallerTxt2">{product?.tagline}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )}
    {isLoaded && (showModal && (
        <Modal onClose={closeMenu}>
            <ProductProfilePgModal product={product} setShowModal={setShowModal} showModal={showModal} thumbnailUrl={thumbnailUrl}/>
            <button className="circleClose" onClick={handleCancel} >x</button>
        </Modal>))}
    </>);
}

export default ProductModal;
