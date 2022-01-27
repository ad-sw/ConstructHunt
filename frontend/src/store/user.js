import {csrfFetch} from './csrf';

const GET_ALL_USERS = "user/GET_ALL_USERS";

const loadAllUsers = (users) => {
    return {
        type: GET_ALL_USERS,
        payload: users,
    };
};

  export const getAllUsers = () => async (dispatch) => {
    const res = await csrfFetch(`/api/users`, {
        method: "GET",
        headers: {
        "Content-Type": "application/json",
        },
    });
    const data = await res.json();
    dispatch(loadAllUsers(data));
};

const userReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_ALL_USERS:
            const newState = {...state};
            action.payload.forEach(user => {
                newState[user.id] = user;
              });
            return newState;
        default:
            return state;
    }
};

export default userReducer;
