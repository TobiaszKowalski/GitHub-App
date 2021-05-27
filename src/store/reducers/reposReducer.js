const SET_REPOS = 'SET_REPOS';
const SET_LOAD = 'SET_LOAD';


const initialState = {
    items: [],
    isLoaded: false
};

const reposReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_REPOS: 
            return {
                ...state,
                items: action.payload
            }  
        case SET_LOAD: 
            return {
                ...state,
                isLoaded: action.payload
            }  
        default:
            return state;
    }
};

export const setRepos = (repos) => ({
    type: SET_REPOS, 
    payload: repos
});

export const setLoad = (boolean) => ({
    type: SET_LOAD, 
    payload: boolean
});

export default reposReducer