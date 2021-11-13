import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {createProduct} from '../../store/product';

function ProductFormCreate({setShowModal}) {
    const [title, setTitle] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [link, setLink] = useState('');
    const [description, setDescription] = useState('');

    const sessionUser = useSelector(state => state.session.user);

    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
          userId: sessionUser.id,
          title,
          imageUrl,
          link,
          description
        };

        await dispatch(createProduct(payload));
      };

    const handleClick = (e) => {
      handleSubmit(e);
      setShowModal(false);
    }

    return (
        <div className="formCreate" >
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              placeholder='Title'
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
            <input
            type="url"
            placeholder="Image"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            />
            <input
            type="url"
            placeholder="Link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            />
            <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />
            <button id="CreateProductBtn" type='submit' onClick={e => handleClick(e)}>Create New Product</button>
          </form>
        </div>
      );
}

export default ProductFormCreate;
