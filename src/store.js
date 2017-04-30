import {createStore, compose} from 'redux';

import * as reducers from './reducers/index';

const store = createStore(reducers.repositoryReducer, undefined, compose(window.devToolsExtension ? window.devToolsExtension() : f => f));

export default store;