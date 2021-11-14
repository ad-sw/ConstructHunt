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
        setShowModal(false);
      };

    return (
        <div className="formCreate" >
          <form onSubmit={handleSubmit}>
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
            <button type='submit'>Create Product</button>
          </form>
        </div>
      );
}

export default ProductFormCreate;
