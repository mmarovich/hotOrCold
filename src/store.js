import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import * as reducers from './reducers/index';

const store = createStore(reducers.repositoryReducer, undefined, compose(window.devToolsExtension ? window.devToolsExtension() : f => f, applyMiddleware(thunk)));

export default store;