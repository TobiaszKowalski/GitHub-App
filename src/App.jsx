import React, { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar/SearchBar';
import ReposList from './components/ReposList/ReposList';
import Preloader from './components/Preloader/Preloader';

const App = () => {
  const dispatch = useDispatch();
  const isFetching = useSelector(state => state.repos.isFetching);


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
