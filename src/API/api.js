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

export const getRepos = (userName) => {
    console.log(userName)
    return async (dispatch) => {
        dispatch(setIsFetching(true));
        const response = await axios.get(`${url}users/${userName}/repos`);
        dispatch(setRepos(response.data));
        dispatch(setIsFetching(false));
    }
}