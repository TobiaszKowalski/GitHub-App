import React from 'react';
import { useSelector } from 'react-redux';
import ReposList from './ReposList/ReposList';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import InitialScreen from './InitialScreen/InitialScreen';
import UserNotFound from './UserNotFound/UserNotFound';
import ReposNotFound from './ReposNotFound/ReposNotFound';
import './Profile.css';


const Profile = () => {

    const user = useSelector(state => state.user);
    const repos = useSelector(state => state.repos.items);

    if (!user.isUserFound) {
        return (
            <div className = 'container'>
                <UserNotFound />
            </div>
        )
    }

    if (user.items[0] && repos.length === 0) {
        return (
            <div className = 'container'>
                <ProfileInfo />
                <ReposNotFound />
            </div>
        )
    }

    if (!user.items[0]) {
        return (
            <div className = 'container'>
                <InitialScreen />
            </div>
        )
    } else {
        return (
            <div className = 'container'>
                <ProfileInfo />
                <ReposList />
            </div>
        )
    }
}

export default Profile