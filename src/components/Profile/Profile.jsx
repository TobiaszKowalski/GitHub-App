import React from 'react';
import { useSelector } from 'react-redux';
import ReposList from './ReposList/ReposList';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import InitialScreen from './InitialScreen/InitialScreen';
import UserNotFound from './UserNotFound/UserNotFound';
import './Profile.css';


const Profile = () => {

    const user = useSelector(state => state.user);

    if (!user.isUserFound) {
        return (
            <div className = 'container'>
                <UserNotFound />
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