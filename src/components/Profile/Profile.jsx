import React from 'react';
import ReposList from './ReposList/ReposList';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = () => {

    return (
        <div className = 'wrapper'>
            <ProfileInfo />
            <ReposList />
        </div>
    )
}

export default Profile