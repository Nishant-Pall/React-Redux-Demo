import React from 'react';
import { connect } from 'react-redux';
import { buyIceCream } from '../redux';

const IceCreamContainer = (props) => {
	return (
		<div>
			<h2>Number of IceCream {props.numOfIceCreams}</h2>
			<button onClick={props.buyIceCream}>Buy IceCream</button>
		</div>
	);
};

// Selector to fetch state and map the state to props
const mapStateToProps = state => {
	return {
		numOfIceCreams: state.iceCream.numOfIceCreams
	};
};

// gets the dispatch function and map it to buyIceCream prop
const mapDispatchToProps = dispatch => {
	return {
		buyIceCream: () => dispatch(buyIceCream())
	};
};

// connect function connects a react component to redux store
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(IceCreamContainer);
