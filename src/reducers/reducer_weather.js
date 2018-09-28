import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {
	switch (action.type) {
		case FETCH_WEATHER:
			// return state.concat([action.payload.data]);
			// below equals above
			return [action.payload.data, ...state];

		default:
			return state;
	}
	// console.log('action received', action);
}
