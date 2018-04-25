import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';


export default function (state = {}, action) {

	switch(action.type) {
		case DELETE_POST:
			return _.omit(state, action.payload);

		case FETCH_POST:
			// const post        = action.payload.data;
			// const newState    = { ...state };
			// newState[post.id] = post;
			// return newState;

			return { ...state, [action.payload.data.id]: action.payload.data} //key interpolation

		case FETCH_POSTS:
			console.log("Data --> ", action.payload.data); //array of posts 
			return _.mapKeys(action.payload.data, 'id');  // transform array of posts to object
		
		default: 
			return state;
	}
}