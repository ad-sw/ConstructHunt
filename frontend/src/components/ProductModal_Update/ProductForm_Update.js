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
        setShowModal(false);
      };

    return (
        <div>
          <form className="formUpdate" onSubmit={handleSubmit}>
          <input
              type='text'
              placeholder='Title'
              value={title}
              required
              onChange={e => setTitle(e.target.value)}
            />
            <input
            type="url"
            placeholder="Image"
            value={imageUrl}
            required
            onChange={(e) => setImageUrl(e.target.value)}
            />
            <input
            type="url"
            placeholder="Link"
            value={link}
            required
            onChange={(e) => setLink(e.target.value)}
            />
            <textarea
            placeholder="Description"
            value={description}
            required
            onChange={(e) => setDescription(e.target.value)}
            />
            <button type='submit'>Update Product</button>
          </form>
        </div>
      );
}

export default ProductFormUpdate;
