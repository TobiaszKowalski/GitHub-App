import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import SearchBar from './components/SearchBar/SearchBar';
import Profile from './components/Profile/Profile';
import Preloader from './components/Preloader/Preloader';

const App = (props) => {

  const isFetching = useSelector(state => state.user.isFetching);

  return (
      <div className = 'wrapper'>
        <SearchBar />
        {
          isFetching === true 
          ? <Preloader />
          : <Profile />
        }
      </div>
  );
}

export default App;
