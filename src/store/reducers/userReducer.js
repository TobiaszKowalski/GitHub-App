const SET_USER= 'SET_USER';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const CLEAN_USER_STATE = 'CLEAN_USER_STATE';

const initialState = {
    items: [],
    isFetching: false
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER: 
            return {
                ...state,
                items: action.payload.items
            }  
        case SET_IS_FETCHING: 
            return {
                ...state,
                isFetching: action.payload
            }  
        case CLEAN_USER_STATE: 
            return {
                ...state,
                items: [],
                isFetching: false
            }  
        default:
            return state;
    }
};

export const setUser = (repos) => ({
    type: SET_USER, 
    payload: repos
});

export const cleanUserState = () => ({
    type: CLEAN_USER_STATE
});

export const setIsFetching = (boolean) => ({
    type: SET_IS_FETCHING,
    payload: boolean 
});

export default userReducer