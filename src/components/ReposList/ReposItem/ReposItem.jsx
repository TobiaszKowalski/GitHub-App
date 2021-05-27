import React from 'react';
import './ReposItem.css';

const ReposItem = (props) => {
    const repo = props.repo;

    return (
        <div className = 'item'>
            <div className='repoName'>
                <a href = {repo.html_url} target = '_blank'>{repo.name}</a>
            </div>
            <div className='repoDescription'>{repo.description}</div>
        </div>
    )
}

export default ReposItem