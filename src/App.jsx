import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar/SearchBar';
import ReposList from './components/ReposList/ReposList';
import Preloader from './components/Preloader/Preloader';

const App = (props) => {

  const isFetching = useSelector(state => state.user.isFetching);

  return (
    <BrowserRouter>
      <div className = 'wrapper'>
        <Route path = '/' component = {SearchBar} />
        {
          isFetching === true 
          ? <Preloader />
          : <Route path = '/' component = {ReposList} />
        }
      </div>
    </BrowserRouter>
  );
}

export default App;
