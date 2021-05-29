import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, getRepos, getFollowers, getFollowing } from '../../API/api';
import { setLoad } from '../../store/reducers/reposReducer';
import gitHubLogo from '../../assets/github-logo.svg';
import './SearchBar.css';



const SearchBar = () => {

    const [searchValue, setSearchValue] = useState('');
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.items);
    const isLoaded = useSelector(state => state.repos.isLoaded);

    let handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getUser(searchValue));
        setSearchValue('')
    }

    let handleChange = (e) => {
        e.preventDefault();
        setSearchValue(e.target.value)
    }

    useEffect(() => {
        if (!isLoaded && user[0]) {
            dispatch(getFollowers(user[0].login))
            dispatch(getFollowing(user[0].login))
            dispatch(getRepos(user[0].login))
            dispatch(setLoad(true))
        } else {
            return
        }
    }, [user])

    return (
        <div className = 'searchBarHeader'>
            <img src = {gitHubLogo} alt = '' />
            <form onSubmit = {handleSubmit}>
                <input 
                    value = {searchValue}
                    onChange = {handleChange}
                    type = 'text'
                    placeholder = 'Enter GitHub username'
                    className = 'searchInput'
                />
            </form>
        </div>
    )
}

export default SearchBar