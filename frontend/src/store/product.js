import {csrfFetch} from './csrf';

const LOAD_PRODUCTS = 'product/LOAD';
const UPDATE_PRODUCTS = 'product/UPDATE';
const ADD_PRODUCTS = 'product/ADD';
const DELETE_PRODUCTS = 'product/DELETE';

//action
const load = (products) => ({
    type: LOAD_PRODUCTS,
    products
  });


const update = (product) => ({
    type: UPDATE_PRODUCTS,
    product
})

const add = (product) => ({
    type: ADD_PRODUCTS,
    product
})

const remove = (id) => ({
    type: DELETE_PRODUCTS,
    id
})

//thunk
export const getProducts = () => async (dispatch) => {
    const response = await csrfFetch(`/api/products`);

    if (response.ok) {
        const products = await response.json();
        dispatch(load(products.products));
    }
};

export const createProduct = (payload) => async (dispatch) => {
    const response = await csrfFetch(`/api/products`, {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(payload)
    });

    if (response.ok) {
        const product = await response.json();
        dispatch(add(product.product));
    }
}

export const updateProduct = (payload) => async (dispatch) => {
    const response = await csrfFetch(`/api/products/${payload.productId}`, {
        method: "PUT",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(payload)
    });

    if (response.ok) {
        const product = await response.json();
        dispatch(update(product.product));
    }
}

export const deleteProduct = (productId) => async (dispatch) => {
    const response = await csrfFetch(`/api/products/${productId}`, {
        method: "DELETE"
    });

    if (response.ok) {
        const productId = await response.json();
        dispatch(remove(productId.productId))
    }
}

//reducer
const productReducer = (state = {}, action) => {
    switch (action.type) {
        case LOAD_PRODUCTS:
            const newState = {};
            action.products.forEach(product => {
                newState[product.id] = product;
              })
            return newState;

        case ADD_PRODUCTS:
            const addState = {...state};
            addState[action.product.id] = action.product;
            return addState;

        case UPDATE_PRODUCTS:
            const updateState = {...state};
            updateState[action.product.id] = action.product;
            return updateState;

        case DELETE_PRODUCTS:
            const delState = {...state};
            delete delState[action.id];
            return delState;

        default:
            return state;
    }
};

export default productReducer;
