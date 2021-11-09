import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {updateProduct} from '../../store/product';

function ProductFormUpdate({product, setShowModal}) {
    const [title, setTitle] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [link, setLink] = useState('');
    const [description, setDescription] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
          title,
          imageUrl,
          link,
          description,
          productId: product.id
        };

        await dispatch(updateProduct(payload));
      };

    const handleClick = (e) => {
      handleSubmit(e);
      setShowModal(false);
    }

    return (
        <div>
          <form className="formUpdate" onSubmit={handleSubmit}>
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
            <button type='submit' onClick={e => handleClick(e)}>Update Product</button>
          </form>
        </div>
      );
}

export default ProductFormUpdate;
