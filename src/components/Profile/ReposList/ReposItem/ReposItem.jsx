import React from 'react';
import './ReposItem.css';

const ReposItem = (props) => {
    const repo = props.repo;

    return (
        <div className = 'item'>
            <div className='repoName'>
                <a href = {repo.html_url} target = '_blank' rel='noreferrer'>{repo.name}</a>
            </div>
            <p>{repo.description}</p>
        </div>
    )
}

export default ReposItem