import { combineReducers } from 'redux';
import cakeReducer from './cake/cakeReducer';
import iceCreamReducer from './iceCream/iceCreamReducer';
import weedReducer from './weed/weedReducer';

const rootReducer = combineReducers({
	cake: cakeReducer,
	iceCream: iceCreamReducer,
	weed: weedReducer
});
export default rootReducer;