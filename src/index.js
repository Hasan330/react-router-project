import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import {BrowserRouter, Route } from 'react-router-dom'

import reducers from './reducers';
import PostsIndex from './components/posts_index';

import promise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

class Hello extends React.Component {
	render() {
		return <div> Hello </div>
	}
}


class Goodbye extends React.Component {
	render() {
		return <div> GoodBye! </div>
	}
}


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  	<BrowserRouter>
    	<div>
   			<Route path="/" component={PostsIndex} />
    	</div>
   </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
