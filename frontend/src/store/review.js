import {csrfFetch} from './csrf';

const LOAD_REVIEWS = 'review/LOAD';
const UPDATE_REVIEW = 'review/UPDATE';
const ADD_REVIEW = 'review/ADD';
const DELETE_REVIEW = 'review/DELETE';
const GET_ALL_REVIEWS = "reviews/GET_ALL_REVIEWS";


const load = (reviews) => ({
    type: LOAD_REVIEWS,
    reviews
});

const loadAll = (reviews) => {
return {
    type: GET_ALL_REVIEWS,
    reviews,
}};

const add = (review) => ({
    type: ADD_REVIEW,
    review
});

const update = (review) => ({
    type: UPDATE_REVIEW,
    review
});

const remove = (reviewId) => ({
    type: DELETE_REVIEW,
    reviewId
});


export const getAllReviews = () => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews/`);
    if (response.ok) {
        const reviews = await response.json();
        dispatch(loadAll(reviews));
    }
};

export const getReviews = (productId) => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews/${productId}`);
    if (response.ok) {
        const reviews = await response.json();
        dispatch(load(reviews.reviews));
    }
};

export const createReview = (payload) => async (dispatch) => {
    console.log(payload, 'comment fired')
    const response = await csrfFetch(`/api/reviews/${payload.productId}`, {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(payload)
    })

    if (response.ok) {
        const review = await response.json();
        dispatch(add([review.review]));
    }
};

export const updateReview = (payload) => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews/${payload.reviewId}`, {
        method: "PUT",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(payload)
    })

    if (response.ok) {
        const review = await response.json();
        dispatch(update(review.review));
    }
};

export const deleteReview = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews/${id}`, {
      method: "DELETE"
    })

    if (response.ok) {
      const reviewId = await response.json();
      dispatch(remove(reviewId.reviewId));
    }
};


const reviewReducer = (state = {}, action) => {
    switch (action.type) {
        case LOAD_REVIEWS:
            const newState = {...state};
            action.reviews.forEach(review => {
                newState[review.id] = review;
              });
            return newState;
        case GET_ALL_REVIEWS:
            const newState2 = {...state};
            action.reviews.forEach(review => {
                newState2[review.id] = review;
            })
            return newState2;
        case ADD_REVIEW:
            const addState = {...state};
            action.review.forEach(reviewed => {
                addState[reviewed.id] = reviewed;
              });
            return addState;
        case UPDATE_REVIEW:
            const updateState = {...state};
            updateState[action.review.id] = action.review;
            return updateState;
        case DELETE_REVIEW:
              const delState = {...state};
              delete delState[action.reviewId];
              return delState;
        default:
            return state;
    }
};

export default reviewReducer;
