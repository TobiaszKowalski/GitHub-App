import React from 'react';
import { useSelector } from 'react-redux';
import ReposItem from './ReposItem/ReposItem';
import './RepoList.css';

const ReposList = () => {
    
    const repos = useSelector(state => state.repos.items);

    return (
        <div className = 'reposList'>
            {repos.map(repo => <ReposItem key = {repo.id} repo = {repo} />)}
        </div>
    )
}

export default ReposList