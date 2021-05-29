const SET_REPOS = 'SET_REPOS';
const SET_LOAD = 'SET_LOAD';
const CLEAN_REPOS_STATE = 'CLEAN_REPOS_STATE';


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
        case CLEAN_REPOS_STATE: 
            return {
                ...state,
                items: [],
                isLoaded: false
            }  
        default:
            return state;
    }
};

export const setRepos = (repos) => ({
    type: SET_REPOS, 
    payload: repos
});

export const cleanReposState = () => ({
    type: CLEAN_REPOS_STATE
});

export const setLoad = (boolean) => ({
    type: SET_LOAD, 
    payload: boolean
});

export default reposReducer