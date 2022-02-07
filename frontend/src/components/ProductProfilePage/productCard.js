import {useSelector, useDispatch} from 'react-redux';
import {useEffect, useState} from 'react';
import ProductModalUpdate from '../../components/ProductModal_Update';
import ProductModalDelete from '../../components/ProductModal_Delete';
import ReviewModal from '../../components/ReviewModal';
import ProductProfilePgModal2 from '../../components/ProductProfilePage/SimilarProductProfile'
import "./ProductProfile.css";
import "../../components/ReviewModal/ReviewModal.css"
import { Modal } from '../../context/Modal';
import {getProductsWithReviews} from '../../store/product'
import ReviewFormCreate from '../../components/ReviewModal_Create/ReviewForm_Create';
import SignupFormModal from '../SignupFormModalCopy'

function ProductCard({product, ashowModal}) {
    const [showModal, setShowModal] = useState(false);
    const sessionUser = useSelector(state => state.session.user);
    const [isLoaded, setIsLoaded] = useState(false);
    const dispatch = useDispatch();

    const openMenu = (e) => {
        e.preventDefault()
        const newest = document.getElementsByTagName("body")[0];
        newest.classList.add("no-scroll");
        const newest2 = document.getElementsByClassName("product-container")[0];
        newest2.classList.add("hide");
        setShowModal(true);
    };

    const closeMenu = (e) => {
        e.preventDefault()
        const newest2 = document.getElementsByClassName("product-container")[0];
        newest2.classList.remove("hide");
        setShowModal(false);
    };

    const handleCancel = (e) => {
        e.preventDefault();
        const newest2 = document.getElementsByClassName("product-container")[0];
        newest2.classList.remove("hide");
        setShowModal(false);
    }

    return (<>
       <div className="similarProductCard" onClick={openMenu}>
             <img className="similarProductImgs" src={product?.thumbnailUrl}/>
             <div className="rightSideCard">
                 <div className="prodNameSim">{product?.name}</div>
                 <div className="prodTaglineSim">{product?.tagline}</div>
             </div>
        </div>
        {showModal && (
        <Modal onClose={closeMenu}>
          <ProductProfilePgModal2 showModal={ashowModal} product={product} setShowModal={setShowModal}
          topicId={product?.topicId}
          />
          <button className="circleClose" onClick={handleCancel}>x</button>
        </Modal>
      )}
    </>)
}
export default ProductCard;