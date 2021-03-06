import axios from 'axios';
import { setIsFetching, setUser, setFollowers, setFollowing, cleanUserState, setIsUserFound } from '../store/reducers/userReducer';
import { setRepos, cleanReposState } from '../store/reducers/reposReducer';

const url = 'https://api.github.com/';


export const getUser = (searchValue) => {
    return async (dispatch) => {
        dispatch(setIsFetching(true));
        const response = await axios.get(`${url}search/users?q=${searchValue}`);
        dispatch(cleanUserState());
        dispatch(cleanReposState());
        if (!response.data.total_count) {
            dispatch(setIsUserFound(false))
        } else {
            dispatch(setUser(response.data));
            dispatch(setIsFetching(false));
        }
    }
}

export const getFollowers = (userName) => {
    return async (dispatch) => {
        dispatch(setIsFetching(true));
        const response = await axios.get(`${url}users/${userName}/followers?per_page=100`);
        dispatch(setFollowers(response.data));
        dispatch(setIsFetching(false));
    }
}

export const getFollowing = (userName) => {
    return async (dispatch) => {
        dispatch(setIsFetching(true));
        const response = await axios.get(`${url}users/${userName}/following?per_page=100`);
        dispatch(setFollowing(response.data));
        dispatch(setIsFetching(false));
    }
}

export const getRepos = (userName) => {
    return async (dispatch) => {
        dispatch(setIsFetching(true));
        const response = await axios.get(`${url}users/${userName}/repos?sort=updated&per_page=100`);
        dispatch(setRepos(response.data));
        dispatch(setIsFetching(false));
    }
}