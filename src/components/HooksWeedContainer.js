import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyWeed } from '../redux/weed/weedActions';

const HooksWeedContainer = () => {
	const numOfWeed = useSelector(state => state.weed.numOfWeed);
	const dispatch = useDispatch();
	return (
		<div>
			<h2>Num of Weed - {numOfWeed}</h2>
			<button onClick={() => dispatch(buyWeed())}>Buy Weed</button>
		</div>
	);
};

export default HooksWeedContainer;
