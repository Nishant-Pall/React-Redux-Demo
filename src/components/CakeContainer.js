import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux';

const CakeContainer = (props) => {
    return (
        <div>
            <h2>Number of Cakes {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    );
};

// Selector to fetch state and map the state to props
const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    };
};

// gets the dispatch function and map it to buyCake prop
const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    };
};

// connect function connects a react component to redux store
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CakeContainer);
