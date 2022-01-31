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

        let payload = {
          userId: sessionUser.id,
          title,
          imageUrl,
          link,
          description
        };
        // await dispatch(createProduct(payload));
      };

    return (<>
        <div id="pageWrap">
          <div className="leftSide">
            <img src="https://image.freepik.com/free-vector/flat-engineering-construction-illustrated_23-2148892788.jpg" width="88%" height="115%"/>
          </div>
          <div className="backColor">
            <div className='contents'>
              <div className="formWrap">
                Submit a product
              </div>
              <div className="classicBio">
                Found a cool product you want everyone to know about? Or maybe you made one yourself and want the world to know about it?
                You're in the right place. So relax and follow the steps.
              </div>
              <div className="someTxt">Link to the product</div>
              <form onSubmit={handleSubmit} className="field2">
                {/* <input
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
                /> */}
                <input
                className="test3"
                type="url"
                placeholder="https://www.constructhunt.herokuapp.com/"
                value={link}
                required
                onFocus={(e) => setLink('https://')}
                onChange={(e) => setLink(e.target.value)}
                />
                {/* <textarea
                placeholder="Description"
                value={description}
                required
                onChange={(e) => setDescription(e.target.value)}
                /> */}
                <button className="createB5" type='submit'>Get started</button>

                <div className="Qs">Frequent questions</div>
                <div className="totalWidth"><a className="linkThing" href="https://help.producthunt.com/en/articles/5473056-how-to-post-main-info">The info you need to come prepared with to post <svg width="6" height="12" xmlns="http://www.w3.org/2000/svg" class="styles_arrow__I_9GT"><path d="M1.781.375A1 1 0 00.22 1.625L3.72 6l-3.5 4.375a1 1 0 101.562 1.25l4-5a1 1 0 000-1.25l-4-5z" fill="#9ba1a1"></path></svg></a></div>
                <div className="totalWidth"><a className="linkThing" href="https://help.producthunt.com/en/articles/5473242-how-to-post-launching">What happens after immediately launching <svg width="6" height="12" xmlns="http://www.w3.org/2000/svg" class="styles_arrow__I_9GT"><path d="M1.781.375A1 1 0 00.22 1.625L3.72 6l-3.5 4.375a1 1 0 101.562 1.25l4-5a1 1 0 000-1.25l-4-5z" fill="#9ba1a1"></path></svg></a></div>
                <div className="totalWidth"><a className="linkThing" href="https://help.producthunt.com/en/articles/5473225-how-to-post-team">The launch team — know your role <svg width="6" height="12" xmlns="http://www.w3.org/2000/svg" class="styles_arrow__I_9GT"><path d="M1.781.375A1 1 0 00.22 1.625L3.72 6l-3.5 4.375a1 1 0 101.562 1.25l4-5a1 1 0 000-1.25l-4-5z" fill="#9ba1a1"></path></svg></a></div>
              </form>
              </div>
            </div>
        </div>
      </>);
}

export default ProductFormCreate;
