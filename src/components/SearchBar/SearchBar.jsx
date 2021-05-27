import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, getRepos } from '../../API/api';
import gitHubLogo from '../../assets/github-logo.svg';
import './SearchBar.css';


let useFetching = (getRepos, data) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRepos(data));
  }, [])
}

const SearchBar = () => {

    const [searchValue, setSearchValue] = useState('');
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.items);

    if (user) {
      useFetching(getRepos, user.repos_url)
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getUser(searchValue));
    }

    let handleChange = (e) => {
        e.preventDefault();
        setSearchValue(e.target.value)
    }


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