import React from 'react';
import { connect } from 'react-redux';
import { buyWeed } from '../redux/weed/weedActions';

const WeedContainer = (props) => {
	return (
		<div>
			<h2>Number of Weed - {props.numOfWeed}</h2>
			<button onClick={props.buyWeed}>Buy Weed</button>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		numOfWeed: state.weed.numOfWeed
	};
};

const mapDispatchToProps = dispatch => {
	return {
		buyWeed: () => dispatch(buyWeed())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(WeedContainer);
