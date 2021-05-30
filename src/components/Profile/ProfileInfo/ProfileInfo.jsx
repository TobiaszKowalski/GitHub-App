import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './ProfileInfo.css';

const ProfileInfo = () => {

    const user = useSelector(state => state.user);

    const [state, setState] = useState('')
    const [followers, setFollowers] = useState([])
    const [following, setFollowing] = useState([])

    useEffect(() => {
        if (user) {
            setState(user.items[0]);
            setFollowers(user.followers);
            setFollowing(user.following);
        } else {
            return
        }
    }, [user])

    return (
        <div className = 'profileWrapper'>
            <div className = 'userAvatarContainer'>
                <img className = 'userAvatar' src={state ? state.avatar_url : 'avatar_url'} alt='' />
            </div>
            <div className='loginContainer'>
                <a href = {state ? state.html_url : 'html_url'} target = '_blank'>{state ? state.login : 'login'}</a>
            </div>
            <div className='followersContainer'>
                <div>{followers.length}</div>
                <div>{following.length}</div>
            </div>
        </div>
    )
}

export default ProfileInfo