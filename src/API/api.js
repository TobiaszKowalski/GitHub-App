import axios from 'axios';
import { setIsFetching, setUser } from '../store/reducers/userReducer';
import { setRepos } from '../store/reducers/reposReducer';

const url = 'https://api.github.com/';


export const getUser = (searchValue) => {
    return async (dispatch) => {
        dispatch(setIsFetching(true));
        const response = await axios.get(`${url}search/users?q=${searchValue}`);
        dispatch(setUser(response.data));
        dispatch(setIsFetching(false));
    }
}

export const getRepos = (reposUrl) => {
    console.log(reposUrl)
    return async (dispatch) => {
        dispatch(setIsFetching(true));
        const response = await axios.get(`${reposUrl}`);
        dispatch(setRepos(response.data));
        dispatch(setIsFetching(false));
    }
}