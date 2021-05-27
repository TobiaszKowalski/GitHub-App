import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUser } from '../../API/api';
import gitHubLogo from '../../assets/github-logo.svg';
import './SearchBar.css';

const SearchBar = () => {

    const [searchValue, setSearchValue] = useState('');
    const dispatch = useDispatch();

    let handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getUser(searchValue))
    }

    let handleChange = (e) => {
        console.log(e.target.value)
        e.preventDefault();
        setSearchValue(prev => e.target.value)
        console.log(searchValue)
    }

    /*useEffect(() => {
        const listener = event => {
          if (event.code === "Enter" || event.code === "NumpadEnter") {
            handleSubmit();
          }
        };
        document.addEventListener("keydown", listener);
        return () => {
          document.removeEventListener("keydown", listener);
        };
      }, []);*/

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