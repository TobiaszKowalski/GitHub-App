import { createStore, combineReducers, applyMiddleware } from 'redux';
import userReducer from './reducers/userReducer';
import reposReducer from './reducers/reposReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    user: userReducer,
    repos: reposReducer
})


const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

export default store;