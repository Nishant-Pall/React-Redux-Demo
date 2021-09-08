import { BUY_WEED } from './weedTypes';

const initialState = {
	numOfWeed: 10000
};

const weedReducer = (state = initialState, action) => {
	switch (action.type) {
		case BUY_WEED:
			return {
				...state,
				numOfWeed: state.numOfWeed - 1
			};

		default:
			return state;
	}
};

export default weedReducer;