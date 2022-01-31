import React, { useState, useEffect } from 'react';
import {Modal} from '../../context/Modal';
import {useDispatch, useSelector} from 'react-redux';
import {deleteProduct, getProductsWithReviews} from '../../store/product';
import "./ProductDelete.css";
import {useHistory} from 'react-router-dom';

function ProductDelete({product, setShowModal, showModal}) {
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

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteProduct(product.id))
    .then(dispatch(getProductsWithReviews()))
    .then(setShowMenu(false))
  }
  const handleCancel = (e) => {
    e.preventDefault();
    setShowMenu(false);
  }

  if (sessionUser?.id !== product?.userId) {
    return null;
  }

  return (
    <>
    <div onClick={() => setShowMenu(true)}>
      <img src="https://user-images.githubusercontent.com/86431563/151363182-3977ff1c-23fe-49ae-b4e8-6a454064110f.png" className="idkk2"/>
    </div>
    {isLoaded && showMenu && (
          <Modal onClose={() => setShowMenu(false)}>
              <div className="formModal">
                <div className="innerModalContent">
                  <div className="letsBolden">Delete this product?</div>
                  <div className="outerWrapBtn">
                  <button type="submit" onClick={handleDelete} className="modalBtn">Yes</button>
                  <button type="submit" onClick={handleCancel} className="modalBtn">Cancel</button>
                  </div>
                </div>
              </div>
          </Modal>
      )}
    </>
  );
}

export default ProductDelete;
