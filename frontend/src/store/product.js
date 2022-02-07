import {csrfFetch} from './csrf';

const LOAD_PRODUCTS = 'product/LOAD';
const LOAD_PRODUCTS_WITH_REVIEWS = 'product/LOAD_PRODUCTS_WITH_REVIEWS';
const UPDATE_PRODUCTS = 'product/UPDATE';
const ADD_PRODUCTS = 'product/ADD';
const DELETE_PRODUCTS = 'product/DELETE';

const load = (products) => ({
    type: LOAD_PRODUCTS,
    products
  });

const add = (product) => ({
    type: ADD_PRODUCTS,
    product
})

const update = (product) => ({
    type: UPDATE_PRODUCTS,
    product
})

const remove = (productId) => ({
    type: DELETE_PRODUCTS,
    payload: productId
})

export const getProducts = () => async (dispatch) => {
    const response = await csrfFetch(`/api/products`);

    if (response.ok) {
        const products = await response.json();
        dispatch(load(products.products));
    }
};

export const getProductsWithReviews = () => async (dispatch) => {
    const response = await csrfFetch(`/api/products/reviews`);

    if (response.ok) {
        const productsWithReviews = await response.json();
        dispatch(load(productsWithReviews));
    }
};

export const searchProducts = (searchTerm) => async (dispatch) => {
    const response = await csrfFetch(`/api/products/search/${searchTerm}`);

    if (response.ok) {
        const products = await response.json();
        dispatch(load(products.results));
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

    if(response.ok) {
        dispatch(remove(productId))
    } else if (response.status < 500){
        const data = await response.json()
        if (data.errors) {
        return data.errors
        }
    } else {
        return ['An error occurred. Please try again.']
    }
}

const productReducer = (state = {}, action) => {
    switch (action.type) {
        case LOAD_PRODUCTS:
            const newState = {};
            action.products.forEach(product => {
                newState[product.id] = product;
              })
            return newState;
        case LOAD_PRODUCTS_WITH_REVIEWS:
            const newState2 = {...state};
            return newState2;
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
            delete delState[action.payload];
            return delState;
        default:
            return state;
    }
};

export default productReducer;
