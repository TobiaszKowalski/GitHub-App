const SET_USER= 'SET_USER';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const SET_IS_USER_FOUND = 'SET_IS_USER_FOUND';
const CLEAN_USER_STATE = 'CLEAN_USER_STATE';
const SET_FOLLOWERS = 'SET_FOLLOWERS';
const SET_FOLLOWING = 'SET_FOLLOWING';

const initialState = {
    items: [],
    followers: [],
    following: [],
    isFetching: false,
    isUserFound: true,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER: 
            return {
                ...state,
                items: action.payload.items
            }  
        case SET_FOLLOWERS: 
            return {
                ...state,
                followers: action.payload
            }  
        case SET_FOLLOWING: 
            return {
                ...state,
                following: action.payload
            }  
        case SET_IS_FETCHING: 
            return {
                ...state,
                isFetching: action.payload
            }  
        case SET_IS_USER_FOUND: 
            return {
                ...state,
                isUserFound: action.payload
            }  
        case CLEAN_USER_STATE: 
            return {
                ...state,
                items: [],
                followers: [],
                following: [],
                isFetching: false,
                isUserFound: true
            }  
        default:
            return state;
    }
};

export const setUser = (repos) => ({
    type: SET_USER, 
    payload: repos
});

export const setFollowers = (data) => ({
    type: SET_FOLLOWERS, 
    payload: data
});

export const setFollowing = (data) => ({
    type: SET_FOLLOWING, 
    payload: data
});

export const cleanUserState = () => ({
    type: CLEAN_USER_STATE
});

export const setIsFetching = (boolean) => ({
    type: SET_IS_FETCHING,
    payload: boolean 
});

export const setIsUserFound = (boolean) => ({
    type: SET_IS_USER_FOUND,
    payload: boolean 
});

export default userReducer